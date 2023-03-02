// *****************
// THANK YOU TYLUS!!
// *****************
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, NASA_ASSET_URL } from "../../globals";
import "../../components/Search/Search.css";
import "../../context/SearchResultsContext";
import SearchDetails from "../SearchDetails/SearchDetails";

const Search = ({ searchResults, setSearchResults, nasaID, setNasaID }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(BASE_URL, {
          params: {
            q: searchQuery,
          },
        })
        .then((response) => {
          setSearchResults(response.data.collection.items);
        });
    };
    getData();
  }, [searchQuery, setSearchResults]);

  // MAKE CALL FOR https://images-api.nasa.gov/asset/{NASA_ID}
  useEffect(() => {
    const getAssets = async () => {
      await axios
        .get(NASA_ASSET_URL, {
          params: "",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.request);
          console.log(error.config);
        });
    };
    getAssets();
  }, []);

  let navigate = useNavigate();
  const showDetails = (index) => {
    navigate(`${index}`);
  };

  return (
    <section>
      <div className="search-container">
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
            <div
              key={index}
              className="card"
              onClick={() => showDetails(index)}
            >
              {result.links ? (
                <img src={result.links[0].href} alt="nasa" />
              ) : null}
            </div>
          ))}
        </div>
        <SearchDetails searchResults={searchResults} />
      </div>
    </section>
  );
};

export default Search;
