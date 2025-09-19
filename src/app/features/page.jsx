'use client';

import { GraduationCap, BookOpen, User, Landmark, Shield, Bell, LineChart, Layers } from "lucide-react";

const features = [
    {
        icon: GraduationCap,
        title: "Student Features",
        description: "Empowering students with interactive and immersive safety learning.",
        items: [
            "Interactive Learning Modules with quizzes and tasks",
            "Virtual Drills & Simulations for real-world practice",
            "Regional Awareness Content tailored to your area",
            "Progress Tracking, Badges & Certificates",
        ],
    },
    {
        icon: BookOpen,
        title: "Teacher Tools",
        description: "Helping teachers manage, track, and train students efficiently.",
        items: [
            "Class & Drill Management dashboards",
            "Student Progress Monitoring",
            "Comprehensive Teaching Resources Library",
            "Custom Drill Creation with templates",
        ],
    },
    {
        icon: User,
        title: "Administrator Features",
        description: "Complete control for administrators to oversee safety readiness.",
        items: [
            "School-wide Overview dashboards",
            "User Management & Permissions",
            "Detailed Analytics & Reports",
            "Institution Safety Planning",
        ],
    },
    {
        icon: Landmark,
        title: "Government Features",
        description: "Tools for policymakers to manage safety across institutions.",
        items: [
            "Multi-school Monitoring in real-time",
            "Policy Management and compliance checks",
            "Emergency Alert System integrations",
            "Regional Analytics & Reports",
        ],
    },
    {
        icon: Shield,
        title: "Security & Privacy",
        description: "Your data stays safe and protected at all times.",
        items: [
            "End-to-End Encrypted Communication",
            "Role-based Access Control",
            "GDPR & Data Compliance",
            "Regular Security Audits",
        ],
    },
    {
        icon: Bell,
        title: "Emergency Readiness",
        description: "Fast and effective communication in critical moments.",
        items: [
            "One-Click Emergency Alerts",
            "Automated Notifications to Students & Staff",
            "Integrated Helpline Numbers",
            "Crisis Response Workflows",
        ],
    },
    {
        icon: LineChart,
        title: "Analytics & Insights",
        description: "Make data-driven decisions with smart insights.",
        items: [
            "Drill Participation Analytics",
            "Regional & National Safety Trends",
            "Predictive Insights with AI",
            "Custom Exportable Reports",
        ],
    },
    {
        icon: Layers,
        title: "Scalable Infrastructure",
        description: "Built for small schools to large government institutions.",
        items: [
            "Cloud-based & Always Accessible",
            "Works on Web & Mobile",
            "Seamless Multi-language Support",
            "Future-proof Modular Design",
        ],
    },
];

const FeatureCard = ({ icon: Icon, title, description, items }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 w-full flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-white/20">
            <div className="flex items-center gap-3 mb-4">
                <Icon size={28} className="text-indigo-400" />
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <p className="text-gray-300 mb-4 text-sm">{description}</p>
            <ul className="text-gray-200 space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="border-b border-gray-500/30 pb-2 last:border-none">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const FeaturesPage = () => {
    return (
        <section className="w-[85%] mx-auto py-16 flex flex-col justify-center mt-0 items-center">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6  text-center z-10">
                Platform Features
            </h1>
            <h2>
                Login to Use the featues
            </h2>
            <p className="text-gray-300 max-w-2xl text-center mb-14">
                Discover the powerful features that make <span className="font-semibold text-indigo-400">Suraksha Siksha</span> the leading platform for safety education, training, and management.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesPage;
