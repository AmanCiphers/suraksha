'use client';
import MyButton from './button'

const CallToAction = () => {
    return (
        <section className="relative w-[80%] lg:mt-40 mt-20 mx-auto py-16 text-center flex flex-col items-center z-50">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className='text-indigo-600 text-stroke'>Access Your Health Passbook</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mb-10">
                Join the <span className='text-indigo-600'>ArogyaSeva</span> platform today to securely manage
                your health records, connect with doctors, and ensure continuity of care anywhere.
            </p>

            <div className="flex flex-row sm:flex-row gap-4">
                <MyButton name='Login'>Login</MyButton>
                <MyButton name='Sign Up'>Sign Up</MyButton>
                <MyButton name='Explore'>Get Started</MyButton>
            </div>
        </section>
    );
};

export default CallToAction;
