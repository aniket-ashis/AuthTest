"use client"

import Link from "next/link"
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="text-xl font-semibold cursor-pointer">Brand</span>
                </Link>
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center`}>
                    <Link href="/"><span className="block px-2 py-1 cursor-pointer">Home</span></Link>
                    <Link href="/about"><span className="block px-2 py-1 cursor-pointer">About</span></Link>
                    <Link href="/services"><span className="block px-2 py-1 cursor-pointer">Services</span></Link>
                    <Link href="/contact"><span className="block px-2 py-1 cursor-pointer">Contact</span></Link>
                </div>
            </div>
        </nav>
    );
}

// <div className="flex gap-9 justify-center items-center m-8 w-full">
//     <Link href="/login">Login</Link>
//     <Link href="/">Hompage</Link>
//     <Link href="/premium">Premium</Link>
//     <Link href="/profile">profile</Link>
// </div>

export default Navbar