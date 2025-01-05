"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditLaporFormProps {
    id: string;
    nama_lapor: string;
    kamar_lapor: string;
    isi_lapor: string;
}

export default function EditLaporForm({ id, nama_lapor, kamar_lapor, isi_lapor }: EditLaporFormProps) {
    const [newNama_lapor, setNewNamaLapor] = useState(nama_lapor);
    const [newKamar_lapor, setNewKamarLapor] = useState(kamar_lapor);
    const [newIsi_lapor, setNewIsiLapor] = useState(isi_lapor);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lapor/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newNama_lapor, newKamar_lapor, newIsi_lapor }),
            });

            if (!res.ok) {
                throw new Error("Failed to Update data Lapor");
            }

            router.refresh();
            router.push("/laporPageAdmin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <div className="flex justify-center my-10">

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <h1 className="text-center font-bold text-2xl">Update Data Keluhan</h1>

                    <p className="font-semibold text-gray-400">Nama</p>
                    <input
                        onChange={(e) => setNewNamaLapor(e.target.value)}
                        value={newNama_lapor}
                        type="text"
                        className="input input-bordered input-warning w-72 max-w-xs" />

                    <p className="font-semibold text-gray-400">No. Kamar</p>
                    <input
                        onChange={(e) => setNewKamarLapor(e.target.value)}
                        value={newKamar_lapor}
                        type="text"
                        className="input input-bordered input-warning w-full max-w-xs" />

                    <p className="font-semibold text-gray-400">Isi Keluhan</p>
                    <input
                        onChange={(e) => setNewIsiLapor(e.target.value)}
                        value={newIsi_lapor}
                        type="text"
                        className="input input-bordered input-warning w-full max-w-xs" />


                    <button
                        className="btn btn-success text-white">
                        Edit Data
                    </button>

                </form>
            </div>
        </>
    );
}