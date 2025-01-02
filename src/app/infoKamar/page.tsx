"use client"

import useSWR from "swr";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const fetcher = async (url: string) => {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};


export default function infoKamar() {

    const { data, error, isLoading } = useSWR("http://localhost:3000/api/kamar", fetcher);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;




    return (
        <>
            <Navbar />
            {data.kamar.map((rs: any, index: number) => (

                <div className="font-bold text-center my-24  md:my-72 text-second md:text-lg mx-8 "
                    key={rs.id || index}>
                    {rs.jumlah > 0 ? (
                        <>
                            <p>Kamar yang tersedia sekarang berjumlah {rs.jumlah} Hubungi WhatsApp Kami Jika anda berminat. </p> <br />

                            <div className="flex items-center justify-center mt-2">
                                <Link href={'https://api.whatsapp.com/send/?phone=6289504100165&text&type=phone_number&app_absent=0&wame_ctl=1'}>
                                <button className="bg-green-500 flex items-center px-5 py-3 rounded-md">
                                    <img className="size-9 mr-3" src="footer/footer2.png" alt="" /> <p className="text-white">Hubungi WhatsApp</p>
                                </button>
                                </Link>
                            </div>
                        </>
                    )

                        : ( <>
                            <div className="text-x md:text-xl ">Untuk sekarang Kamar tidak tersedia</div>
                        </>
                            
                        )}
                </div>

            ))}
            <Footer />
        </>
    );
}