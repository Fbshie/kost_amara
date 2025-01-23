import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Sewa from "../../../../models/SewaModel";
import WaktuSewa from "../../../../models/WaktuSewaModel";
import ListKamar from "../../../../models/ListKamarModel";


export async function GET() {
    await connectMongoDB();
    const sewa = await Sewa.find().populate({
        path: "kamar",
        select: "nomor_kamar -_id"
    });
    return NextResponse.json({ sewa });
}

export async function POST(request: Request) {
    try {
        const { nama, hp, keluarga, durasi, kamar, tanggal } = await request.json();
        await connectMongoDB();

        const waktuSewa = await WaktuSewa.findById(durasi);
        if (!waktuSewa) {
            return NextResponse.json({ message: "Durasi tidak ditemukan" }, { status: 404 });
        }

        const listKamar = await ListKamar.findById(kamar);
        if (!listKamar) {
            return NextResponse.json({ message: "Nomor kamar tidak ditemukan" }, { status: 404 });
        }

        await Sewa.create({
            nama,
            hp,
            keluarga,
            durasi: waktuSewa.durasi_sewa_kamar,
            kamar: listKamar.nomor_kamar,
            tanggal,
        });

        return NextResponse.json({ message: "Data berhasil ditambahkan" }, { status: 201 });
    } catch (error) {
        console.error("Error di API POST /api/sewa:", error);
        return NextResponse.json(
            { message: "Terjadi kesalahan di server"},
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Sewa.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data dihapus" }, {status:200});
}