'use client';
import { GraduationCap, User, Landmark, BookOpen } from "lucide-react";

const features = {
    student: [
        "Interactive Learning Modules",
        "Virtual Drills & Simulations",
        "Regional Awareness Content",
        "Progress Tracking & Badges",
    ],
    teacher: [
        "Class & Drill Management",
        "Student Progress Monitoring",
        "Teaching Resources Library",
        "Custom Drill Creation",
    ],
    admin: [
        "School-wide Overview",
        "User Management",
        "Analytics & Reports",
        "Institution Safety Planning",
    ],
    government: [
        "Multi-school Monitoring",
        "Policy Management",
        "Emergency Alert System",
        "Regional Analytics",
    ],
};

const Card = ({ icon: Icon, title, items }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 w-full sm:w-72 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <Icon size={28} className="text-white" />
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <ul className="text-gray-200 space-y-3">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="border-b border-gray-500/30 pb-2 last:border-none"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const RoleCards = () => {
    return (
        <section className="w-[80%] mx-auto py-12 flex flex-col justify-center items-center">
            {/* Section Title */}
            <h1 className="text-2xl z-10 sm:text-4xl md:text-6xl font-bold text-white mb-10 mt-20">
                Use Cases
            </h1>

            {/* Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                <Card icon={GraduationCap} title="Student Section" items={features.student} />
                <Card icon={BookOpen} title="Teacher Section" items={features.teacher} />
                <Card icon={User} title="Administrator" items={features.admin} />
                <Card icon={Landmark} title="Government" items={features.government} />
            </div>
        </section>
    );
};

export default RoleCards;
