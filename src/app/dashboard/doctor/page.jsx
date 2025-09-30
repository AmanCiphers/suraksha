'use client';
import { useState } from 'react';
import { FiSearch, FiUser, FiCalendar, FiClipboard, FiFileText, FiMenu, FiBell, FiPlus } from 'react-icons/fi';
import { HiQrcode } from 'react-icons/hi';
import Link from 'next/link';

export default function DoctorDashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const doctorName = "Dr. Anjali";

    const quickStats = [
        { title: "Patients Seen Today", value: 8 },
        { title: "Pending Follow-ups", value: 2 },
    ];

    const todaysAppointments = [
        { time: "09:00 AM", name: "Rajesh Kumar", id: "W1234" },
        { time: "09:30 AM", name: "Sunita Devi", id: "W1235" },
        { time: "10:00 AM", name: "Aman Singh", id: "W1236" },
    ];

    const sidebarItems = [
        { title: "Dashboard", link: "/dashboards/doctor", icon: <FiClipboard /> },
        { title: "Appointments", link: "/dashboards/doctor/appointments", icon: <FiCalendar /> },
        { title: "Patients", link: "/dashboards/doctor/patients", icon: <FiUser /> },
        { title: "Reports", link: "/dashboards/doctor/reports", icon: <FiFileText /> },
        { title: "New Consultation", link: "/dashboards/doctor/consultation/new", icon: <FiPlus /> },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200">

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-950/95 border-r border-gray-800 p-6 flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0 z-50`}>
                <h2 className="text-gray-100 font-bold text-3xl mb-8">ArogyaSeva</h2>
                {sidebarItems.map((item) => (
                    <Link key={item.title} href={item.link} className="flex items-center gap-3 p-3 mb-4 rounded-xl hover:bg-gray-800 transition">
                        <span className="text-gray-400 text-xl">{item.icon}</span>
                        <span className="text-gray-100 font-medium">{item.title}</span>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="fixed top-4 left-4 md:hidden z-60 text-gray-400 text-2xl"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <FiMenu />
            </button>

            {/* Main Content */}
            <div className="flex-1 flex flex-col p-6 overflow-auto ml-0 md:ml-64">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <FiUser size={40} className="text-gray-400" />
                        <div>
                            <p className="text-gray-500 text-sm">Welcome,</p>
                            <h1 className="text-gray-100 text-2xl font-bold">{doctorName}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search Patient by Name/ID"
                            className="p-2 rounded-lg text-gray-900"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FiBell size={28} className="text-gray-400 cursor-pointer hover:text-gray-200 transition" />
                    </div>
                </div>

                {/* Scan QR Button */}
                <div className="mb-6">
                    <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl">
                        <HiQrcode size={24} />
                        Scan QR Code
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {quickStats.map((stat) => (
                        <div key={stat.title} className="flex flex-col p-6 bg-gray-850 rounded-2xl shadow-lg border">
                            <p className="text-gray-400 text-sm">{stat.title}</p>
                            <h2 className="text-gray-100 text-2xl font-bold mt-2">{stat.value}</h2>
                        </div>
                    ))}
                </div>

                {/* Today's Appointments */}
                <div className="bg-gray-850 p-6 rounded-2xl shadow-md">
                    <h2 className="text-gray-100 text-xl font-bold mb-4">Today's Appointments</h2>
                    <ul>
                        {todaysAppointments.map((appt) => (
                            <li key={appt.id} className="flex justify-between p-3 border-b border-gray-800 hover:bg-gray-800 transition">
                                <span>{appt.time}</span>
                                <span>{appt.name}</span>
                                <Link href={`/dashboards/doctor/patient/${appt.id}`} className="text-blue-500 hover:underline">View Profile</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
