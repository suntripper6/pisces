import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const USER_REGEXP = /^[A-z][A-z0-9-_]{5,30}$/;
const PASSWORD_REGEXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%&]).{10,30}$/;

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

  useEffect(() => {
    setIsValidUser(USER_REGEXP.test(user));
  }, [user]);

  useEffect(() => {
    setIsValidPassword(PASSWORD_REGEXP.test(password));
    setIsPwdMatch(password === passwordMatch);
  }, [password, passwordMatch]);

  return (
    <section>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">username: </label>
        <input
          autoComplete="off"
          type="text"
          id="username"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setIsUserFocus(true)}
          onBlur={() => setIsUserFocus(false)}
          required
          value={user}
        />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocus(true)}
          onBlur={() => setIsPasswordFocus(false)}
          required
          value={password}
        />
        <label htmlFor="confirm-password">confirm password: </label>
        <input
          type="password"
          id="confirm-password"
          onChange={(e) => setPasswordMatch(e.target.value)}
          onFocus={() => setIsPasswordMatchFocus(true)}
          onBlur={() => setIsPasswordMatchFocus(false)}
          required
          value={passwordMatch}
        />
        <button>
          <Link to="/login">Submit</Link>
        </button>
      </form>
    </section>
  );
};

export default Register;
