import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const userRef = useRef();

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
      <div className="form-container">
        <div className="greeting">
          <h1>Welcome! Please login!</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username:</label>
          <input
            className="input-group"
            type="text"
            placeholder="username"
            id="username"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            // value={user}
            required
          ></input>

          <label htmlFor="password">password:</label>
          <input
            className="input-group"
            type="password"
            placeholder="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            // value={password}
            required
          />

          <button type="submit" className="btn-login">
            <Link to="/search">login</Link>
          </button>
        </form>
        <p className="register-here">
          no account?
          <Link to="/register">Register Here</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
