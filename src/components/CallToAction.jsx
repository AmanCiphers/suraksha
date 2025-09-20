'use client';
import MyButton from './button'

const CallToAction = () => {
    return (
        <section className="relative w-[80%] lg:mt-40 mt-20 mx-auto py-16 text-center flex flex-col items-center z-50">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get <span className='text-indigo-600 text-stroke'>Started</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mb-10">
                Join <span className='text-indigo-600'>Suraksha Siksha</span> today to explore interactive safety learning,
                manage drills, and make institutions more resilient.
            </p>

            <div className="flex flex-row sm:flex-row gap-4">
                <MyButton className="" name='Login'>
                    Login
                </MyButton>
                <MyButton className="" name='SignUp'>
                    Sign Up
                </MyButton>
                <MyButton className="" name='Home'>
                    Get Started
                </MyButton>
            </div>
        </section>
    );
};

export default CallToAction;
