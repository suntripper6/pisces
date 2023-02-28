import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResultsContext } from "../../context/SearchResultsContext";

const SearchDetails = ({ searchResults }) => {
  const [details, setDetails] = useState("");

  let { id } = useParams();

  useEffect(() => {
    let selectedDetail = searchResults[id];
    setDetails(selectedDetail);
  }, []);

  return details ? (
    <div className="details-grid">
      <div className="details-card">
        <div className="nasa-image">
          <img src={details.links[0].href} alt="nasa" />
        </div>
        <span>Center: {details.data[0].center}</span>
        <span>Date Created: {details.data[0].date_created}</span>
        <span>Description: {details.data[0].description}</span>
        <span>Description_508: {details.data[0].description_508}</span>
        <span>Keywords: {details.data[0].keywords}</span>
        <span>Media Type: {details.data[0].media_type}</span>
        <span>NASA ID: {details.data[0].nasa_id}</span>
        <span>Secondary Creator: {details.data[0].secondary_creator}</span>
        <span>Title: {details.data[0].title}</span>
        <span>Location: {details.data[0].location}</span>
      </div>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};
export default SearchDetails;
