import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (!isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};
