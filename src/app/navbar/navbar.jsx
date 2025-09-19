"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        // later: hook it up to i18n or your translation system
    };

    return (
        <div className="w-full mx-auto flex justify-center mt-8 px-4">
            <div className="w-full sm:w-3/4 bg-white/10 backdrop-blur-md text-white rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-md relative">

                {/* Logo */}
                <h1 className="font-semibold text-lg mr-2">Suraksha Siksha</h1>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex gap-6 text-sm font-medium items-center">
                    <Link href='/'><li className="cursor-pointer hover:text-gray-300">Home</li></Link>
                    <Link href='/about'><li className="cursor-pointer hover:text-gray-300">About</li></Link>
                    <Link href='/features'><li className="cursor-pointer hover:text-gray-300">Features</li></Link>
                    <li>
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                            className="bg-transparent border border-white/30 rounded-lg py-1 text-white text-sm focus:outline-none cursor-pointer"
                        >
                            <option value="en" className="text-black">English</option>
                            <option value="hi" className="text-black">हिंदी</option>
                            <option value="pa" className="text-black">ਪੰਜਾਬੀ</option>
                            <option value="ml" className="text-black">മലയാളം</option>
                        </select>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
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
                        <li>
                            <select
                                value={language}
                                onChange={handleLanguageChange}
                                className="bg-transparent border border-white/30 rounded-lg px-2 py-1 text-white text-sm focus:outline-none cursor-pointer"
                            >
                                <option value="en" className="text-black">English</option>
                                <option value="hi" className="text-black">हिंदी</option>
                                <option value="pa" className="text-black">ਪੰਜਾਬੀ</option>
                                <option value="ml" className="text-black">മലയാളം</option>
                            </select>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavBar;
