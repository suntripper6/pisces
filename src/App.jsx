import "./assets/styles/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./globals";
// import Login from "./components/Login/Login";
import ParticlesBG from "particles-bg";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import SearchDetails from "./components/SearchDetails/SearchDetails";

function App() {
  return (
    <main>
      <div className="App">
        <ParticlesBG color="#6e6d6d" num={200} type="cobweb" bg={true} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:id" element={<SearchDetails />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
