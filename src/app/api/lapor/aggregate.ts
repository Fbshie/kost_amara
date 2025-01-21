import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Sewa1 from "../../../../models/SewaModel";
import { error } from "console";


export async function GET() {
    await connectMongoDB();

    try {
        const pipeline = [
            {
                $lookup: {
                    from: 'sewa1',
                    localField: 'nama',
                    foreignField: 'nama_lapor',
                    as: 'laporanInfo',
                },
            },
            {
                $unwind: '$laporanInfo',
            },
            {
                $project: {
                    nama : '$laporanInfo.nama', 
                    kamar_lapor: 1, 
                    isi_lapor: 1,
                },
            },
        ];

        const results = await Sewa1.aggregate(pipeline);

        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.error('Aggregation error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }), { status: 500 };
        
    }
}