import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Kamar from "../../../../models/KamarModel";

export async function GET() {
    try {
      await connectMongoDB();
      const kamar = await Kamar.find();
      return NextResponse.json({ kamar }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch data", details: error.message },
        { status: 500 }
      );
    }
  }

  export async function POST(request: NextRequest) {
    try {
      const { jumlah }: { jumlah: number } = await request.json();
      await connectMongoDB();
      await Kamar.create({ jumlah });
      return NextResponse.json(
        { message: "Data added successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to add data", details: error.message },
        { status: 500 }
      );
    }
  }

  export async function DELETE(request: NextRequest) {
    try {
      const id = request.nextUrl.searchParams.get("id");
      if (!id) {
        return NextResponse.json(
          { error: "ID parameter is required" },
          { status: 400 }
        );
      }
      await connectMongoDB();
      const deleted = await Kamar.findByIdAndDelete(id);
      if (!deleted) {
        return NextResponse.json(
          { error: "Data not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { message: "Data deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to delete data", details: error.message },
        { status: 500 }
      );
    }
  }