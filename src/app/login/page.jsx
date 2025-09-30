"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import img from "../../../public/6773526.jpg"; // ✅ keep import
import Link from "next/link";

export default function LoginCard() {
    const [role, setRole] = useState("student");

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            {/* Main Card */}
            <div className="w-full max-w-5xl h-[600px] backdrop-blur-lg rounded-3xl shadow-2xl flex overflow-hidden border border-white/20">

                {/* Left Side - Login Form */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Welcome Back
                    </h2>

                    {/* Role Selector */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {["student", "teacher", "admin"].map((r) => (
                            <button
                                key={r}
                                onClick={() => setRole(r)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition ${role === r
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                    }`}
                            >
                                {r.charAt(0).toUpperCase() + r.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Login Form */}
                    <form className="space-y-6">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-xl py-3 font-semibold text-lg shadow-md"
                        >
                            Login
                        </button>
                    </form>

                    {/* Links */}
                    <div className="flex justify-between text-sm text-gray-400 mt-6">
                        <a href="#" className="hover:text-indigo-300 transition">
                            Forgot Password?
                        </a>
                        <a href="#" className="hover:text-indigo-300 transition">
                            Contact Support
                        </a>
                    </div>

                    {/* Sign up */}
                    <p className="text-center text-gray-400 mt-6">
                        Don’t have an account?{" "}
                        <Link href='signup'>
                            <h1 className="text-indigo-400 hover:text-indigo-300 transition font-medium">
                                Sign Up
                            </h1>
                        </Link>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2 h-full relative">
                    <Image
                        src={img}
                        alt="Login Visual"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
