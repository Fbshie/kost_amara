import { NextApiRequest, NextApiResponse } from "next";
import Sewa from "../../../../models/SewaModel";
import connectMongoDB from "../../../../libs/mongodb";
import DataPribadi from "../../../../models/DataPribadiModel";
import { userAgent } from "next/server";


export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    await connectMongoDB();

    if (req.method === 'POST') {
        const { nama, hp, klg, ktp, kamar, tanggal } = req.body ;

        const sewa = await Sewa.create({ nama, hp, klg, ktp, kamar, tanggal });

        const dataPribadi = await DataPribadi.create ({no_ktp: sewa.ktp, alamat_keluarga: sewa.klg });

        sewa.posts.push(dataPribadi._id);
        await sewa.save();

        res.status(201).json({ sewa, dataPribadi });
    } else {
        res.status(405).json({message: 'Method not allowed'});
    }
}