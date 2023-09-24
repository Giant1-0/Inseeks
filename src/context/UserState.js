import userContext from "./userContext";
import { useState, useEffect } from "react";

const UserState = (props) => {
    const userInitial = []
    const [user,setUser] = useState(userInitial);
    const host = "http://localhost:5000/api";

    // const state = {
    //     "name":"Kamallochan Boruah",
    //     "class" : "1A"
    // }

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchData = async () => {
            const response = await fetch(`${host}/getuser`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify(), 
            });
    
            const json = await response.json();
            setUser(json);
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []);

    return (
        <userContext.Provider value={{ user }}>
            {props.children}
        </userContext.Provider>
    );
}

export default UserState;