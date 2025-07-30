import { useNavigate } from "react-router-dom";

export const Appbar = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return <div className="shadow h-14 flex justify-between">
        <div className="h-full flex flex-col justify-center ml-4">
            <h1 className="text-lg font-semibold text-blue-600">PayTM App</h1>
        </div>
        <div className="flex items-center">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello, {user ? user.firstName : 'User'}
            </div>
            <div className="rounded-full h-12 w-12 bg-blue-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-white font-bold">
                    {user ? user.firstName[0].toUpperCase() : 'U'}
                </div>
            </div>
            <button 
                onClick={handleLogout}
                className="mr-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
                Logout
            </button>
        </div>
    </div>
}
