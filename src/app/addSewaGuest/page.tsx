"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function addSewa() {

    const [nama, setNama] = useState("");
    const [hp, setHp] = useState("");
    const [klg, setKlg] = useState("");
    const [ktp, setKtp] = useState("");
    const [kamar, setKamar] = useState("");

   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nama || !hp || !kamar) {
            alert("Nama, Nomor Kamar, dan Nomor Hp dibutuhkan");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/sewa",{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nama,hp,klg,ktp,kamar}),
            });

            if (res.ok) {
                router.push("/");
                alert("Terima Kasih sudah mengisi Form");
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

            <div className="flex justify-center my-9">

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-4 my-6">
                    <h1 className="text-center text-xl font-semibold text-second">Tambah Penyewa</h1>
                    
                    <div className=" px-4 py-3 rounded-md shadow-sm">
                    <p className="font-semibold text-gray-400">Nama</p>
                    <input
                        onChange={(e) => setNama(e.target.value)}
                        value={nama}
                        type="text"
                        placeholder=""
                        className="input input-bordered input-warning w-64 max-w-xs " />
                    </div>

                    <div className=" px-4 py-3 rounded-md shadow-sm">
                    <p className="font-semibold text-gray-400">No. HandPhone</p>
                    <input
                        onChange={(e) => setHp(e.target.value)}
                        value={hp}
                        type="text"
                        placeholder=""
                        className="input input-bordered input-warning w-64 max-w-xs" />
                        </div>

                    <div className=" px-4 py-3 rounded-md shadow-sm">
                    <p className="font-semibold text-gray-400">Alamat Keluarga Terdekat (opsional)</p>
                    <input
                        onChange={(e) => setKlg(e.target.value)}
                        value={klg}
                        type="text"
                        placeholder=""
                        className="input input-bordered input-warning w-64 max-w-xs" />
                    </div>

                    <div className=" px-4 py-3 rounded-md shadow-sm">
                    <p className="font-semibold text-gray-400">No. Ktp (opsional)</p>
                    <input
                        onChange={(e) => setKtp(e.target.value)}
                        value={ktp}
                        type="text"
                        placeholder=""
                        className="input input-bordered input-warning w-64 max-w-xs" />
                    </div>

                    <div className=" px-4 py-3 rounded-md shadow-sm">
                    <p className="font-semibold text-gray-400">No. Kamar</p>
                    <input
                        onChange={(e) => setKamar(e.target.value)}
                        value={kamar}
                        type="text"
                        placeholder=""
                        className="input input-bordered input-warning w-64 max-w-xs" />
                    </div>


                    <button
                        type="submit"
                        className="btn btn-success text-white">
                        Tambah Data
                    </button>
                </form>

            </div>

            <Footer />

        </>


    );
}