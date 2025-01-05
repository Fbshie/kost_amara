/* disable-eslint */

import NavbarAdmin from "@/app/admin/adminComponents/NavbarAdmin";
import EditLaporForm from "@/app/admin/editComponents/EditLaporForm";


const getLaporById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lapor/${id}`,{
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data Lapor")
        }

            return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function editLapor({ params }: { params: Promise<{ id?: string }>})  {
    const {id} =  await params;


    const laporId = id ?? "default-id";

    const { lapor } = await getLaporById(laporId);
    const { nama_lapor, kamar_lapor, isi_lapor } = lapor;

    return (
    <>
        
        <NavbarAdmin />
        <EditLaporForm id={laporId} nama_lapor={nama_lapor} kamar_lapor={kamar_lapor} isi_lapor={isi_lapor}/>
    </>
    );
}