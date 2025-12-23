'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 w-full h-[60px] flex items-center justify-between bg-white shadow z-50 px-4 sm:px-[55px] py-2 sm:py-[10px]">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Basics Referee School Logo" className="h-7 sm:h-8 w-auto" />
        <div className="flex flex-col">
          <span className="font-bold text-base sm:text-lg leading-none">BASICS</span>
          <span className="text-xs leading-none">Referee School</span>
        </div>
      </div>
      {/* Desktop/Tablet Buttons */}
      <div className="hidden sm:flex gap-2">
        <Button variant="ghost" className="font-medium px-4 py-2">Login</Button>
        <Button className="font-medium px-4 py-2">Register</Button>
      </div>
      {/* Mobile Hamburger */}
      <div className="sm:hidden flex items-center">
        <button
          className="focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute top-[40px] right-4 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-2 z-50 min-w-[60px]">
            <Button variant="ghost" className="font-medium w-full" onClick={() => setMenuOpen(false)}>Login</Button>
            <Button className="font-medium w-full" onClick={() => setMenuOpen(false)}>Register</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
