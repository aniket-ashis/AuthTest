"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavbarWithSlideInMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This function toggles the menu's visibility
    const toggleMenu = () => setIsMenuOpen((prev) => !isMenuOpen);

    // This effect closes the menu when clicking outside of it
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMenuOpen && !event.target.closest('#side-menu') && !event.target.closest('#menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isMenuOpen]);

    return (
        <div>
            <nav className="bg-gray-800 text-white p-5 flex justify-between items-center">
                <Link href="/">
                    <span class="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                        Aniket Ashis
                    </span>

                </Link>
                <button id="menu-toggle" onClick={toggleMenu} className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="hidden md:flex">
                    <Link href="/"><span className="text-xl lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 block px-2 py-1 cursor-pointer">Home</span></Link>
                    <Link href="/profile"><span className="text-xl lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 block px-2 py-1 cursor-pointer">Profile</span></Link>
                    <Link href="/premium"><span className="text-xl lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 block px-2 py-1 cursor-pointer">Premium</span></Link>
                    <Link href="/login"><span className="text-xl lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 block px-2 py-1 cursor-pointer">Login</span></Link>
                </div>
            </nav>

            {/* Side Menu */}
            <div id="side-menu" className={`fixed top-0 left-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} h-full bg-gray-900 text-white w-64 z-50 transition-transform duration-300 ease-in-out`}>
                <div className="p-5">
                    <Link href="/"><span className="block px-2 py-1 cursor-pointer">Home</span></Link>
                    <Link href="/about"><span className="block px-2 py-1 cursor-pointer">About</span></Link>
                    <Link href="/services"><span className="block px-2 py-1 cursor-pointer">Services</span></Link>
                    <Link href="/contact"><span className="block px-2 py-1 cursor-pointer">Contact</span></Link>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}
        </div>
    );
}
