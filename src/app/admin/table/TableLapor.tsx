import useSWR from "swr";
import DeleteLapor from "../delete/DeleteLapor";

const fetcher = async (url: string) => {
  const res = await fetch(url, {cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

interface Lapor {
  _id: string;
  nama_lapor: string;
  kamar_lapor: string;
  isi_lapor: string;
}

interface ApiResponse {
  lapor: Lapor[];
}

export default function TableLapor() {
  const { data, error, isLoading } = useSWR<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/lapor`, fetcher);

  if (isLoading) return <div className="text-center text-green-500">Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

    return(
        <>
        {/* Tabel */}
        <div className="overflow-x-auto my-6">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Nama</th>
              <th>No. Kamar</th>
              <th>Isi Keluhan</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {data?.lapor.map((rs) => (
                  <tr className="hover" key={rs._id}>
                          <td> {rs.nama_lapor}</td>
                          <td> {rs.kamar_lapor}</td>
                          <td> {rs.isi_lapor}</td>
                          <th>
                             <a href={`editLapor/${rs._id}`}>
                            <button className="btn btn-info">Edit</button>
                            </a>
                            
                            <DeleteLapor id={rs._id}/>
                          </th>
                  </tr>  
          ))}
          </tbody>
        </table>
      </div>
      
      {/* Tabel selesai */}
      </>
    );
}