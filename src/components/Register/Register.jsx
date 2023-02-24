import { useState } from "react";

const Register = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSignedIn, setSignedIn] = useState(false);

  const onNameChange = (e) => {
    e.preventDefault();
    setName({ ...name, [e.target.id]: e.target.value });
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail({ ...email, [e.target.id]: e.target.value });
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword({ ...password, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "" || email === "") {
      setMessage("All form fields must be filled in");
    } else {
      setSignedIn(true);
      setMessage("Success!");
    }
  };

  return isSignedIn === false ? (
    <div className="form">
      <h2>Please Sign In</h2>
      <div>
        <form></form>
        <div className="username">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={onNameChange}
          ></input>
        </div>
        <div className="email">
          <label htmlFor="email-address">Email</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            onChange={onEmailChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={onPasswordChange}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  ) : (
    <h1>{message}</h1>
  );
};

export default Register;
