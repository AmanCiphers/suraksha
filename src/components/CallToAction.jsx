'use client';

const CallToAction = () => {
    return (
        <section className="relative w-[80%] mt-20 mx-auto py-16 text-center flex flex-col items-center z-50">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
            </h2>
            <p className="text-gray-300 max-w-2xl mb-10">
                Join Suraksha Siksha today to explore interactive safety learning,
                manage drills, and make institutions more resilient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition">
                    Login
                </button>
                <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition">
                    Sign Up
                </button>
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
