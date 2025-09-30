'use client';
import { useState } from 'react';
import { FiUser, FiClipboard, FiPlus, FiBell, FiMenu, FiFileText, FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';

export default function EmployerDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const employerName = "ABC Corp";

    const [workers, setWorkers] = useState([
        { name: "Rajesh Kumar", id: "W1234" },
        { name: "Sunita Devi", id: "W1235" },
        { name: "Aman", id: "W1236" },
        { name: "Mehak", id: "W1236" },
        { name: "Karan", id: "W1236" },
        { name: "Kabir", id: "W1236" },
    ]);

    const stats = [
        { title: "Total Workers", value: workers.length, icon: <FiUser /> },
        { title: "Vaccination Completion", value: "78%", icon: <FiClipboard /> },
        { title: "Recent Health Alerts", value: 2, icon: <FiBell /> },
    ];

    const sidebarItems = [
        { title: "Dashboard", link: "/dashboards/employer", icon: <FiClipboard /> },
        { title: "Workers", link: "/dashboards/employer/workers", icon: <FiUser /> },
        { title: "Reports", link: "/dashboards/employer/reports", icon: <FiFileText /> },
        { title: "Announcements", link: "/dashboards/employer/announcements", icon: <FiMessageSquare /> },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200">

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-950/95 border-r border-gray-800 p-6 flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0 z-50`}>
                <h2 className="text-gray-100 font-bold text-3xl mb-8">{employerName}</h2>
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
                    <h1 className="text-gray-100 text-2xl font-bold">{employerName} Dashboard</h1>
                    <FiBell size={28} className="text-gray-400 cursor-pointer hover:text-gray-200 transition" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.title} className="flex items-center gap-4 p-6 bg-gray-850 rounded-2xl shadow-lg border">
                            <div className="text-gray-400 text-3xl">{stat.icon}</div>
                            <div>
                                <p className="text-gray-400 text-sm">{stat.title}</p>
                                <h2 className="text-gray-100 text-2xl font-bold mt-1">{stat.value}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Workers List */}
                <div className="bg-gray-850 p-6 rounded-2xl shadow-md mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-gray-100 text-xl font-bold">Workers</h2>
                        <button className="flex items-center gap-2 bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition">
                            <FiPlus /> Register New Worker
                        </button>
                    </div>
                    <ul className="max-h-64 overflow-y-auto">
                        {workers.map((worker) => (
                            <li key={worker.id} className="flex justify-between p-3 border-b border-gray-800 hover:bg-gray-800 transition">
                                <span>{worker.name}</span>
                                <span>ID: {worker.id}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Announcements */}
                <div className="bg-gray-850 p-6 rounded-2xl shadow-md">
                    <h2 className="text-gray-100 text-xl font-bold mb-4">Announcements</h2>
                    <textarea className="w-full p-3 rounded-lg bg-gray-900 text-gray-100" placeholder="Post a new announcement..." rows={4}></textarea>
                    <button className="mt-4 bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                        <FiMessageSquare /> Send Announcement
                    </button>
                </div>

            </div>
        </div>
    );
}

