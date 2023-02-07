import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAutorization } from "./../auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserToken = async () => {
      const userToken = localStorage.getItem("user-token");
      if (!userToken || userToken === "undefined") {
        setIsLoggedIn(false);
        return navigate("/sign-in");
      }
      const tokenValidation = await getAutorization(userToken)
      setIsLoggedIn(tokenValidation.canAccess);
    };

    checkUserToken();
  }, [isLoggedIn, navigate]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
