"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NavbarAdmin from "../adminComponents/NavbarAdmin";



export default function AddKamar() {

    const [nomor_kamar, setNomorKamar] = useState("");
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nomor_kamar) {
            alert("Jumlah kamar dibutuhkan!");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/nomorKamar`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nomor_kamar}),
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
                        onChange={(e) => setNomorKamar(e.target.value)}
                        value={nomor_kamar}
                        type="text"
                        placeholder="Jumlah Kamar"
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