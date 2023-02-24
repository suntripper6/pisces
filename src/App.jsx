import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./globals";
import Login from "./components/Login/Login";
import Particles from "react-tsparticles";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = "search?q=";
  const searchItem = "moon";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BASE_URL}/${search}${searchItem}`);
      console.log(response.data.collection.items[0].links[0].href);
      setSearchResults(response.data.collection.items);
    };
    getData();
  }, []);

  return (
    <div>
      <Home searchResults={searchResults} />
    </div>
  );
}

export default App;
