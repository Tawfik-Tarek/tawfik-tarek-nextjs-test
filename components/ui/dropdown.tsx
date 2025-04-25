"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface DropDownProps {
  lable: string;
  children?: React.ReactNode;
}

export default function DropDown({ lable, children }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <div
        className="text-primary font-poppins hover:text-primary/80 transition-colors duration-200 ease-in-out cursor-pointer flex items-center gap-[0.313rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {lable}
        <Image
          src="/icons/arrow.svg"
          alt="arrow"
          width={10}
          height={10}
          className={`transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isOpen && children && (
        <div className="absolute -left-6 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-100 transition">
          {children}
        </div>
      )}
    </div>
  );
}