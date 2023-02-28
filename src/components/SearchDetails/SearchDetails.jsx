import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResultsContext } from "../../context/SearchResultsContext";

const SearchDetails = () => {
  const searchResults = useContext(SearchResultsContext);
  console.log(`SearchDetailsRoute: ${searchResults}`);

  const [details, setDetails] = useState("");

  let { id } = useParams();

  useEffect(() => {
    let selectedDetail = searchResults[id];
    console.log(`useEffect searchResults: ${selectedDetail}`);
    setDetails(selectedDetail);
  }, []);

  return details ? (
    <div className="grid">
      {/* {props.searchResults.map((result, index) => ( */}
      <div className="card">
        {/* <h3>
            <a href={result.href} target="_blank" rel="noreferrer">
              CLICK: JSON FILE COLLECTION
            </a>
          </h3> */}
        <h3>Center: {details[0].center}</h3>
        {/* <h3>Date Created: {result.data[0].date_created}</h3>
          <h3>Description: {result.data[0].description}</h3>
          <h3>Description_508: {result.data[0].description_508}</h3>
          <h3>Keywords: {result.data[0].keywords}</h3>
          <h3>Media Type: {result.data[0].media_type}</h3>
          <h3>NASA ID: {result.data[0].nasa_id}</h3>
          <h3>Secondary Creator: {result.data[0].secondary_creator}</h3>
          <h3>Title: {result.data[0].title}</h3>
          <h3>Location: {result.data[0].location}</h3> */}
        {/* {details.links ? <img src={details.links[0].href} alt="nasa" /> : null} */}
      </div>
      {/* ))} */}
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};
export default SearchDetails;
