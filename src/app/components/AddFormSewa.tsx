"use client"

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-datetime/css/react-datetime.css";

const Datetime = dynamic(() => import("react-datetime"), { 
    ssr: false, 
    loading: () => <p>Loading...</p> // Fallback selama render klien
  });

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type OpenCalendarType = { (): void };
const renderCustomInput = (props: InputProps, openCalendar: OpenCalendarType) => (
    <div onClick={openCalendar} className="cursor-pointer border rounded py-2 text-gray-400 text-center">
        {props.value || "(Pilih tanggal)"} { }
    </div>
);

export default function AddFormSewa() {

    const [nama, setNama] = useState("");
    const [hp, setHp] = useState("");
    const [klg, setKlg] = useState("");
    const [ktp, setKtp] = useState("");
    const [kamar, setKamar] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [isClient, setIsClient] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsClient(true); // Menandakan bahwa ini sudah dijalankan di klien
      }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nama || !hp || !kamar || !tanggal || !klg || !ktp || !kamar) {
            alert("Semua data Wajib di isi!");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sewa`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ nama, hp, klg, ktp, kamar, tanggal }),
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
        return null; // Menjaga agar tidak ada konten SSR yang ditampilkan sebelum klien siap
      }

    

    return (

           
            <div className="flex justify-center my-9">

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-4 my-6">

                    <h1 className="text-center text-xl font-semibold text-second">Form Penyewa</h1>

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
                            onChange={(e) => setKlg(e.target.value)}
                            value={klg}
                            type="text"
                            placeholder=""
                            className="input input-bordered w-64 max-w-xs" />
                    </div>

                    <div className=" px-4 ">
                        <p className="font-semibold text-gray-400">No. Ktp </p>
                        <input
                            onChange={(e) => setKtp(e.target.value)}
                            value={ktp}
                            type="text"
                            placeholder=""
                            className="input input-bordered w-64 max-w-xs" />
                    </div>

                    <div className=" px-4 ">
                        <p className="font-semibold text-gray-400">No. Kamar</p>
                        <input
                            onChange={(e) => setKamar(e.target.value)}
                            value={kamar}
                            type="text"
                            placeholder=""
                            className="input input-bordered w-64 max-w-xs" />
                    </div>

            <div className="px-4 pb-3">
                <p className="font-semibold text-gray-400">Tanggal Masuk</p>

                {isClient && (
                    <Datetime
                        renderInput={renderCustomInput}
                        onChange={(value) => setTanggal(typeof value === 'string' ? value : value.format('DD-MM-YYYY'))}
                        className="appearance-none border rounded py-3 px-2 text-gray-darker" />
                    )}
            </div>
                    <button
                        type="submit"
                        className="btn btn-success text-white">
                        Tambah Data
                    </button>
                </form>

            </div>


    );
}