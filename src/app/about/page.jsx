"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <section className="w-[85%] mx-auto py-16 flex lg:mt-30  lg:mb-30 flex-col justify-center items-center text-center">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
                About Migrant Health Passbook
            </motion.h1>

            {/* Intro Paragraph */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-gray-300 max-w-4xl m-2 text-center mb-10 text-xl sm:text-xl"
            >
                The <span className="font-semibold text-indigo-400">Migrant Health Passbook</span> is a digital platform designed to ensure that migrant workers have secure, portable, and continuous access to their health records. It bridges the gap between workers, doctors, employers, and government agencies, making healthcare accessible across regions and jobs.
            </motion.p>

            {/* Mission & Vision */}
            <div className="grid gap-10 sm:grid-cols-2 w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        To empower migrant workers by providing them with a secure, portable health record system that ensures continuity of care regardless of location or employer.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        To create a nationwide health ecosystem where every migrant worker’s medical history is securely accessible, improving healthcare delivery, reducing duplication, and enabling data-driven policymaking.
                    </p>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-300 max-w-2xl text-center mt-12 text-xl"
            >
                Be part of the movement to ensure better healthcare for millions of workers across India. Together, we can make health access seamless, secure, and universal.
            </motion.p>
        </section>
    );
};

export default AboutPage;
