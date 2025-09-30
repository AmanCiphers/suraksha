import MyButton from "./button";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center lg:mt-70 mt-28 text-center space-y-6 relative z-10 px-4">
            <div className="flex items-center flex-col">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl max-w-[80%] font-bold text-white">
                    <span className="text-indigo-600 text-stroke">ArogyaSeva - Your Health Passbook</span>
                </h1>
                <h3 className="mt-4 text-base sm:text-lg lg:text-xl max-w-2xl text-gray-200">
                    A digital health record system designed for migrant workers,
                    ensuring accessibility, continuity of care, and easy verification.
                </h3>
                <h3 className="mt-4 text-base sm:text-lg">Login as :</h3>
            </div>

            {/* Buttons: stacked on mobile, inline on larger screens */}
            <div className="flex flex-row gap-4 sm:gap-8">
                <MyButton name="Worker" />
                <MyButton name="Doctor" />
                <MyButton name="Employer" />
                <MyButton name="Government Official" />
            </div>
        </div>
    );
};

export default Hero;
