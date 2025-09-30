'use client';
import { useState } from 'react';
import { FiBarChart2, FiDownload, FiMap, FiAlertCircle, FiMessageSquare, FiMenu, FiUsers, FiClipboard } from 'react-icons/fi';
import Link from 'next/link';

export default function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const keyMetrics = [
        { title: "Active Users", value: 1250, icon: <FiUsers /> },
        { title: "Top Symptoms", value: "Fever, Cough", icon: <FiAlertCircle /> },
        { title: "Vaccination Coverage", value: "82%", icon: <FiClipboard /> },
    ];

    const alertLog = [
        { time: "09:00 AM", message: "Cluster of fever reported in Thiruvananthapuram" },
        { time: "10:30 AM", message: "Vaccination drive completed in Ernakulam" },
        { time: "11:15 AM", message: "Flu outbreak in Kozhikode" },
        { time: "12:00 PM", message: "New public health guideline issued" },
    ];

    const sidebarItems = [
        { title: "Dashboard", link: "/dashboards/admin", icon: <FiBarChart2 /> },
        { title: "Users", link: "/dashboards/admin/users", icon: <FiUsers /> },
        { title: "Reports", link: "/dashboards/admin/reports", icon: <FiClipboard /> },
        { title: "Alerts", link: "/dashboards/admin/alerts", icon: <FiAlertCircle /> },
        { title: "Maps", link: "/dashboards/admin/maps", icon: <FiMap /> },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200">

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-950/95 border-r border-gray-800 p-6 flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0 z-50`}>
                <h2 className="text-gray-100 font-bold text-3xl mb-8">Admin Panel</h2>
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

                <h1 className="text-gray-100 text-2xl font-bold mb-6">Public Health Dashboard</h1>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {keyMetrics.map((metric) => (
                        <div key={metric.title} className="flex items-center gap-4 p-6 bg-gray-850 rounded-2xl shadow-lg border">
                            <div className="text-gray-400 text-3xl">{metric.icon}</div>
                            <div>
                                <p className="text-gray-400 text-sm">{metric.title}</p>
                                <h2 className="text-gray-100 text-2xl font-bold mt-1">{metric.value}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-850 p-6 rounded-2xl shadow-md mb-8 flex justify-center items-center h-64">
                    <FiMap size={48} className="text-gray-500" />
                    <span className="ml-4 text-gray-400">Map of Kerala with Health Density Overlay</span>
                </div>

                {/* Charts & Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-850 p-6 rounded-2xl shadow-md">
                        <h2 className="text-gray-100 font-bold mb-4">Disease Incidence Over Time</h2>
                        <FiBarChart2 size={40} className="text-gray-400" />
                        <p className="text-gray-400 mt-2">Chart placeholder for visualization</p>
                    </div>

                    <div className="bg-gray-850 p-6 rounded-2xl shadow-md flex flex-col">
                        <h2 className="text-gray-100 font-bold mb-4">Alert Log</h2>
                        <ul className="flex-1 overflow-y-auto">
                            {alertLog.map((alert, idx) => (
                                <li key={idx} className="p-3 border-b border-gray-800 hover:bg-gray-800 transition">
                                    <span className="text-gray-400 text-sm">{alert.time}</span>
                                    <p className="text-gray-100">{alert.message}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Broadcast & Export */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <button className="flex-1 bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                        <FiMessageSquare /> Send Broadcast
                    </button>
                    <button className="flex-1 bg-green-600 p-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                        <FiDownload /> Export Data
                    </button>
                </div>

            </div>
        </div>
    );
}
