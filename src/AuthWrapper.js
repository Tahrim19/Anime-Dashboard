import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './Firebase'; // Import your Firebase configuration

const AuthWrapper = ({ children }) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
        // If the user is not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If authenticated, render the children
    return children;
};

export default AuthWrapper;
