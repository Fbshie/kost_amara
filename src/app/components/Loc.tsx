import Image from "next/image";

export default function Loc() {
    return(
        <div className="bg-second">
            <div className="max-w-6xl mx-auto p-2  ">
            <h2 className="text-primary text-center text-2xl font-bold mt-4">Lokasi</h2>
                <div className="pt-8 px-16 mb-8 text-center">
                    <Image width={1000} height={1000} className="rounded-xl" src="/loc/loc1.jpg" alt="" />
                    <p className="text-primary mt-4 mb-1  text-xl font-medium">
                       Jln.Padat Karya Gg.Karya baru 
                    </p>
                    <a className="text-white text-center cursor-pointer " href="https://maps.app.goo.gl/mjGEiuxtC7jp6Hz79">Cek Lokasi detail (Klik) </a>
                </div>
            </div>
            <hr  className="border-t-2 border-gray-600"/>
        </div>
    );
}