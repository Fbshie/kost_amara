/* disable-eslint */

import NavbarAdmin from "@/app/admin/adminComponents/NavbarAdmin";
import EditKamarForm from "@/app/admin/editComponents/EditKamarForm";


const getKamarById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kamar/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data Kamar")
        }

        
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function editKamar({ params }: { params: Promise<{ id?: string }>}) {
    const {id} =  await params;

    const kamarId = id ?? "default-id";

    const { kamar } = await getKamarById(kamarId);
    const { jumlah } = kamar;

    return (
        <>
            <NavbarAdmin />
            <EditKamarForm id={kamarId} jumlah={jumlah} />
        </>
    );
}