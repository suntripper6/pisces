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
import SearchDetails from "./components/Search/SearchDetails";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  // // const [searchItem, setSearchItem] = useState("");
  // const [embeddedLink, setEmbeddedLink] = useState([]);

  // const search = "search?q=";
  // const searchItem = "moon";

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(`${BASE_URL}/${search}${searchItem}`);
  //     setSearchResults(response.data.collection.items);
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   // filter then map?
  //   searchResults.map((result, index) => embeddedLink.push(result.href));
  // }, [searchResults, embeddedLink]);

  // console.log(embeddedLink);

  const getData = async (searchItem) => {
    const response = await axios.get(`${BASE_URL}/search?q=${searchItem}`);
    setSearchResults(response.data.collection.items);
  };

  const handleSearchChange = async (e) => {
    await getData(e.target.value);
    setSearchResults({ ...searchResults, [e.target.value]: e.target.value });
  };

  return (
    <main>
      <div className="App">
        <ParticlesBG color="#000000" num={200} type="cobweb" bg={true} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/search"
            element={
              <Search
                searchResults={searchResults}
                handleSearchChange={handleSearchChange}
              />
            }
          ></Route>
          <Route
            path="/search/:id"
            element={<SearchDetails searchResults={searchResults} />}
          ></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
