import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Lapor from "../../../../models/LaporModel";
import Sewa from "../../../../models/SewaModel";


export async function GET() {
    await connectMongoDB();

    const lapor = await Lapor.find().populate({
        path: "sewaId",
        select: "nama kamar"
    });
    return NextResponse.json({ lapor });
}

export async function POST(request: Request) {
    const {nama_lapor, kamar_lapor, isi_lapor } = await request.json();
    await connectMongoDB();

    const penyewa = await Sewa.findOne({ nama: nama_lapor, kamar: kamar_lapor });

    if (!penyewa) {
        return NextResponse.json(
            {message: "Penyewa tidak ditemukan"},
            {status: 404}
        );
    }

    await Lapor.create({ nama_lapor, kamar_lapor, isi_lapor });
    return NextResponse.json({ message: "Laporan ditambahkan" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Lapor.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data dihapus" }, {status:200});
}