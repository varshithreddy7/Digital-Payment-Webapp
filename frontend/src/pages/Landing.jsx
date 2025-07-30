import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div className="landing-container bg-gray-100 flex flex-col items-center justify-center min-h-screen">
            <header className="landing-header text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to PayTM</h1>
                <p className="text-lg text-gray-700">The most secure and seamless payment experience.</p>
            </header>

            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="feature-card bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Transfers</h3>
                    <p className="text-gray-600">Send and receive money in a flash.</p>
                </div>
                <div className="feature-card bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Transactions</h3>
                    <p className="text-gray-600">Your payments are always safe with us.</p>
                </div>
                <div className="feature-card bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">We are here to help you anytime, anywhere.</p>
                </div>
            </div>

            <div className="cta-buttons flex space-x-4">
                <Link to="/signup" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Get Started
                </Link>
                <Link to="/signin" className="bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition-transform transform hover:scale-105">
                    Sign In
                </Link>
            </div>
        </div>
    );
};
