"use client"

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";


const AdminPage = () => {

    const router = useRouter();

    useEffect(() => {
        const isAdmin = sessionStorage.getItem('isAdmin');
        if (!isAdmin) {
            router.push('/login');
        }
    }, [router]);
    
    const handleLogout = () => {
        sessionStorage.removeItem('isAdmin');
        router.push('/login');
    };

    return (
        <div>
            hal admin
            <button onClick={handleLogout} type="submit" >log out</button>
        </div>
        
    );
};

export default AdminPage;