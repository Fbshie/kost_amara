"use client"

import NavbarAdmin from "../admin/adminComponents/NavbarAdmin"
import TableLapor from "../admin/table/TableLapor"



export default function laporPage() {
    return (
        <>
        <NavbarAdmin/>
            <div className="text-center font-bold my-10">Tabel Laporan</div>
        <TableLapor />
        </>
    )
}