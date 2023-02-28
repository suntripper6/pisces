import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResultsContext } from "../../context/SearchResultsContext";

const SearchDetails = ({ searchResults }) => {
  //console.log(props.searchResults);
  //const searchResults = useContext(SearchResultsContext);
  //console.log(`Before JSON: ${searchResults}`);
  //const jsonResults = JSON.stringify(searchResults);
  //console.log(`SearchDetailsRoute: ${jsonResults}`);

  const [details, setDetails] = useState("");

  let { id } = useParams();

  useEffect(() => {
    console.log("props");
    console.log(searchResults);
    let selectedDetail = searchResults[id];
    console.log(selectedDetail);
    setDetails(selectedDetail);
  }, []);

  return details ? (
    <div className="grid">
      <div className="card">
        <img src={details.links[0].href} alt="nasa" />
        <h3>Center: {details.data[0].center}</h3>
        <h3>Date Created: {details.data[0].date_created}</h3>
        <h3>Description: {details.data[0].description}</h3>
        <h3>Description_508: {details.data[0].description_508}</h3>
        <h3>Keywords: {details.data[0].keywords}</h3>
        <h3>Media Type: {details.data[0].media_type}</h3>
        <h3>NASA ID: {details.data[0].nasa_id}</h3>
        <h3>Secondary Creator: {details.data[0].secondary_creator}</h3>
        <h3>Title: {details.data[0].title}</h3>
        <h3>Location: {details.data[0].location}</h3>
      </div>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};
export default SearchDetails;
