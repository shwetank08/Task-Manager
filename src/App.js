import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { AuthContext } from "./Context/AuthContext";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Header from "./pages/Header";
import ProtectedRoute from "./util/ProtectedRoute";


initializeApp(firebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/u/signup" element={<Signup />} />
          <Route path="/u/signin" element={<Signin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/u/home" element={<Home />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
