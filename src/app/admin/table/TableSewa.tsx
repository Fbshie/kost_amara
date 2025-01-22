import useSWR from "swr";
import DeleteSewa from "../delete/DeleteSewa";

const fetcher = async (url: string) => {
  const res = await fetch(url, {cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

interface Sewa {
  _id: string;
  nama: string;
  hp: string;
  keluarga: string;
  durasi: string;
  kamar: number;
  tanggal: string;
}

interface ApiResponse {
  sewa: Sewa[];
}

export default function TableSewa() {
  const { data, error, isLoading } = useSWR<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/sewa`, fetcher);

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
              <th>No. Hp</th>
              <th>Alamat Keluarga</th>
              <th>Durasi Penyewaan</th>
              <th>No. Kmr</th>
              <th>Tanggal masuk</th>
              <th></th>
            </tr>
          </thead>
      
          <tbody>
              {data?.sewa.map((rs) => (
                  <tr className="hover" key={rs._id}>
                      

                          <td> {rs.nama}</td>
                          <td> {rs.hp}</td>
                          <td> {rs.keluarga}</td>
                          <td> {rs.durasi}</td>
                          <td> {rs.kamar}</td>
                          <td> {rs.tanggal} </td>
                          <th>
                            <a href={`editSewa/${rs._id}`}>
                            <button className="btn btn-info">Edit</button>
                            </a>
                            
                            <DeleteSewa id={rs._id}/>
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