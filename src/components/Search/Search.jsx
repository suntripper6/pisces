import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../globals";
import SearchDetails from "../SearchDetails/SearchDetails";

//#region OLD CODE for reference
// const Search = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   // const [searchItem, setSearchItem] = useState("");
//   const [embeddedLink, setEmbeddedLink] = useState([]);
//   const [searchItem, setSearchItem] = useState("");

//   const search = "search?q=";
//   // const searchItem = "moon";

//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get(`${BASE_URL}/${search}${searchItem}`);
//       setSearchResults(response.data.collection.items);
//     };
//     getData();
//   }, []);

//   useEffect(() => {
//     // filter then map?
//     searchResults.map((result, index) => embeddedLink.push(result.href));
//   }, [searchResults, embeddedLink]);

//   // console.log(embeddedLink);

//   if (!searchResults) {
//     return (
//       <div className="grid">
//         {searchResults.map((result, index) => (
//           <div key={index} className="card">
//             {/* <h3>{result.data[0].center}</h3>
//                 <h3>{result.data[0].date_created}</h3>
//                 <h3>{result.data[0].description}</h3>
//                 <h3>{result.data[0].description_508}</h3>
//                 <h3>{result.data[0].keywords}</h3>
//                 <h3>{result.data[0].media_type}</h3>
//                 <h3>{result.data[0].nasa_id}</h3>
//                 <h3>{result.data[0].secondary_creator}</h3>
//                 <h3>{result.data[0].title}</h3>
//                 <h3>{result.data[0].location}</h3> */}

//             {result.links ? (
//               <img src={result.links[0].href} alt="nasa" />
//             ) : null}
//           </div>
//         ))}
//       </div>
//     );
//   } else {
//     return (
//       <div className="center ma">
//         <div className="absolute mt2">
//           <input
//             id="inputSearch"
//             type="text"
//             width="500px"
//             height="auto"
//             onChange={(e) => setSearchItem(e.target.value)}
//             value={searchItem}
//           />
//         </div>
//       </div>
//     );
//   }
// };
// export default Search;
//#endregion OLD CODE for reference

const Search = (props) => {
  let navigate = useNavigate();
  const showDetails = (index) => {
    navigate(`${index}`);
  };

  return (
    <div className="container">
      <div className="search-container">
        <span className="search-only">Search NASA </span>
        <label htmlFor="search-bar">
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            className="search"
            onChange={props.handleSearchChange}
          />
        </label>
      </div>
      <div className="grid">
        {props.searchResults.map((result, index) => (
          <div key={index} className="card" onClick={() => showDetails(index)}>
            {result.links ? (
              <img src={result.links[0].href} alt="nasa" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
