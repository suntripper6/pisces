import { useContext, useEffect, useRef, useState } from "react";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
// import AuthCtx from "../../context/AuthenticationProvider";

const Login = () => {
  const userRef = useRef();
  //const errorRef = useRef();

  // const { setAuth } = useContext(AuthCtx);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setMessage("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPassword("");
    setIsLoggedIn(true);
  };

  return (
    <section>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          ></input>

          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button type="submit">
            <Link to="/search">login</Link>
          </button>
        </form>
        <p>
          no account?
          <br />
          <Link to="/register">Register Here</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
