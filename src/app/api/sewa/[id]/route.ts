import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Sewa from "../../../../../models/SewaModel";

type UpdateSewaPayload = {
    newNama: string;
    newHp: string;
    newKlg: string;
    newKtp: string;
    newKamar: number;
    newTanggal: string;
  };

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }
  ): Promise<NextResponse> {
    const { id } = await params;

    const body: UpdateSewaPayload = await request.json();
    const { newNama: nama,  newHp: hp, newKlg:klg, newKtp:ktp, newKamar:kamar, newTanggal:tanggal} = body;
    await connectMongoDB();
    await Sewa.findByIdAndUpdate(id, {nama,hp,klg,ktp,kamar,tanggal});
    return NextResponse.json ({ message: "Data sewa Updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    const { id } = await params;
    await connectMongoDB();
    const sewa = await Sewa.findOne({ _id: id });
    return NextResponse.json({ sewa }, {status: 200});
}