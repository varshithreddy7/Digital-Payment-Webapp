import { useEffect, useState } from 'react';
import axios from 'axios';
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { Loading } from "../components/Loading"

export const Dashboard = () =>{
    const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setLoading(false);
                    return;
                }

                // Fetch user data
                const userResponse = await axios.get('http://localhost:3000/api/v1/user/me', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(userResponse.data.user);

                // Fetch balance
                const balanceResponse = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBalance(balanceResponse.data.balance);
            } catch (error) {
                console.error("Failed to fetch user data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <Loading />;
    }

  return <div>
    <Appbar user={user} />
    <div className="m-8">
      <Balance value={balance.toFixed(2)}/>
      <Users/>
    </div>
  </div>
}
