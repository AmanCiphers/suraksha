import Link from "next/link";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-4 p-6">
            <h1 className="text-3xl font-bold">Choose the User Type</h1>
            <h2 className="text-gray-300 text-center max-w-md">
                This is just for demo, to show how the UI/UX will look and feel. Features may or may not work.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                    href="/dashboard/worker"
                    className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-center"
                >
                    Worker
                </Link>

                <Link
                    href="/dashboard/doctor"
                    className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition text-center"
                >
                    Doctor
                </Link>

                <Link
                    href="/dashboard/employer"
                    className="px-6 py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition text-center"
                >
                    Employer
                </Link>

                <Link
                    href="/dashboard/gov"
                    className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition text-center"
                >
                    Admin
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
