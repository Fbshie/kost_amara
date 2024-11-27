import useSWR from "swr";
import DeleteSewa from "../delete/DeleteSewa";

const fetcher = async (url: string) => {
  const res = await fetch(url, {cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default function TableSewa() {
  const { data, error, isLoading } = useSWR("http://localhost:3000/api/sewa", fetcher);

  if (isLoading) return <div>Loading...</div>;
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
              <th>Alamat Klg</th>
              <th>Nik</th>
              <th>No. Kmr</th>
              <th>Tanggal masuk</th>
              <th></th>
            </tr>
          </thead>
      
          <tbody>
              {data.sewa.map((rs: any) => (
                  <tr className="hover" key={rs._id}>
                      

                          <td> {rs.nama}</td>
                          <td> {rs.hp}</td>
                          <td> {rs.klg}</td>
                          <td> {rs.ktp}</td>
                          <td> {rs.kamar}</td>
                          <td> {rs.createdAt} </td>
                          <th>
                            <a href={`admin/editSewa/${rs._id}`}>
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