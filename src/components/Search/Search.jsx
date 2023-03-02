// *****************
// THANK YOU TYLUS for the props drilling!
// *****************
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, NASA_ASSET_URL } from "../../globals";
import "../../components/Search/Search.css";
import "../../context/SearchResultsContext";
import SearchDetails from "../SearchDetails/SearchDetails";

const Search = ({
  searchResults,
  setSearchResults,
  nasaID,
  setNasaID,
  nasaMedia,
  setNasaMedia,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // MAKE CALL FOR "https://images-api.nasa.gov/search/{parameter}";
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(BASE_URL, {
          params: {
            q: searchQuery,
          },
          withCredentials: false,
        })
        .then((response) => {
          setSearchResults(response.data.collection.items);
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.request);
          console.log(error.config);
        });
    };
    getData();
    searchResults.map((result) => {
      return setNasaID(result.data[0].nasa_id);
    });
  }, [searchQuery]);

  // MAKE CALL FOR "https://images-api.nasa.gov/asset/{NASA_ID}""
  useEffect(() => {
    const getAssets = async () => {
      await axios
        .get(`${NASA_ASSET_URL}${nasaID}`)
        .then((response) => {
          setNasaMedia(response.data.collection.items);
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.request);
          console.log(error.config);
        });
    };
    getAssets();
  }, [nasaID]);

  console.log(nasaMedia);

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
