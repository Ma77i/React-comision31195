import React from "react";
import NavBar from "./components/Nav";
import SignIn from "./components/user/Login";
import SignUp from "./components/user/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";


const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/products" element={<ItemListContainer />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
