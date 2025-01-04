"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NavbarAdmin from "../adminComponents/NavbarAdmin";



export default function AddKamar() {

    const [jumlah, setJumlah] = useState("");
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!jumlah) {
            alert("Jumlah kamar dibutuhkan!");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/kamar",{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({jumlah}),
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
                        onChange={(e) => setJumlah(e.target.value)}
                        value={jumlah}
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