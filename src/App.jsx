import "./assets/styles/App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ParticlesBG from "particles-bg";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import SearchDetails from "./components/SearchDetails/SearchDetails";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <main>
      <div className="App">
        <ParticlesBG color="#6e6d6d" num={200} type="cobweb" bg={true} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/search"
            element={
              <Search
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          ></Route>
          <Route
            path="/search/:id"
            element={
              <SearchDetails
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
