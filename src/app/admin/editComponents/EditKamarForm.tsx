"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditKamarFormProps {
    id: string;
    jumlah: number;
}

export default function EditKamarForm({ id, jumlah }: EditKamarFormProps) {
    const [newJumlah, setNewJumlah] = useState(jumlah);
    

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/kamar/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newJumlah }),
            });

            if (!res.ok) {
                throw new Error("Failed to Update Jumlah Kamar");
            }

            router.refresh();
            router.push("/kamarPageAdmin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <div className="flex justify-center my-10">

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <h1 className="text-center font-bold text-2xl">Update Data Keluhan</h1>

                    <p className="font-semibold text-gray-400">Jumlah Kamar</p>
                    <input
                        onChange={(e) => setNewJumlah(Number(e.target.value))}
                        value={newJumlah}
                        type="text"
                        className="input input-bordered input-warning w-72 max-w-xs" />


                    <button
                        className="btn btn-success text-white">
                        Edit Data
                    </button>

                </form>
            </div>
        </>
    );
}