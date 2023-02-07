import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAutorization } from "./../auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const PublicRoute = (props: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserToken = async () => {
      const userToken = localStorage.getItem("user-token");
      if (userToken && !(userToken === "undefined")) {
        const tokenValidation = await getAutorization(userToken)
        if(tokenValidation){
          setIsLoggedIn(true);
          return navigate("/landing");
        }
      }
      setIsLoggedIn(false);
    };

    checkUserToken();
  }, [isLoggedIn, navigate]);
  return <React.Fragment>{!isLoggedIn ? props.children : null}</React.Fragment>;
};
export default PublicRoute;
