"use client"

import { useRouter } from "next/navigation";

export default function DeleteLapor({ id }: {id : string}) {
    const router = useRouter();
    const removeLapor = async () => {
        const confirmed = confirm("Anda yakin ingin menghapus data?");

        if (confirmed) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lapor?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return(
        <button onClick={removeLapor} className="btn btn-error ml-2">
            Delete
        </button>
    );
}