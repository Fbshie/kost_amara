"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditSewaFormProps {
    id: string;
    nama: string;
    hp: string;
    klg: string;
    ktp: string;
    kamar: number;
}

export default function EditSewaForm({ id, nama, hp, klg, ktp, kamar }: EditSewaFormProps) {
    const [newNama, setNewNama] = useState(nama);
    const [newHp, setNewHp] = useState(hp);
    const [newKlg, setNewKlg] = useState(klg);
    const [newKtp, setNewKtp] = useState(ktp);
    const [newKamar, setNewKamar] = useState(kamar);

const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const res = await fetch(`http://localhost:3000/api/sewa/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ newNama, newHp, newKlg, newKtp, newKamar }),
        });

        if (!res.ok) {
            throw new Error("Failed to Update data Sewa");
        }

        router.refresh();
        router.push("/admin");
    } catch (error) {
        console.log(error);
    }
};

    return (
        <>

        <div className="flex justify-center my-10">
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h1 className="text-center font-bold text-2xl">Update Data Sewa</h1>

                <input
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newNama}
                    type="text"
                    className="input input-bordered input-warning w-72 max-w-xs" />

                <input
                    onChange={(e) => setNewHp(e.target.value)}
                    value={newHp}
                    type="text"
                    className="input input-bordered input-warning w-full max-w-xs" />

                <input
                    onChange={(e) => setNewKlg(e.target.value)}
                    value={newKlg}
                    type="text"
                    className="input input-bordered input-warning w-full max-w-xs" />

                <input
                    onChange={(e) => setNewKtp(e.target.value)}
                    value={newKtp}
                    type="text"
                    className="input input-bordered input-warning w-full max-w-xs" />

                <input
                    onChange={(e) => setNewKamar(Number(e.target.value))}
                    value={newKamar}
                    type="number"
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