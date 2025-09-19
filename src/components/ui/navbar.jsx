"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex justify-center mt-4 px-4">
            <div className="w-full sm:w-3/4  bg-white/10 backdrop-blur-md text-white rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-md relative">

                {/* Logo */}
                <h1 className="font-semibold text-lg mr-2">Suraksha Siksha</h1>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex gap-6 text-sm font-medium">
                    <li className="cursor-pointer hover:text-gray-300">Home</li>
                    <li className="cursor-pointer hover:text-gray-300">About</li>
                    <li className="cursor-pointer hover:text-gray-300">Features</li>
                    <li className="cursor-pointer hover:text-gray-300">Language</li>
                </ul>

                {/* Mobile Hamburger Icon */}
                <button
                    className="sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <ul className="absolute top-full left-0 w-full bg-white/20 backdrop-blur-md text-white rounded-2xl px-4 py-3 flex flex-col gap-3 text-sm font-medium sm:hidden shadow-md">
                        <li className="cursor-pointer hover:text-gray-300">Home</li>
                        <li className="cursor-pointer hover:text-gray-300">About</li>
                        <li className="cursor-pointer hover:text-gray-300">Features</li>
                        <li className="cursor-pointer hover:text-gray-300">Language</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavBar;
