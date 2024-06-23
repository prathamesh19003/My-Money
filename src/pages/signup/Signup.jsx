import { useState } from "react";
import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isPending } = useSignup();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <label>
          <span>Display Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        {!isPending && <button className="btn">Submit</button>}
        {isPending && (
          <button className="btn" disabled>
            Loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
