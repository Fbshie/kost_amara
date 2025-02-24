export const FetchSewa = async () => {
    try {
        const res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/api/sewa", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return { sewa: [] }; // Default fallback data
    }
};
