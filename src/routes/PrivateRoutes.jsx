import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login" />;
};

export default PrivateRoutes;
