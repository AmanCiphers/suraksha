import MyButton from "./button";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-70 text-center space-y-6 relative z-10 px-4">
            <div className="flex items-center flex-col">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    Building Disaster-Resilient Educational Communities
                </h1>
                <h3 className="mt-4 text-base sm:text-lg lg:text-xl max-w-2xl text-gray-200">
                    Empowering students, teachers, and administrators with the knowledge and tools
                    to respond effectively during disasters.
                </h3>
                <h3 className="mt-4 text-base sm:text-lg">Continue as :</h3>
            </div>

            {/* Buttons: stacked on mobile, inline on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <MyButton name="Student" />
                <MyButton name="Teacher" />
                <MyButton name="Admin" />
            </div>
        </div>
    );
};

export default Hero;
