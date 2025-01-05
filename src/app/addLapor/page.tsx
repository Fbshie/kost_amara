"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function AddLapor() {

    const [nama_lapor, setNama] = useState("");
    const [kamar_lapor, setHp] = useState("");
    const [isi_lapor, setKlg] = useState("");
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nama_lapor || !isi_lapor) {
            alert("Nama dan Isi Keluhan dibutuhkan!");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lapor`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nama_lapor,kamar_lapor,isi_lapor}),
            });

            if (res.ok) {
                router.push("/");
                alert("Terima Kasih sudah mengisi Form Laporan");
            } else {
                throw new Error("Gagal menambahkan data");
            }

        } catch (error) {
            console.log(error);
        }
    };

    const router = useRouter();

    

    return (

        <>
           <Navbar />

            <div className="flex justify-center my-36">

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-4 my-6">
                    <h1 className="text-center text-xl font-semibold text-second">Isi keluhan anda</h1>
                    <input
                        onChange={(e) => setNama(e.target.value)}
                        value={nama_lapor}
                        type="text"
                        placeholder="Nama"
                        className="input input-bordered input-warning w-72 max-w-xs " />

                    <input
                        onChange={(e) => setHp(e.target.value)}
                        value={kamar_lapor}
                        type="text"
                        placeholder="No. Kamar"
                        className="input input-bordered input-warning w-72 max-w-xs" />

                    <input
                        onChange={(e) => setKlg(e.target.value)}
                        value={isi_lapor}
                        type="text"
                        placeholder="Isi Keluhan!"
                        className="input input-bordered input-warning w-72 max-w-xs" />


                    <button
                        type="submit"
                        className="btn btn-success text-white">
                        Kirim
                    </button>
                </form>

            </div>

            <Footer />

        </>


    );
}