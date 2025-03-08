import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ Use useAuth to check authentication

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
