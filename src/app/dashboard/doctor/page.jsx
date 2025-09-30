'use client';
import { useState } from 'react';
import { FiSearch, FiUser, FiCalendar, FiClipboard, FiFileText } from 'react-icons/fi';
import Link from 'next/link';

export default function DoctorDashboard() {
    const [searchQuery, setSearchQuery] = useState("");
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

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200 p-6 flex-col">
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
                    {/* <button className="bg-blue-600 p-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                        
                    </button> */}
                </div>
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
                            <Link href={`/doctor/patient/${appt.id}`} className="text-blue-500 hover:underline">View Profile</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
