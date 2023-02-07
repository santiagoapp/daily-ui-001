import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Landing from "./screens/Landing";
import ProtectedRoute from "./navigation/ProtectedRoute";
import PublicRoute from "./navigation/PublicRoute";
import "./App.css";
import "./welcome.css";
import "./signup.css";
import "./signin.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route
            path="/sign-up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="/landing"
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
