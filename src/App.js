import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import User from "./User";
// import ImageUpload from "./ImageUpload";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        {/* <Route exact path="/image" element={<ImageUpload />}/> */}
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/users" element={<User />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
