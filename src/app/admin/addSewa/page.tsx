"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../adminComponents/NavbarAdmin";


export default function addSewa() {

    const [nama, setNama] = useState("");
    const [hp, setHp] = useState("");
    const [klg, setKlg] = useState("");
    const [ktp, setKtp] = useState("");
    const [kamar, setKamar] = useState("");

   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nama || !hp) {
            alert("Nama dan Nomor Hp dibutuhkan");
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
                router.push("/admin");
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
            <NavbarAdmin />

            <div className="flex justify-center">

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-4 my-6">
                    <h1 className="text-center text-xl font-semibold text-second">Tambah Penyewa</h1>
                    <input
                        onChange={(e) => setNama(e.target.value)}
                        value={nama}
                        type="text"
                        placeholder="Nama"
                        className="input input-bordered input-warning w-72 max-w-xs " />

                    <input
                        onChange={(e) => setHp(e.target.value)}
                        value={hp}
                        type="text"
                        placeholder="No. Handphone"
                        className="input input-bordered input-warning w-72 max-w-xs" />

                    <input
                        onChange={(e) => setKlg(e.target.value)}
                        value={klg}
                        type="text"
                        placeholder="Alamat Keluarga Terdekat (opsional)"
                        className="input input-bordered input-warning w-72 max-w-xs" />

                    <input
                        onChange={(e) => setKtp(e.target.value)}
                        value={ktp}
                        type="text"
                        placeholder="No. Ktp (opsional)"
                        className="input input-bordered input-warning w-72 max-w-xs" />

                    <input
                        onChange={(e) => setKamar(e.target.value)}
                        value={kamar}
                        type="text"
                        placeholder="No. Kamar"
                        className="input input-bordered input-warning w-72 max-w-xs" />


                    <button
                        type="submit"
                        className="btn btn-success text-white">
                        Tambah Data
                    </button>
                </form>

            </div>

        </>


    );
}