
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Sewa from "../../../../models/SewaModel";

export async function POST(request: Request) {
    const {nama, hp, klg, ktp, kamar} = await request.json();
    await connectMongoDB();
    await Sewa.create({ nama, hp, klg, ktp, kamar });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}