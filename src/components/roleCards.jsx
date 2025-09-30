"use client";
import { User, Stethoscope, Building2, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = {
    worker: [
        "Secure digital health passbook",
        "Access to personal medical history",
        "Works offline with sync later",
        "Multi-language support",
    ],
    doctor: [
        "View patient history instantly",
        "Update treatments & prescriptions",
        "Upload medical reports",
        "Issue health certificates",
    ],
    employer: [
        "Verify worker’s health records",
        "Track medical checkups",
        "Compliance reporting",
        "Onboarding with verified data",
    ],
    government: [
        "Centralized monitoring",
        "Analytics & reporting",
        "Policy implementation",
        "Emergency alerts & health campaigns",
    ],
};

/* Animation variants */
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.06,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.32, ease: "easeOut" },
    },
};

const Card = ({ icon: Icon, title, items }) => {
    return (
        <motion.article
            variants={cardVariant}
            className="w-full sm:w-72"
            tabIndex={0}
            role="button"
            whileHover={{ scale: 1.03, y: -6 }}
            whileFocus={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            aria-label={title}
        >
            <div
                className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-md rounded-2xl shadow-lg
                   hover:shadow-2xl transition-transform duration-150 ease-out
                   p-6 flex flex-col h-full border border-white/10"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Icon size={32} className="text-indigo-400" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
                </div>

                <ul className="text-gray-200 space-y-3 mt-2 flex-1">
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            className="border-b border-gray-500/20 pb-2 last:border-none text-sm sm:text-base
                         hover:text-indigo-300 transition-colors duration-150 ease-out"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* optional CTA inside card */}
                <div className="mt-4">
                    <Link href='/features'>
                        <button
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600/90 text-white
                       hover:bg-indigo-700 cursor-pointer transition-colors duration-150"
                        >
                            Explore
                        </button>
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

const RoleCards = () => {
    return (
        <section className="w-[85%] mx-auto mt-60 py-12 flex flex-col justify-center items-center">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-10 font-extrabold text-white mb-8 text-center"
            >
                Use Cases
            </motion.h1>

            {/* Animated grid container */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center w-full"
            >
                <Card icon={User} title="Worker" items={features.worker} />
                <Card icon={Stethoscope} title="Doctor" items={features.doctor} />
                <Card icon={Building2} title="Employer" items={features.employer} />
                <Card icon={Landmark} title="Government" items={features.government} />
            </motion.div>
        </section>
    );
};

export default RoleCards;
