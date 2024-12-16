import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
