"use client"

import NavbarAdmin from "../admin/adminComponents/NavbarAdmin"
import TableKamar from "../admin/table/TableKamar"


export default function laporPage() {
    return (
        <>
        <NavbarAdmin />

        <div className=" mx-5 text-right">
                <a href="admin/addKamar">
                    <button className="btn btn-warning">Tambah data Kamar</button>
                </a>
            </div>
        
        <TableKamar />
        
        </>
    )
}