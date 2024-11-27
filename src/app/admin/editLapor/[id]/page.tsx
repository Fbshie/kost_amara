import NavbarAdmin from "../../adminComponents/NavbarAdmin";
import EditLaporForm from "../../editComponents/EditLaporForm";

const getLaporById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/lapor/${id}`,{
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

export default async function editLapor({ params }: { params: { id?: string } })  {
    const id = params.id ?? 'default-id';
    const { lapor } = await getLaporById(id);
    const { nama_lapor, kamar_lapor, isi_lapor } = lapor;

    return (
    <>
        
        <NavbarAdmin />
        <EditLaporForm id={id} nama_lapor={nama_lapor} kamar_lapor={kamar_lapor} isi_lapor={isi_lapor}/>
    </>
    );
}