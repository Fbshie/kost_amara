/* disable-eslint */
import NavbarAdmin from "@/app/admin/adminComponents/NavbarAdmin";
import EditSewaForm from "@/app/admin/editComponents/EditSewaForm";

const getSewaById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sewa/${id}`,{
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

export default async function editSewa({ params }: { params: Promise<{ id?: string }>})  {
    const {id} =  await params;

    const sewaId = id ?? "default-id";
    const { sewa } = await getSewaById(sewaId);
    const { nama,hp,klg,ktp,kamar,tanggal } = sewa;

    return (
    <>
        
        <NavbarAdmin />
        <EditSewaForm id={sewaId} nama={nama} hp={hp} klg={klg} ktp={ktp} kamar={kamar} tanggal={tanggal} />
    </>
    );
}