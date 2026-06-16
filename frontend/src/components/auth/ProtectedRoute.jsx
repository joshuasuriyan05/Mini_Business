import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    // 1. Not logged in → go login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 2. Valid user → allow access
    return children;
}

export default ProtectedRoute;