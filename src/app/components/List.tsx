export default function List() {
    return (
        <main className="max-w-6xl mx-auto p-2">

            <div className="py-5">
                <h2 className="text-second text-center text-2xl font-bold">Fasilitas</h2>

                <div className="grid grid-cols-2 gap-6 mx-3 my-10">
                {/* kolom fasilitas */}
                    <div className="inline-block text-center">
                        <img className="h-auto rounded-2xl  mx-auto " src="list/list1.jpg" alt="" />
                        <p className="text-l font-semibold text-second my-2">Kipas Angin, Kasur, dan Lemari</p>
                    </div>

                    <div className="inline-block text-center">
                        <img className="h-auto rounded-2xl  mx-auto " src="list/list2.jpg" alt="" />
                        <p className="text-l font-semibold text-second my-2">2 Kamar Mandi Luar <br /> Dapur Umum</p>
                    </div>

                    <div className="inline-block text-center">
                        <img className="h-auto rounded-2xl  mx-auto " src="list/list2.jpg" alt="" />
                        <p className="text-l font-semibold text-second my-2">2 Kamar Mandi Luar <br /> Dapur Umum</p>
                    </div>

                    <div className="inline-block text-center">
                        <img className="h-auto rounded-2xl  mx-auto " src="list/list2.jpg" alt="" />
                        <p className="text-l font-semibold text-second my-2">2 Kamar Mandi Luar <br /> Dapur Umum</p>
                    </div>

                    
                {/* end kolom fasilitas */}
                </div>

                

            </div>
        </main>
    );
}