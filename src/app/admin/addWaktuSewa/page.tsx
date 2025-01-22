"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NavbarAdmin from "../adminComponents/NavbarAdmin";



export default function AddKamar() {

    const [durasi_sewa_kamar, setDurasi] = useState("");
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!durasi_sewa_kamar) {
            alert("Jumlah kamar dibutuhkan!");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waktuSewa`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({durasi_sewa_kamar}),
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
                    <h1 className="text-center text-xl font-semibold text-second">Isi ketersedian kamar</h1>
                    <input
                        onChange={(e) => setDurasi(e.target.value)}
                        value={durasi_sewa_kamar}
                        type="text"
                        placeholder="Waktu Sewa Kamar"
                        className="input input-bordered input-warning w-72 max-w-xs " />


                    <button
                        type="submit"
                        className="btn btn-success text-white">
                        Input
                    </button>
                </form>

            </div>

        </>


    );
}