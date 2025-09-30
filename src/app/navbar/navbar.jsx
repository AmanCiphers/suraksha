"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="fixed top-0 left-0 w-full mt-5 z-40 flex justify-center px-4 py-3">
            <div className="w-full sm:w-3/4 bg-white/10 backdrop-blur-md text-white rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-md relative">
                {/* Logo */}
                <h1 className="font-semibold text-lg mr-2">ArogyaSeva</h1>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex gap-6 text-sm font-medium items-center">
                    <li><Link href="/" className="hover:text-indigo-300">Home</Link></li>
                    <li><a href="/dashboard" className="hover:text-indigo-300">Dashboard</a></li>
                    <li><Link href="/about" className="hover:text-indigo-300">About</Link></li>
                    <li><Link href="/features" className="hover:text-indigo-300">Features</Link></li>
                    <li><Link href="/login" className="hover:text-indigo-300">Login</Link></li>
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
                    className="sm:hidden z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Mobile Side Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Background overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black z-40"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Drawer menu */}
                            <motion.ul
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.5 }}
                                className="fixed top-0 right-0 h-full w-2/3 sm:w-1/2 rounded-l-2xl bg-black/95 text-white shadow-2xl z-50 px-8 py-6 flex flex-col gap-8 text-lg font-medium"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="self-end text-white hover:text-indigo-400 transition-colors"
                                >
                                    <X size={28} />
                                </button>

                                <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Home</Link></li>
                                <li><Link href="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Dashboard</Link></li>
                                <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">About</Link></li>
                                <li><Link href="/features" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Features</Link></li>
                                <li><Link href="/login" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Login</Link></li>

                                <li>
                                    <select
                                        value={language}
                                        onChange={handleLanguageChange}
                                        className="bg-black/30 border border-white/30 rounded-lg py-2 px-3 text-white text-sm focus:outline-none cursor-pointer w-full"
                                    >
                                        <option value="en" className="text-black">English</option>
                                        <option value="hi" className="text-black">हिंदी</option>
                                        <option value="pa" className="text-black">ਪੰਜਾਬੀ</option>
                                        <option value="ml" className="text-black">മലയാളം</option>
                                    </select>
                                </li>
                            </motion.ul>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NavBar;
