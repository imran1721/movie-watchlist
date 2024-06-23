import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthProvider = ({ element, userInfo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = () => {
      if (!userInfo) navigate("/login");
      else if (userInfo && window.location.pathname === "/login") navigate("/");
    }

    handleRedirect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return element;
};
