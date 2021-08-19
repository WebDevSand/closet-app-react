import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ProtectedRoute({ path, reqUser, children }) {
  const { user } = useContext(UserContext);
  if ((user && reqUser) || (!user && !reqUser)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Redirect to={reqUser ? "/login" : "/addGarm"} />;
  }
}

export default ProtectedRoute;
