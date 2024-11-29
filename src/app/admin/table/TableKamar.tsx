import useSWR from "swr";
import DeleteKamar from "../delete/DeleteKamar";

const fetcher = async (url: string) => {
  const res = await fetch(url, {cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default function TableKamar() {
  const { data, error, isLoading } = useSWR("http://localhost:3000/api/kamar", fetcher);

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
              
              
              
              <th>Ketersedian kamar</th>
              <th></th>
            </tr>
          </thead>
      
          <tbody>
              {data.kamar.map((rs: any) => (
                  <tr className="hover" key={rs._id}>
                      

                          <td> {rs.jumlah}</td>
                          
                          <th>
                             <a href={`admin/editKamar/${rs._id}`}>
                            <button className="btn btn-info">Edit</button>
                            </a>
                            
                            <DeleteKamar id={rs._id}/>
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