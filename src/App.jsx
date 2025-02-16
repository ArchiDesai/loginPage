import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import JoinWithUs from "./components/JoinWithUs";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<SignUpPage />}></Route>
      </Routes>
      {/* <Welcome /> */}
      {/* <SignUp /> */}
      {/* <JoinWithUs /> */}
    </div>
  );
};

export default App;
