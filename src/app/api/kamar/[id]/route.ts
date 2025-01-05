import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Kamar from "../../../../../models/KamarModel";

type UpdateKamarPayload = {
    newJumlah: number;
  };

  export async function PUT(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
  
    const body: UpdateKamarPayload = await request.json();
    const { newJumlah: jumlah } = body;
  
    await connectMongoDB();
    await Kamar.findByIdAndUpdate(id, { jumlah });
  
    return NextResponse.json({ message: "Data Kamar Updated" }, { status: 200 });
  }

  export async function GET(_: Request, context: { params: { id: string } }) {
    const { id } = context.params;
  
    await connectMongoDB();
    const kamar = await Kamar.findById(id);
  
    return NextResponse.json({ kamar }, { status: 200 });
  }