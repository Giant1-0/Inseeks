import userContext from "./userContext";
import { useState, useEffect } from "react";

const UserState = (props) => {
    const userInitial = {}; // Initialize user as null
    const [user, setUser] = useState(userInitial);
    const [loading, setLoading] = useState(true); // Add loading state
    const host = "http://localhost:5000/api";

    const logout = () => {
        setUser({});
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${host}/getuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    },
                });

                if (response.ok) {
                    const json = await response.json();
                    setUser(json);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        if (localStorage.getItem('token')) {
            fetchData();
          } else {
            setLoading(false); // If no token is present, set loading to false
          } 
    }, []);

    return (
        <userContext.Provider value={{ user, logout, loading }}>
            {props.children}
        </userContext.Provider>
    );
}

export default UserState;
