"use client"

import useSWR from "swr";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
                
                    <div className="font-bold text-center my-20 md:my-60 text-second mx-3 "
                        key={rs.id || index}>
                        {rs.jumlah > 0
                            ? `Kamar berjumlah ${rs.jumlah} Hubungi Social Media Kami Jika anda berminat` 
                            : "Maaf untuk sekarang Kamar tidak tersedia"}
                    </div>
               
            ))}
            <Footer />
        </>
    );
}