import NavbarAdmin from "../../adminComponents/NavbarAdmin";
import EditKamarForm from "../../editComponents/EditKamarForm";

const getKamarById = async (id: string): Promise<{ kamar: { jumlah: number } }> => {

    try {
        const res = await fetch(`http://localhost:3000/api/kamar/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data Kamar");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching kamar:", error);
        return { kamar: { jumlah: 0 } }; 
    }
};

export default async function EditKamarPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const { kamar } = await getKamarById(id);
    const { jumlah } = kamar;

    return (
        <>
            <NavbarAdmin />
            <EditKamarForm id={id} jumlah={jumlah} />
        </>
    );
}