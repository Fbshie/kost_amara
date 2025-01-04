import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <header>
            <div className="max-w-7xl mx-auto container flex items-center justify-between px-2 py-5 bg-second"> 
                
                <div className="">
                    <Link href={'/'}>
                    <Image width={110} height={110} src="/logo3.png" alt="" />
                    </Link>
                </div>
                
                <div >
                    <Link className="mr-6" href={'https://maps.app.goo.gl/mjGEiuxtC7jp6Hz79'}>Lokasi</Link>
                    <Link className="rounded-xl border-2 p-2 gap-4 border-primary" href={'/infoKamar'} >Info kamar</Link>
                </div>
                
            </div>
        </header>
    );
}