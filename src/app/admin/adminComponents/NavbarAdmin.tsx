"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NavbarAdmin() {

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
                <div className="navbar bg-second mb-4">
                    <div className="flex-1">
                        <a  className="btn btn-ghost text-primary text-xl">Amara Admin</a>

                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="./" className="text-primary">Home</a></li>
                            <li>
                                <details>
                                    <summary className="text-primary">Nav</summary>
                                    <ul className="bg-second rounded-t-none p-2 ">
                                        <li><Link href={"./"}>Penyewa</Link></li>
                                        <li><Link href={"admin/laporPage"}>Keluhan</Link></li>
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
      
      </>
    );
}