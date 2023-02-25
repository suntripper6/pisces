import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./globals";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  // const [searchItem, setSearchItem] = useState("");

  const search = "search?q=";
  const searchItem = "moon";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BASE_URL}/${search}${searchItem}`);
      setSearchResults(response.data.collection.items);
    };
    getData();
  }, []);

  return (
    <main>
      <div className="App">
        <Login />
        <Home searchResults={searchResults} />
      </div>
    </main>
  );
}

export default App;
