import NavbarAdmin from "@/app/admin/adminComponents/NavbarAdmin";
import EditKamarForm from "@/app/admin/editComponents/EditKamarForm";

const getKamarById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kamar/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data Kamar");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

interface EditKamarProps {
    params: { id: string };
}

export default async function editKamar({ params }: EditKamarProps) {
    const id = params.id || "default-id";
    const data = await getKamarById(id);

    if (!data) {
        return (
            <>
                <NavbarAdmin />
                <p>Failed to load data for the selected room.</p>
            </>
        );
    }

    const { kamar } = data;
    const { jumlah } = kamar;

    return (
        <>
            <NavbarAdmin />
            <EditKamarForm id={id} jumlah={jumlah} />
        </>
    );
}