"use client";

import { User, Stethoscope, Building2, Landmark, Shield, Bell, LineChart, Smartphone } from "lucide-react";
import CallToAction from "../../components/CallToAction";

const features = [
    {
        icon: User,
        title: "Worker Features",
        description: "Health record access for migrant workers anytime, anywhere.",
        items: [
            "Digital Health Passbook",
            "Offline Access & Sync Later",
            "Multi-language Support",
            "Personal Medical History Tracking",
        ],
    },
    {
        icon: Stethoscope,
        title: "Doctor Tools",
        description: "Enable healthcare professionals to deliver better care.",
        items: [
            "Instant Patient History View",
            "Update Treatments & Prescriptions",
            "Upload Lab Reports",
            "Issue Health Certificates",
        ],
    },
    {
        icon: Building2,
        title: "Employer Features",
        description: "Simplify worker onboarding and compliance management.",
        items: [
            "Verify Worker Health Records",
            "Track Checkups & Fitness Certificates",
            "Generate Compliance Reports",
            "Health Status Dashboard",
        ],
    },
    {
        icon: Landmark,
        title: "Government Features",
        description: "Centralized monitoring and policy implementation.",
        items: [
            "Multi-region Health Monitoring",
            "Emergency Alerts & Campaigns",
            "Analytics & Reporting",
            "Policy Enforcement Tools",
        ],
    },
    {
        icon: Shield,
        title: "Security & Privacy",
        description: "Data protection and compliance as top priorities.",
        items: [
            "End-to-End Encryption",
            "Role-based Access Control",
            "Data Anonymization",
            "Regular Security Audits",
        ],
    },
    {
        icon: Bell,
        title: "Alerts & Notifications",
        description: "Timely communication in emergencies and updates.",
        items: [
            "One-Click Emergency Notifications",
            "Vaccination & Health Reminders",
            "Push & SMS Alerts",
            "Integrated Helpline Numbers",
        ],
    },
    {
        icon: LineChart,
        title: "Analytics & Insights",
        description: "Smarter decisions with aggregated health data.",
        items: [
            "Worker Health Trends",
            "Disease Outbreak Monitoring",
            "Predictive Insights",
            "Custom Reports",
        ],
    },
    {
        icon: Smartphone,
        title: "Accessibility",
        description: "Easy-to-use design for workers in all regions.",
        items: [
            "Simple Mobile-first Interface",
            "Multi-Device Support",
            "Works on Low-speed Networks",
            "Inclusive, User-friendly Design",
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
                    <li
                        key={idx}
                        className="border-b border-gray-500/30 pb-2 last:border-none hover:text-indigo-400"
                    >
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center z-10">
                Platform Features
            </h1>
            <h2 className="text-lg text-gray-300 mb-4">Login to access features</h2>
            <p className="text-gray-300 max-w-2xl text-center mb-14">
                Discover the powerful features that make the{" "}
                <span className="font-semibold text-indigo-400">Migrant Health Passbook</span>{" "}
                a reliable platform for health records, worker safety, and continuity of care.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 justify-center">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} {...feature} />
                ))}
            </div>

            <CallToAction />
        </section>
    );
};

export default FeaturesPage;
