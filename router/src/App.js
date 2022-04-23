import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { ProtectedRouterLogin, ProtectedRouter } from "./ProtectedRouter";
import { UserContext } from "./Context/UserContext";
function App() {
  const { user } = React.useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouter user={user}>
            <Home />
          </ProtectedRouter>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRouterLogin user={user}>
            <Login />
          </ProtectedRouterLogin>
        }
      />
    </Routes>
  );
}

export default App;
