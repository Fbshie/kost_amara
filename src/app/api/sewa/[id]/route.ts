import { NextResponse } from "next/server";
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

export async function PUT(request: Request, {params}: {params: {id : string}} ) {
    const { id } = params;

    const body: UpdateSewaPayload = await request.json();
    const { newNama: nama,  newHp: hp, newKlg:klg, newKtp:ktp, newKamar:kamar, newTanggal:tanggal} = body;
    await connectMongoDB();
    await Sewa.findByIdAndUpdate(id, {nama,hp,klg,ktp,kamar,tanggal});
    return NextResponse.json ({ message: "Data sewa Updated" }, { status: 200 });
}

export async function GET(request : Request, {params}: {params: {id : string} } ) {
    const { id } = params;
    await connectMongoDB();
    const sewa = await Sewa.findOne({ _id: id });
    return NextResponse.json({ sewa }, {status: 200});
}