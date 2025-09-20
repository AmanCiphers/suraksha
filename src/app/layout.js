import "./globals.css";
import Navbar from "@/app/navbar/navbar";
import Footer from "@/app/footer/footer";
import Background from "@/app/background/Squares";

export const metadata = {
  title: "Suraksha Siksha",
  description: "Digital Health Record Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">
        {/* Background squares */}
        <Background />

        {/* Navbar always at top */}
        <div className="z-50">
          <Navbar />
        </div>

        {/* Main page content */}
        <main className="pt-16 pb-20">{children}</main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
