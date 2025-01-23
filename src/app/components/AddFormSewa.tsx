"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-datetime/css/react-datetime.css";

const formatTanggal = (value: string): string => {
    if (!value) return "";
    const [datePart] = value.split("T");
    const [year, month, day] = datePart.split("-");
    return `${day}-${month}-${year}`;
};



export default function AddFormSewa() {

    type DurasiOption = {
        _id: string;
        durasi_sewa_kamar: string;
    };

    type KamarOption = {
        _id: string;
        nomor_kamar: string;
    };

    const [nama, setNama] = useState("");
    const [hp, setHp] = useState("");
    const [keluarga, setKeluarga] = useState("");
    const [durasi, setDurasi] = useState("");
    const [durasiOptions, setDurasiOptions] = useState<DurasiOption[]>([]);
    const [kamar, setKamar] = useState("");
    const [kamarOptions, setKamarOptions] = useState<KamarOption[]>([]);
    const [tanggal, setTanggal] = useState("");
    const [isClient, setIsClient] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsClient(true);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waktuSewa`)
            .then((res) => res.json())
            .then((data: { waktuSewa: DurasiOption[] }) => setDurasiOptions(data.waktuSewa || []))
            .catch((error) => console.error("Error fetching durasi options:", error));

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listKamar`)
            .then((res) => res.json())
            .then((data: { listKamar: KamarOption[] }) => setKamarOptions(data.listKamar || []))
            .catch((error) => console.error("Error fetching kamar options:", error));


    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nama || !hp || !kamar || !tanggal || !keluarga || !durasi || !kamar) {
            alert("Semua data Wajib di isi!");
            return;
        }


        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sewa`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ nama, hp, keluarga, durasi, kamar, tanggal }),
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

    if (!isClient) {
        return null;
    }


    return (


        <div className="flex justify-center my-9">

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-4 my-6">

                <h1 className="text-center text-xl font-semibold text-second">Silahkan isi data anda</h1>

                <div className=" px-4 pt-3 ">
                    <p className="font-semibold text-gray-400">Nama</p>
                    <input
                        onChange={(e) => setNama(e.target.value)}
                        value={nama}
                        type="text"
                        placeholder=""
                        className="input input-bordered w-64 max-w-xs " />
                </div>

                <div className=" px-4">
                    <p className="font-semibold text-gray-400">No. HandPhone</p>
                    <input
                        onChange={(e) => setHp(e.target.value)}
                        value={hp}
                        type="text"
                        placeholder=""
                        className="input input-bordered  w-64 max-w-xs" />
                </div>

                <div className=" px-4">
                    <p className="font-semibold text-gray-400">Alamat Keluarga Terdekat </p>
                    <input
                        onChange={(e) => setKeluarga(e.target.value)}
                        value={keluarga}
                        type="text"
                        placeholder=""
                        className="input input-bordered w-64 max-w-xs" />
                </div>

                <div className="px-4">
                    <p className="font-semibold text-gray-400">Durasi</p>
                    <select
                        onChange={(e) => setDurasi(e.target.value)}
                        value={durasi}
                        className="input input-bordered w-64 max-w-xs"
                    >
                        <option value="" disabled>
                            (Pilih Durasi)
                        </option>
                        {durasiOptions.map((option) => (
                            <option key={option._id} value={option._id}>
                                {option.durasi_sewa_kamar}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="px-4">
                    <p className="font-semibold text-gray-400">Nomor Kamar</p>
                    <select
                        onChange={(e) => setKamar(e.target.value)}
                        value={kamar}
                        className="input input-bordered w-64 max-w-xs"
                    >
                        <option value="" disabled>
                            (Pilih Nomor Kamar)
                        </option>
                        {kamarOptions.map((option) => (
                            <option key={option._id} value={option._id}>
                                {option.nomor_kamar}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="px-4 pb-3">
                    <p className="font-semibold text-gray-400">Tanggal Masuk</p>

                    <div className="px-4 pb-3">
                        <input type="datetime-local"
                            onChange={(e) => {
                                const rawValue = e.target.value;
                                const formattedValue = formatTanggal(rawValue);
                                setTanggal(formattedValue);
                            }}
                            placeholder="dd-mm-yyyy"
                            className="appearance-none border rounded py-3 px-7 text-gray-darker" />
                    </div>


                </div>
                <button
                    type="submit"
                    className="btn btn-success text-white">
                    Kirim
                </button>
            </form>

        </div>


    );
}
