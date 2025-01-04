"use client"

import NavbarAdmin from "../admin/adminComponents/NavbarAdmin"
import TableLapor from "../admin/table/TableLapor"



export default function LaporPage() {
    return (
        <>
        <NavbarAdmin/>
            <div className="text-center font-bold my-10">Tabel Laporan</div>
        <TableLapor />
        </>
    )
}