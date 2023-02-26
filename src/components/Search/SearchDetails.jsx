import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchDetails = (props) => {
  console.log(props.embeddedLink);
  const [video, setVideo] = useState([]);
  const [JSONFile, setJSONFile] = useState();

  //   useEffect(() => {
  //     props.searchResults.map((result, index) => setJSONFile(result.href));
  //     const getVideo = async () => {
  //       const response = await axios.get(props.searchResults);
  //       console.log(response);
  //       setVideo(response);
  //     };
  //     getVideo();
  //   }, []);
  if (props.searchResults) {
    return (
      <div className="grid">
        {props.searchResults.map((result, index) => (
          <div key={index} className="card">
            <h3>
              <a href={result.href} target="_blank" rel="noreferrer">
                JSON FILE COLLECTION
              </a>
            </h3>
            <h3>Center: {result.data[0].center}</h3>
            <h3>Date Created: {result.data[0].date_created}</h3>
            <h3>Description: {result.data[0].description}</h3>
            <h3>Description_508: {result.data[0].description_508}</h3>
            <h3>Keywords: {result.data[0].keywords}</h3>
            <h3>Media Type: {result.data[0].media_type}</h3>
            <h3>NASA ID: {result.data[0].nasa_id}</h3>
            <h3>Secondary Creator: {result.data[0].secondary_creator}</h3>
            <h3>Title: {result.data[0].title}</h3>
            <h3>Location: {result.data[0].location}</h3>
            {result.links ? (
              <img src={result.links[0].href} alt="nasa" />
            ) : null}
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Loading....</h1>;
  }
};
export default SearchDetails;
