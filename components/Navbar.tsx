'use client'

import { UserButton, useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AlignJustify, X } from 'react-feather';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const { signOut } = useClerk();
    const router = useRouter();

    return (
        <header className="flex justify-between items-center p-4 border-b-2 border-solid">
            {/* Logo */}
            <div className="text-xl font-bold">PF</div>

            {/* Navigation Links */}
            <div className="hidden lg:flex space-x-4">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/teams">Teams</Link>
            </div>

            <div className="hidden lg:block"><UserButton afterSignOutUrl='/' /></div>

            {/* Alternating Menu (visible on small screens) */}
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <X /> : <AlignJustify />}
            </div>

            {/* Responsive Menu (visible on small screens when menuOpen is true) */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col absolute top-16 right-4 bg-white p-4 shadow-md">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/teams">Teams</Link>
                    <div onClick={
                        () => {
                            setMenuOpen(false);
                            signOut(() => router.push("/"));
                        }
                    }>Sign out</div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
