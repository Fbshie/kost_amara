"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import TableSewa from "./table/TableSewa";
import NavbarAdmin from "./adminComponents/NavbarAdmin";

export default function AdminPage() {

    


    return (

        <>
            <NavbarAdmin />



            <div className="text-center font-bold my-5">Tabel Penyewa</div>
            <div className=" mx-5 text-right">
                <a href="admin/addSewa">
                    <button className="btn btn-warning">Tambah data</button>
                </a>
            </div>

        <TableSewa />

        </>
    );

}
