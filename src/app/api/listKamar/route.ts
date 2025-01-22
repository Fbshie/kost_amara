import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import ListKamar from "../../../../models/ListKamarModel";

export async function GET() {
    await connectMongoDB();
    const listKamar = await ListKamar.find();
    return NextResponse.json({ listKamar });
}

export async function POST(request: Request) {
    const {nomor_kamar} = await request.json();
    await connectMongoDB();
    await ListKamar.create({ nomor_kamar });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}

