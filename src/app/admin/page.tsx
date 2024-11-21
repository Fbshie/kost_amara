"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import TableSewa from "./table/TableSewa";

export default function AdminPage() {

    const router = useRouter();

    useEffect(() => {
        const isAdmin = sessionStorage.getItem('isAdmin');
        if (!isAdmin) {
            router.push('/login');
        }
    }, [router]);

    const handleLogout = () => {
        sessionStorage.removeItem('isAdmin');
        router.push('/login');
    };


    return (

        <>
            {/* Header */}
            <header>
                <div className="navbar bg-second mb-8">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-primary text-xl">Amara Admin</a>

                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className="text-primary">Home</a></li>
                            <li>
                                <details>
                                    <summary className="text-primary">Nav</summary>
                                    <ul className="bg-second rounded-t-none p-2 ">
                                        <li><a>Penyewa</a></li>
                                        <li><a>Keluhan</a></li>
                                        <li><a>Ketersedian Kamar</a></li>
                                    </ul>
                                </details>
                            </li>
                            <button className="btn btn-error" onClick={handleLogout} type="submit">Log Out</button>

                        </ul>
                    </div>
                </div>
            </header>
            {/* Header selesai */}




            <div className=" mx-5 text-right">
                <a href="admin/addSewa">
                    <button className="btn btn-warning">Tambah data</button>
                </a>
            </div>

        <TableSewa />

        </>
    );

}
