import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Sewa from "../../../../../models/SewaModel";

type UpdateSewaPayload = {
    newNama: string;
    newHp: string;
    newKeluarga: string;
    newDurasi: string;
    newKamar: number;
    newTanggal: string;
  };

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }
  ): Promise<NextResponse> {
    const { id } = await params;

    const body: UpdateSewaPayload = await request.json();
    const { newNama: nama,  newHp: hp, newKeluarga:keluarga, newDurasi:durasi, newKamar:kamar, newTanggal:tanggal} = body;
    await connectMongoDB();
    await Sewa.findByIdAndUpdate(id, {nama,hp,keluarga,durasi,kamar,tanggal});
    return NextResponse.json ({ message: "Data sewa Updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    const { id } = await params;
    await connectMongoDB();
    const sewa = await Sewa.findOne({ _id: id })
    .populate({ path: "durasi", select: "durasi_sewa_kamar" })
    .populate({ path: "kamar", select: "nomor_kamar" });

    if (!sewa) {
      return NextResponse.json({ message: "Data sewa tidak ditemukan" }, { status: 404 });
  }

    return NextResponse.json({ sewa }, {status: 200});
}