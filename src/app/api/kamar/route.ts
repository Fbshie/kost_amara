import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Kamar from "../../../../models/KamarModel";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await connectMongoDB();

    const { id } = params;
    if (id) {
        const kamar = await Kamar.findById(id);
        if (!kamar) {
            return NextResponse.json({ message: "Data tidak ditemukan" }, { status: 404 });
        }
        return NextResponse.json({ kamar });
    }

    const kamar = await Kamar.find();
    return NextResponse.json({ kamar });
}

export async function POST(request: NextRequest) {
    const { jumlah } = await request.json();
    await connectMongoDB();
    await Kamar.create({ jumlah });
    return NextResponse.json({ message: "Data ditambahkan" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID tidak diberikan" }, { status: 400 });
    }

    await connectMongoDB();
    const kamar = await Kamar.findByIdAndDelete(id);
    if (!kamar) {
        return NextResponse.json({ message: "Data tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ message: "Data dihapus" }, { status: 200 });
}