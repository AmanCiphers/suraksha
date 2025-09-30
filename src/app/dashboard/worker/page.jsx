'use client';
import { useState } from 'react';
import { FiBell, FiUser, FiPlus, FiFileText, FiHeart, FiClipboard, FiPhone, FiMenu } from 'react-icons/fi';
import Link from 'next/link';

export default function WorkerDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const workerName = "Rajesh";

    const keyActions = [
        { title: "My Health Passbook", icon: <FiClipboard />, link: "/dashboard/passbook" },
        { title: "I Feel Unwell", icon: <FiHeart />, link: "/dashboard/symptom-checker" },
        { title: "My Appointments", icon: <FiFileText />, link: "/dashboard/appointments" },
        { title: "My Medicines", icon: <FiPlus />, link: "/dashboard/medicines" },
        { title: "Emergency Contacts", icon: <FiPhone />, link: "/dashboard/emergency" },
    ];

    const statistics = [
        { title: "Appointments Today", value: 3 },
        { title: "Pending Medicines", value: 5 },
        { title: "Health Score", value: "82%" },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200">

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-950/95 border-r border-gray-800 p-6 flex flex-col transition-transform duration-300
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0 z-50`}>
                <h2 className="text-gray-100 font-bold text-3xl mb-8">ArogyaSeva</h2>
                {keyActions.map((action) => (
                    <Link
                        key={action.title}
                        href={action.link}
                        className="flex items-center gap-3 p-3 mb-4 rounded-xl hover:bg-gray-800 transition"
                    >
                        <span className="text-gray-400 text-xl">{action.icon}</span>
                        <span className="text-gray-100 font-medium">{action.title}</span>
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

            {/* Main Dashboard */}
            <div className="flex-1 flex flex-col p-6 overflow-auto ml-0 md:ml-64">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <FiUser size={40} className="text-gray-400" />
                        <div>
                            <p className="text-gray-500 text-sm">Hello,</p>
                            <h1 className="text-gray-100 text-2xl font-bold">{workerName}!</h1>
                        </div>
                    </div>
                    <FiBell size={28} className="text-gray-400 cursor-pointer hover:text-gray-200 transition" />
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {statistics.map((stat) => (
                        <div key={stat.title} className="flex flex-col p-6 bg-gray-850 rounded-2xl shadow-lg hover:shadow-xl border transition">
                            <p className="text-gray-400 text-sm">{stat.title}</p>
                            <h2 className="text-gray-100 text-2xl font-bold mt-2">{stat.value}</h2>
                        </div>
                    ))}
                </div>

                {/* Key Actions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 lg:grid-cols-3 gap-6">
                    {keyActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.link}
                            className="flex flex-col border items-center p-6 bg-gray-850 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-gray-400 text-3xl mb-4">{action.icon}</div>
                            <p className="text-center text-gray-100 font-medium text-lg">{action.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
