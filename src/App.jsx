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
  const [nasaID, setNasaID] = useState([]);
  const [nasaMedia, setNasaMedia] = useState([]);

  return (
    <main>
      <div className="App">
        <ParticlesBG
          color="#254FB2"
          num={2000}
          type="cobweb"
          bg={{
            position: "absolute",
            zIndex: -1,
            width: "auto",
            height: "500%",
            top: 0,
            left: 0,
          }}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/search"
            element={
              <Search
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                nasaID={nasaID}
                setNasaID={setNasaID}
                nasaMedia={nasaMedia}
                setNasaMedia={setNasaMedia}
              />
            }
          ></Route>
          <Route
            path="/search/:id"
            element={
              <SearchDetails
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                nasaID={nasaID}
                setNasaID={setNasaID}
                nasaMedia={nasaMedia}
                setNasaMedia={setNasaMedia}
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
