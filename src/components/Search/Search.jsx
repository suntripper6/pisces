// *****************
// THANK YOU TYLUS!!
// *****************
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../globals";
import "../../components/Search/Search.css";
import "../../context/SearchResultsContext";
import SearchDetails from "../SearchDetails/SearchDetails";

const Search = ({ searchResults, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [NASAID, setNASAID] = useState([]);

  const search = "search?q=";
  const searchItem = "moon";

  useEffect(() => {
    const getData = async () => {
      if (searchQuery === "" || searchQuery === null) {
        const response = await axios.get(`${BASE_URL}/${search}${searchItem}`);
        setSearchResults(response.data.collection.items);
      } else {
        const response = await axios
          .get(`${BASE_URL}/${search}${searchQuery}`)
          .catch((error) => {
            if (error.response) {
              console.log(`Error response status: ${error.response.status}`);
            } else if (error.request) {
              console.log(`Error response request: ${error.response.request}`);
            } else {
              console.log(`Errors: ${error.message}`);
            }
          });
        setSearchResults(response.data.collection.items);
        console.log(searchResults[0].data[0].nasa_id);
        searchResults.map((assetID, index) => setNASAID(assetID));
        console.log(NASAID);
      }
    };
    getData();
  }, [searchQuery]);

  // MAKE CALL FOR https://images-api.nasa.gov/asset/{NASA_ID}
  // useEffect(() =>{
  //   const getAssets() = async () => {
  //     const assetResponse = await axios.get(`${BASE_URL}/asset/${searchResults.collection}`)
  //   }

  // })

  let navigate = useNavigate();
  const showDetails = (index) => {
    navigate(`${index}`);
  };

  return (
    <div className="form-container">
      <div className="greeting">
        <h1 className="search-only">Search NASA </h1>
      </div>
      <div>
        <label htmlFor="search-bar">
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            className="search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

      <div className="grid">
        {searchResults.map((result, index) => (
          <div key={index} className="card" onClick={() => showDetails(index)}>
            {result.links ? (
              <img src={result.links[0].href} alt="nasa" />
            ) : null}
          </div>
        ))}
      </div>
      <SearchDetails searchResults={searchResults} />
    </div>
  );
};

export default Search;
