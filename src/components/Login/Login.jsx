const Login = (props) => {
  return (
    <div className="card">
      <h2>Please login</h2>
      <form onSubmit={props.submit}>
        <label>username:</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={props.change}
          value={props.username}
        ></input>

        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={props.change}
          value={props.password}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={props.change}
          value={props.passwordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <button type="submit">Sign Up</button>
        <p>Passwords must match</p>
      </form>
      <p>{props.message}</p>
    </div>
  );
};

export default Login;
