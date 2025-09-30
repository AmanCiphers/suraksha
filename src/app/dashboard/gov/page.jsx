'use client';
import { useState } from 'react';
import { FiBarChart2, FiDownload, FiMap, FiAlertCircle, FiMessageSquare } from 'react-icons/fi';

export default function AdminDashboard() {
    const keyMetrics = [
        { title: "Active Users", value: 1250 },
        { title: "Top Symptoms", value: "Fever, Cough" },
        { title: "Vaccination Coverage", value: "82%" },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-200 p-6 flex-col">
            <h1 className="text-gray-100 text-2xl font-bold mb-6">Public Health Dashboard</h1>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {keyMetrics.map((metric) => (
                    <div key={metric.title} className="flex flex-col p-6 bg-gray-850 rounded-2xl shadow-lg border">
                        <p className="text-gray-400 text-sm">{metric.title}</p>
                        <h2 className="text-gray-100 text-2xl font-bold mt-2">{metric.value}</h2>
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
                </div>
                <div className="bg-gray-850 p-6 rounded-2xl shadow-md">
                    <h2 className="text-gray-100 font-bold mb-4">Alert Log</h2>
                    <FiAlertCircle size={40} className="text-gray-400" />
                </div>
            </div>

            {/* Broadcast & Data Export */}
            <div className="flex flex-col sm:flex-row gap-6">
                <button className="flex-1 bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    <FiMessageSquare /> Send Broadcast
                </button>
                <button className="flex-1 bg-green-600 p-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                    <FiDownload /> Export Data
                </button>
            </div>
        </div>
    );
}
