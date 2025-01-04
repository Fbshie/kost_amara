"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

interface EditSewaFormProps {
    id: string;
    nama: string;
    hp: string;
    klg: string;
    ktp: string;
    kamar: number;
    tanggal : string;
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type OpenCalendarType = { (): void };
const renderCustomInput = (props: InputProps, openCalendar: OpenCalendarType, closeCalendar: OpenCalendarType) => (
    <div onClick={openCalendar} className="cursor-pointer border rounded py-3 px-2 text-gray-darker">
        {props.value || "Pilih tanggal"} { }
    </div>
);

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
            const res = await fetch(`http://localhost:3000/api/sewa/${id}`, {
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

                    <Datetime
                        renderInput={renderCustomInput}
                        onChange={(value) => setNewTanggal(typeof value === 'string' ? value : value.format('DD-MM-YYYY'))}
                        className="appearance-none border rounded py-3 px-2 text-gray-darker" />

                    <button
                        className="btn btn-success text-white">
                        Edit Data
                    </button>

                </form>
            </div>
        </>
    );
}