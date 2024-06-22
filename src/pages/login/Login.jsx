import { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Login;
