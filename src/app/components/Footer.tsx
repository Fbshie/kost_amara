import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-second">
             <hr  className="border-t-2 border-gray-600"/>

        <div className="max-w-7xl mx-auto mt-3 grid grid-cols-1  md:grid-cols-3  gap-2 items-center">
            

           <div className=" my-9 flex justify-center items-center">
            <Link href={'/'}>
                <img src="logo1.png" alt="" />
            </Link>
           </div>

            {/* Social Media */}
           <div className=" my-9  grid place-items-center">
                <h1 className="text-xl font-semibold text-primary ">SOCIAL MEDIA</h1> 
                    <div className="flex p-1 items-center justify-center mt-2">
                        <img className="size-9" src="footer/footer1.png" alt="" />
                        <a className="text-primary ml-2" href=""> amara_kostputri.ptk</a>
                    </div>

                    <div className="flex p-1 items-center justify-center">
                        <img className="size-9" src="footer/footer2.png" alt="" />
                        <a className="text-primary ml-2" href="https://api.whatsapp.com/send/?phone=6289504100165&text&type=phone_number&app_absent=0&wame_ctl=1"> +62 895-0410-0165</a>
                    </div>      
           </div>
           {/* End Social Media */}

           <div className=" my-9  grid ">
                <h1 className="text-xl font-semibold text-primary text-center">KOST AMARA</h1> 
                    <div className="flex  p-1 mx-auto my-2">
                        <a className="text-primary ml-2" href="addLapor">Laporkan Keluhan</a>
                    </div>

                    <div className="flex  p-1 mx-auto my-2">
                        <a className="text-primary ml-2" href="/infoKamar">Cek Ketersedian Kamar</a>
                    </div>
                    
           </div>
            
        </div>
    </footer>
    );
}