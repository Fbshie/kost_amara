import Link from "next/link";

export default function header() {
    return(
        <header>
            <div className="container flex items-center justify-between mx-auto  px-2 py-4"> 
                
                <div className="">
                    <img src="logo3.png" alt="" />
                </div>
                
                <div >
                    <Link className="mr-6" href={''}>Lokasi</Link>
                    <Link className="rounded-xl border-2 p-2 gap-4 border-primary" href={'/infoKamar'} >Ketersedian kamar</Link>
                </div>
                
            </div>
        </header>
    );
}