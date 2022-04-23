import { Navigate } from "react-router-dom";

import React from "react";
export const ProtectedRouterLogin = ({user, children }) => {

  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export const ProtectedRouter = ({user, children }) => {
    
      if (!user) {
     return <Navigate to="/login" />;
      }
      return children;
    }