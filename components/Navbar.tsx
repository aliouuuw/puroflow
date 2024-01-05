'use client'

import { UserButton, useClerk } from '@clerk/nextjs';
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
    <header className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-xl font-bold">PF</div>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-4">
        <a href="/">Dashboard</a>
        <a href="/about">Projects</a>
        <a href="/contact">Teams</a>
      </div>

      <div className="hidden lg:block"><UserButton afterSignOutUrl='/'/></div>

      {/* Alternating Menu (visible on small screens) */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <X /> : <AlignJustify />}
      </div>

      {/* Responsive Menu (visible on small screens when menuOpen is true) */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col absolute top-16 right-4 bg-white p-4 shadow-md">
          <a href="/">Dashboard</a>
          <a href="/about">Projects</a>
          <a href="/contact">Teams</a>
          <div onClick={
            () => {setMenuOpen(false);
                signOut(() => router.push("/"));
            }
        }>Sign out</div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
