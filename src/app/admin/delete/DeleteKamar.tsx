"use client"

import { useRouter } from "next/navigation";

export default function DeleteKamar({ id }: {id : string}) {
    const router = useRouter();
    const removeKamar = async () => {
        const confirmed = confirm("Anda yakin ingin menghapus data jumlah kamar?");

        if (confirmed) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kamar?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return(
        <button onClick={removeKamar} className="btn btn-error ml-2">
            Delete
        </button>
    );
}