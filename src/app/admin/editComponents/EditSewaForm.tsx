"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-datetime/css/react-datetime.css";

const formatTanggal = (value: string): string => {
    if (!value) return "";
    const [datePart] = value.split("T");
    const [year, month, day] = datePart.split("-");
    return `${day}-${month}-${year}`;
};


interface EditSewaFormProps {
    id: string;
    nama: string;
    hp: string;
    klg: string;
    ktp: string;
    kamar: number;
    tanggal: string;
}

export default function EditSewaForm({ id, nama, hp, klg, ktp, kamar, tanggal }: EditSewaFormProps) {
    const [newNama, setNewNama] = useState(nama);
    const [newHp, setNewHp] = useState(hp);
    const [newKlg, setNewKlg] = useState(klg);
    const [newKtp, setNewKtp] = useState(ktp);
    const [newKamar, setNewKamar] = useState(kamar);
    const [newTanggal, setNewTanggal] = useState(tanggal);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sewa/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newNama, newHp, newKlg, newKtp, newKamar, newTanggal }),
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

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <h1 className="text-center font-bold text-2xl">Update Data Sewa</h1>

                    <p className="font-semibold text-gray-400">Nama</p>
                    <input
                        onChange={(e) => setNewNama(e.target.value)}
                        value={newNama}
                        type="text"
                        className="input input-bordered input-warning w-72 max-w-xs" />

                    <p className="font-semibold text-gray-400">No. Hp</p>
                    <input
                        onChange={(e) => setNewHp(e.target.value)}
                        value={newHp}
                        type="text"
                        className="input input-bordered input-warning w-full max-w-xs" />

                    <p className="font-semibold text-gray-400">Alamat Keluarga</p>
                    <input
                        onChange={(e) => setNewKlg(e.target.value)}
                        value={newKlg}
                        type="text"
                        className="input input-bordered input-warning w-full max-w-xs" />

                    <p className="font-semibold text-gray-400">No. Ktp</p>
                    <input
                        onChange={(e) => setNewKtp(e.target.value)}
                        value={newKtp}
                        type="text"
                        className="input input-bordered input-warning w-full max-w-xs" />

                    <p className="font-semibold text-gray-400">No. Kamar</p>
                    <input
                        onChange={(e) => setNewKamar(Number(e.target.value))}
                        value={newKamar}
                        type="text"
                        className="input input-bordered input-warning w-full max-w-xs" />

                    <div className="px-4 pb-3">
                        <p className="font-semibold text-gray-400">Tanggal Masuk</p>
                        <input type="datetime-local"
                            onChange={(e) => {
                                const rawValue = e.target.value;
                                const formattedValue = formatTanggal(rawValue);
                                setNewTanggal(formattedValue);
                            }}
                            placeholder="dd-mm-yyyy"
                            className="appearance-none border rounded py-3 px-7 text-gray-darker" />
                    </div>


                    <button
                        className="btn btn-success text-white">
                        Edit Data
                    </button>

                </form>
            </div>
        </>
    );
}