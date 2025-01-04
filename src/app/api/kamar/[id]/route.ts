import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Kamar from "../../../../../models/KamarModel";

type UpdateKamarPayload = {
    newJumlah: number;
  };

export async function PUT(request: Request, {params}: {params: {id : string}} ) {
    const { id } = params;

    const body: UpdateKamarPayload = await request.json();
    const { newJumlah:jumlah} = body;
    await connectMongoDB();
    await Kamar.findByIdAndUpdate(id, {jumlah});
    return NextResponse.json ({ message: "Data Kamar Updated" }, { status: 200 });
}

export async function GET(request : Request, {params}: {params: {id : string} } ) {
    const { id } = params;
    await connectMongoDB();
    const kamar = await Kamar.findOne({ _id: id });
    return NextResponse.json({ kamar }, {status: 200});
}