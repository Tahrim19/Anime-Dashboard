import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase'; 
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function AuthWrapper({ children }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Loading state to handle initial check

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login'); // Redirect to login if the user is not authenticated
            } else {
                setLoading(false); // User is authenticated
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [navigate]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>; // Show loading message
    }

    return children; // Render the children components 
}

