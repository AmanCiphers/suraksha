'use client';
import { useState } from 'react';
import { FiUser, FiClipboard, FiPlus, FiBell } from 'react-icons/fi';
import Link from 'next/link';

export default function EmployerDashboard() {
    const employerName = "ABC Corp";
    const [workers, setWorkers] = useState([
        { name: "Rajesh Kumar", id: "W1234" },
        { name: "Sunita Devi", id: "W1235" },
        { name: "Aman Singh", id: "W1236" },
    ]);

    const stats = [
        { title: "Total Workers", value: workers.length },
        { title: "Vaccination Completion", value: "78%" },
        { title: "Recent Health Alerts", value: 2 },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200 p-6 flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-gray-100 text-2xl font-bold">{employerName} Dashboard</h1>
                <FiBell size={28} className="text-gray-400 cursor-pointer hover:text-gray-200 transition" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.title} className="flex flex-col p-6 bg-gray-850 rounded-2xl shadow-lg border">
                        <p className="text-gray-400 text-sm">{stat.title}</p>
                        <h2 className="text-gray-100 text-2xl font-bold mt-2">{stat.value}</h2>
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
                <ul>
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
                <button className="mt-4 bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition">Send Announcement</button>
            </div>
        </div>
    );
}
