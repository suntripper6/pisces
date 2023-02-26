import Login from "../Login/Login";

const Home = (props) => {
  // if (props.searchResults) {
  //   return (
  //     <div className="grid">
  //       {props.searchResults.map((result, index) => (
  //         <div key={index} className="card">
  //           {/* <h3>{result.data[0].center}</h3>
  //           <h3>{result.data[0].date_created}</h3>
  //           <h3>{result.data[0].description}</h3>
  //           <h3>{result.data[0].description_508}</h3>
  //           <h3>{result.data[0].keywords}</h3>
  //           <h3>{result.data[0].media_type}</h3>
  //           <h3>{result.data[0].nasa_id}</h3>
  //           <h3>{result.data[0].secondary_creator}</h3>
  //           <h3>{result.data[0].title}</h3>
  //           <h3>{result.data[0].location}</h3> */}

  //           {result.links ? (
  //             <img src={result.links[0].href} alt="nasa" />
  //           ) : null}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // } else {
  //   return <h1>Loading....</h1>;
  // }

  return (
    <div>
      <h1>Welcome! Please login below</h1>
      <Login />
    </div>
  );
};

export default Home;
