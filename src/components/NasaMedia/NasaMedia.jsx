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

const NasaMedia = ({
  searchResults,
  setSearchResults,
  nasaID,
  setNasaID,
  nasaMedia,
  setNasaMedia,
  mediaType,
  setMediaType,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [nasaVideo, setNasaVideo] = useState([]);
  let nasaVideos = new Set();
  // MAKE CALL FOR "https://images-api.nasa.gov/search/{parameter}";
  const getMedia = (e) => {
    e.preventDefault();
    axios
      .get(BASE_URL, {
        params: {
          q: searchQuery,
          media_type: mediaType,
        },
        withCredentials: false,
      })
      .then((response) => {
        setSearchResults(response.data.collection.items);
      })
      .catch((error) => {
        // console.log(error.response);
        // console.log(error.request);
        // console.log(error.config);
      });

    // searchResults.map((result) => {
    //   return setNasaID(result.data[0].nasa_id);
    // });
  };

  // // MAKE CALL FOR "https://images-api.nasa.gov/asset/{NASA_ID}""
  // useEffect(() => {
  //   const getAssets = async () => {
  //     await axios
  //       .get(`${NASA_ASSET_URL}${nasaID}`)
  //       .then((response) => {
  //         setNasaMedia(response.data.collection.items);
  //       })
  //       .catch((error) => {
  //         console.log(error.response);
  //         console.log(error.request);
  //         console.log(error.config);
  //       });
  //   };
  //   getAssets();
  // }, [nasaID]);

  // console.log(searchResults);
  if (mediaType === "video") {
    for (let i = 0; i < searchResults.length; i++) {
      // console.log(searchResults[i].data[0].nasa_id);
      axios
        .get(`${NASA_ASSET_URL}${searchResults[i].data[0].nasa_id}`)
        .then((response) => {
          nasaVideos(response.data.collection.items[0].href);
        });
    }
  }
  console.log(nasaVideos);

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
        <form onSubmit={getMedia}>
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

          <div className="select-mediatype">
            <label htmlFor="mediatype">
              <select
                style={{ textAlign: "center" }}
                name="mediatype"
                id="mediatype"
                // className="select-mediatype"
                value={mediaType}
                onChange={(e) => setMediaType(e.target.value)}
              >
                <optgroup>
                  <option value="image">images</option>
                  <option value="video">video</option>
                </optgroup>
              </select>
            </label>
          </div>
        </form>
        <div className="grid">
          {searchResults.map((media, index) => (
            <div
              key={index}
              className="card"
              onClick={() => showDetails(index)}
            >
              {media.links ? (
                <img src={media.links[0].href} alt={media.links[0].title} />
              ) : (
                <video src={media.links[0].href} controls />
              )}
            </div>
          ))}
          {/* {nasaVideo.map((nv, index) => {
            console.log(nv);
          })} */}
        </div>
        <SearchDetails searchResults={searchResults} />
      </div>
    </section>
  );
};

export default NasaMedia;
