"use client";
import petallogo from '../../assets/petal.svg';
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-white/5 backdrop-blur-lg border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-gray-300">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white">Suraksha Siksha</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Empowering schools with safety, awareness, and preparedness through
                        technology.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-indigo-400 cursor-pointer">Home</li>
                        <li className="hover:text-indigo-400 cursor-pointer">About</li>
                        <li className="hover:text-indigo-400 cursor-pointer">Features</li>
                        <li className="hover:text-indigo-400 cursor-pointer">Language</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-indigo-400 cursor-pointer">Docs</li>
                        <li className="hover:text-indigo-400 cursor-pointer">Support</li>
                        <li className="hover:text-indigo-400 cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-indigo-400 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                <span>
                    © {new Date().getFullYear()} Suraksha Siksha. All rights reserved. | Powered by Vth Petal
                </span>
                <img
                    src={petallogo.src}
                    alt="Vth Petal Logo"
                    className="h-5 inline-block"
                />
            </div>


        </footer>
    );
};

export default Footer;
