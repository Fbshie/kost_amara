import NavbarAdmin from "../../adminComponents/NavbarAdmin";
import EditKamarForm from "../../editComponents/EditKamarForm";

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

export default async function editKamar({ params }: { params: { id?: string } }) {
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