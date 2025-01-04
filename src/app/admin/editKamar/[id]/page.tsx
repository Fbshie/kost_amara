import NavbarAdmin from "../../adminComponents/NavbarAdmin";
import EditKamarForm from "../../editComponents/EditKamarForm";

const getKamarById = async (id: string): Promise<{ kamar: { jumlah: number } }> => {
    try {
        const res = await fetch(`http://localhost:3000/api/kamar/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data Kamar")
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return { kamar: { jumlah: 0 } }; 
    }
};

export default async function editKamar({ params }: { params: { id: string } }) {
    const id = params.id ?? 'default-id';
    const { kamar } = await getKamarById(id);
    const { jumlah } = kamar;

    return (
        <>

            <NavbarAdmin />
            <EditKamarForm id={id} jumlah={jumlah} />
        </>
    );
}