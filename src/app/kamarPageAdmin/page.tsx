"use client"

import NavbarAdmin from "../admin/adminComponents/NavbarAdmin"
import TableKamar from "../admin/table/TableKamar"


export default function kamarPage() {
    return (
        <>
        <NavbarAdmin />
        <div className="text-center font-bold my-6">Tabel Kamar</div>
        <div className=" mx-5 text-right">
                <a href="admin/addKamar">
                    <button className="btn btn-warning">Tambah data Kamar</button>
                </a>
            </div>
        
        <TableKamar />
        
        </>
    )
}