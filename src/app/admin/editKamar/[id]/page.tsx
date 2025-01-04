import { GetServerSideProps } from "next";
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

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return { kamar: { jumlah: 0 } };
    }
};

export default function EditKamarPage({ id, jumlah }: { id: string; jumlah: number }) {
    return (
        <>
            <NavbarAdmin />
            <EditKamarForm id={id} jumlah={jumlah} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string };

    const { kamar } = await getKamarById(id);

    return {
        props: {
            id,
            jumlah: kamar.jumlah,
        },
    };
};
