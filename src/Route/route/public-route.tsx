import { Navigate } from "react-router-dom";
import { authClass } from "../../components/auth/services/auth.service";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const auth = authClass.getToken();
  return children;
};

export default PublicRoute;
