import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Kamar from "../../../../models/KamarModel";

export async function GET() {
    await connectMongoDB();
    const kamar = await Kamar.find();
    return NextResponse.json({ kamar });
}

export async function POST(request: Request) {
    const {jumlah} = await request.json();
    await connectMongoDB();
    await Kamar.create({ jumlah });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Kamar.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data dihapus" }, {status:200});
}