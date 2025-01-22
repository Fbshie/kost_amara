import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import WaktuSewa from "../../../../models/WaktuSewaModel";

export async function GET() {
    await connectMongoDB();
    const waktuSewa = await WaktuSewa.find();
    return NextResponse.json({ waktuSewa });
}

export async function POST(request: Request) {
    const {durasi_sewa_kamar} = await request.json();
    await connectMongoDB();
    await WaktuSewa.create({ durasi_sewa_kamar });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await WaktuSewa.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data dihapus" }, {status:200});
}