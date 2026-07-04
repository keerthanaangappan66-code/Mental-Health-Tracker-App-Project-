import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === "" || password === "") {
      alert("Please fill all fields!");
      return;
    }

    if (email !== savedEmail) {
      alert("Invalid Email!");
      return;
    }

    if (password !== savedPassword) {
      alert("Incorrect Password!");
      return;
    }

    alert("Login Successful 💜");

    navigate("/home");
  }

  return (
    <div className="container mt-5">

      <div
        className="card p-4 shadow mx-auto"
        style={{ maxWidth: "400px" }}
      >

        <h2 className="text-center text-primary">
          🌸 MindBuddy
        </h2>

        <p className="text-center">
          Login to your account
        </p>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/create-account">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;