import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const ProtectedRoute = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const id = context.user?.uid ? context.user?.uid : null;

  useEffect(() => {
    if (!id) {
      console.log("user not signed in");
      navigate("/u/signin");
    }
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;