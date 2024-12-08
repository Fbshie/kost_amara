

import NavbarAdmin from "../../adminComponents/NavbarAdmin";
import SidebarAdmin from "../../adminComponents/SidebarAdmin";
import EditSewaForm from "../../editComponents/EditSewaForm";

const getSewaById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/sewa/${id}`,{
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data Sewa")
        }

            return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function editSewa({ params }: { params: { id?: string } })  {
    const id = params.id ?? 'default-id';
    const { sewa } = await getSewaById(id);
    const { nama,hp,klg,ktp,kamar } = sewa;

    return (
    <>
        
        <NavbarAdmin />
        <EditSewaForm id={id} nama={nama} hp={hp} klg={klg} ktp={ktp} kamar={kamar} />
    </>
    );
}