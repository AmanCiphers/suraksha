"use client"; // Client component

import "./globals.css";
import Navbar from "@/app/navbar/navbar";
import Footer from "@/app/footer/footer";
import Background from "@/app/background/Squares";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">
        {!isDashboard && <Background />}
        {!isDashboard && (
          <div className="z-50">
            <Navbar />
          </div>
        )}
        <main className={isDashboard ? "pt-0" : "pt-16 pb-20"}>{children}</main>
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
