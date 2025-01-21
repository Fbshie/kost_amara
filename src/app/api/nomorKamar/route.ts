import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import NomorKamar from "../../../../models/NomorKamarModel";

export async function GET() {
    await connectMongoDB();
    const nomorKamar = await NomorKamar.find();
    return NextResponse.json({ nomorKamar });
}

export async function POST(request: Request) {
    const {nomor_kamar} = await request.json();
    await connectMongoDB();
    await NomorKamar.create({ nomor_kamar });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}

