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

    return (
        <div>
            hal admin
            <button type="submit" >log out</button>
        </div>
        
    );
};

export default AdminPage;