import "./assets/styles/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./globals";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import SearchDetails from "./components/Search/SearchDetails";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  // const [searchItem, setSearchItem] = useState("");
  const [embeddedLink, setEmbeddedLink] = useState([]);

  const search = "search?q=";
  const searchItem = "moon";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BASE_URL}/${search}${searchItem}`);
      setSearchResults(response.data.collection.items);
    };
    getData();
  }, []);

  useEffect(() => {
    searchResults.map((result, index) => embeddedLink.push(result.href));
  }, [searchResults, embeddedLink]);

  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/search"
            element={<Search searchResults={searchResults} />}
          ></Route>
          <Route
            path="/details"
            element={
              <SearchDetails
                embeddedLink={embeddedLink}
                searchResults={searchResults}
              />
            }
          ></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
