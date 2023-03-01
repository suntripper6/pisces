import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../components/SearchDetails/SearchDetails.css";

const SearchDetails = ({ searchResults }) => {
  const [details, setDetails] = useState("");

  let { id } = useParams();

  useEffect(() => {
    let selectedDetail = searchResults[id];
    setDetails(selectedDetail);
  }, [id, searchResults]);

  return details ? (
    <div className="details-grid">
      <div className="details-card">
        <button className="btn-back">
          <Link to="/search">Back to Search</Link>
        </button>
        <div className="nasa-image">
          <img src={details.links[0].href} alt="nasa" />
        </div>
        <span>
          <span className="details">Center:</span> {details.data[0].center}
        </span>
        <span>
          <span className="details">Date Created:</span>{" "}
          {details.data[0].date_created}
        </span>
        <span>
          <span className="details">Description:</span>{" "}
          {details.data[0].description}
        </span>
        <span>
          <span className="details">Description_508:</span>{" "}
          {details.data[0].description_508}
        </span>
        <span>
          <span className="details">Keywords:</span> {details.data[0].keywords}
        </span>
        <span>
          <span className="details">Media Type:</span>{" "}
          {details.data[0].media_type}
        </span>
        <span>
          <span className="details">NASA ID:</span> {details.data[0].nasa_id}
        </span>
        <span>
          <span className="details">Secondary Creator:</span>{" "}
          {details.data[0].secondary_creator}
        </span>
        <span>
          <span className="details">Title:</span> {details.data[0].title}
        </span>
        <span>
          <span className="details">Location:</span> {details.data[0].location}
        </span>
      </div>
    </div>
  ) : (
    ""
  );
};
export default SearchDetails;
