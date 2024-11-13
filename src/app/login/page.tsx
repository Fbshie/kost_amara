"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();


        // Validasi password dan username
        if (
            username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
            password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        ) {
            // Jika status VALID
            sessionStorage.setItem('isAdmin', 'true'); 
            router.push('/admin');  
        } else {
            setError('Username atau Password salah.');
        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg bg-white ">
                <h1 className="font-semibold text-2xl my-4">Login</h1>

                <form className="flex flex-col gap-3" onSubmit={handleLogin}>
                    <input className="login" type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input className="login" type="password" placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                        Login
                    </button>

            {error &&
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
            }

                </form>
            </div>
        </div>
    );
}