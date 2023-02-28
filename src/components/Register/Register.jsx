import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../components/Register/Register.css";

// const USER_REGEXP = /^[A-z][A-z0-9-_]{5,30}$/;
// const PASSWORD_REGEXP =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%&]).{10,30}$/;

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);
  const [isUserFocus, setIsUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const [passwordMatch, setPasswordMatch] = useState("");
  const [isPwdMatch, setIsPwdMatch] = useState(false);
  const [isPasswordMatchFocus, setIsPasswordMatchFocus] = useState(false);

  const [isRegSuccess, setIsRegSuccess] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setIsValidUser(USER_REGEXP.test(user));
  // }, [user]);

  // useEffect(() => {
  //   setIsValidPassword(PASSWORD_REGEXP.test(password));
  //   setIsPwdMatch(password === passwordMatch);
  // }, [password, passwordMatch]);

  return (
    <section>
      <div className="form-container">
        <div className="greeting">
          <h1 className="greeting">Register</h1>
        </div>
        <form>
          <label htmlFor="username">username: </label>
          <input
            autoComplete="off"
            type="text"
            id="username"
            className="input-username"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            onFocus={() => setIsUserFocus(true)}
            onBlur={() => setIsUserFocus(false)}
            required
            value={user}
            placeholder="username"
          />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            className="input-password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsPasswordFocus(true)}
            onBlur={() => setIsPasswordFocus(false)}
            required
            value={password}
            placeholder="password"
          />
          <label htmlFor="confirm-password">confirm password: </label>
          <input
            type="password"
            id="confirm-password"
            className="input-confirm-password"
            onChange={(e) => setPasswordMatch(e.target.value)}
            onFocus={() => setIsPasswordMatchFocus(true)}
            onBlur={() => setIsPasswordMatchFocus(false)}
            required
            value={passwordMatch}
            placeholder="confirm password"
          />
          <button className="btn-submit">
            <Link to="/search">Submit</Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
