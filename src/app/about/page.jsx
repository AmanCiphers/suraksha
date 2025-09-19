"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <section className="w-[85%] mx-auto py-16 flex flex-col justify-center items-center text-center">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
                About Suraksha Siksha
            </motion.h1>

            {/* Intro Paragraph */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-gray-300 max-w-4xl m-2 text-center mb-10 text-xl sm:text-xl"
            >
                <span className="font-semibold text-indigo-400">Suraksha Siksha</span> is a cutting-edge platform designed to enhance safety education and preparedness for students, teachers, administrators, and government bodies. Our goal is to make learning interactive, practical, and accessible for everyone.
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
                        To empower students and educators with immersive safety learning tools, interactive simulations, and progress tracking for a safer future.
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
                        To be the leading platform for safety education, ensuring students, teachers, and institutions are prepared, informed, and confident in handling emergencies.
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
                Join us in creating a safer and smarter learning environment for everyone. Explore our platform and experience safety education like never before.
            </motion.p>
        </section>
    );
};

export default AboutPage;
