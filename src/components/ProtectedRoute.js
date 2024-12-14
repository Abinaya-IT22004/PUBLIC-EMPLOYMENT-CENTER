import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;