import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Sewa from "../../../../models/SewaModel";



export async function GET() {
    await connectMongoDB();
    const sewa = await Sewa.find();
    return NextResponse.json({ sewa });
}

export async function POST(request: Request) {
    const {nama, hp, klg, ktp, kamar, tanggal} = await request.json();
    await connectMongoDB();
    await Sewa.create({ nama, hp, klg, ktp, kamar, tanggal });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Sewa.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data dihapus" }, {status:200});
}