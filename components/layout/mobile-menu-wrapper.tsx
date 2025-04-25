"use client";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import { Menu, X } from "lucide-react"; 

export default function MobileMenuWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden relative z-50">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-800 focus:outline-none z-50 cursor-pointer"
      >
        {isOpen ? <X size={28} className="text-red-600"/> : <Menu size={28} />}
      </button>

      {isOpen && <MobileNav />}
    </div>
  );
}
