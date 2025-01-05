import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Kamar from "../../../../models/KamarModel";

export async function GET() {
    try {
        await connectMongoDB();
        const kamar = await Kamar.find();
        return NextResponse.json({ kamar });
    } catch (err) {
        const error = err as Error; // Pastikan 'err' adalah instance dari Error
        return NextResponse.json(
            { message: "Error fetching data", error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const { jumlah } = await request.json();
        await connectMongoDB();
        const newKamar = await Kamar.create({ jumlah });
        return NextResponse.json({ message: "Data ditambahkan", data: newKamar }, { status: 201 });
    } catch (err) {
        const error = err as Error;
        return NextResponse.json(
            { message: "Error creating data", error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE({ params }: { params: { id: string } }) {
    try {
        const { id } = params; // Extract ID from params
        await connectMongoDB();
        const deletedKamar = await Kamar.findByIdAndDelete(id);
        if (!deletedKamar) {
            return NextResponse.json({ message: "Data tidak ditemukan" }, { status: 404 });
        }
        return NextResponse.json({ message: "Data dihapus" }, { status: 200 });
    } catch (err) {
        const error = err as Error;
        return NextResponse.json(
            { message: "Error deleting data", error: error.message },
            { status: 500 }
        );
    }
}