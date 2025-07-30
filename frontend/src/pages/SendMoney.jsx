import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleTransfer = async () => {
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }
        
        setIsLoading(true);
        try {
            await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount: parseFloat(amount)
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            alert("Transfer successful!");
            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Transfer failed");
        } finally {
            setIsLoading(false);
        }
    };

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div className="border h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{name ? name[0].toUpperCase() : 'U'}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>
                    <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="amount">
                                Amount (in Rs)
                            </label>
                            <input
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                                value={amount}
                                type="number"
                                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="amount"
                                placeholder="Enter amount"
                                min="0"
                                step="0.01"
                            />
                        </div>
                        <button 
                            onClick={handleTransfer}
                            disabled={isLoading}
                            className={`justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full ${
                                isLoading 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-green-500 hover:bg-green-600'
                            } text-white`}
                        >
                            {isLoading ? 'Processing...' : 'Initiate Transfer'}
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard')}
                            className="justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
