"use client"

import { useRouter } from "next/navigation";

export default function DeleteKamar({ id }: {id : string}) {
    const router = useRouter();
    const removeKamar = async () => {
        const confirmed = confirm("Anda yakin ingin menghapus data jumlah kamar?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/kamar?id=${id}`, {
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