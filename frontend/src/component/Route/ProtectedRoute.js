import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, loading, children, isAdmin }) => {
  // console.log("isAuthenticated", isAuthenticated, "loading", loading, "isAdmin",isAdmin, );
  const { user } = useSelector((state) => state.user);
  if (loading === false && isAuthenticated === false) {
    return <Navigate to="/login" />;
  } else if (
    isAdmin === true &&
    user &&
    user.role !== "admin" &&
    isAuthenticated === true
  ) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
