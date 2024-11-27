"use client"

import { useRouter } from "next/navigation";

export default function DeleteSewa({ id }: {id : string}) {
    const router = useRouter();
    const removeSewa = async () => {
        const confirmed = confirm("Anda yakin ingin menghapus data?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/sewa?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return(
        <button onClick={removeSewa} className="btn btn-error ml-2">
            Delete
        </button>
    );
}