import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function Protected({ children }) {

    const authenicated = useSelector(state => state.auth);
    const { isAuthenticated, token, loading } = authenicated;

    const isSignedIn = isAuthenticated && token !== null && !loading ? true : false

    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }
    return children
}
export default Protected