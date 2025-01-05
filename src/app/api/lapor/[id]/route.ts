import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Lapor from "../../../../../models/LaporModel";

type UpdateLaporPayload = {
    newNama_lapor: string;
    newKamar_lapor: string;
    newIsi_lapor: string;
  };

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }
  ): Promise<NextResponse> {
    const { id } = await params;

    const body: UpdateLaporPayload = await request.json();
    const { newNama_lapor: nama_lapor,  newKamar_lapor: kamar_lapor, newIsi_lapor: isi_lapor} = body;
    await connectMongoDB();
    await Lapor.findByIdAndUpdate(id, {nama_lapor, kamar_lapor, isi_lapor});
    return NextResponse.json ({ message: "Data Lapor Updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    const { id } = await params;
    await connectMongoDB();
    const lapor = await Lapor.findOne({ _id: id });
    return NextResponse.json({ lapor }, {status: 200});
}