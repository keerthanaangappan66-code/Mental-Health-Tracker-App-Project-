import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleCreateAccount() {

    if (
      fullName === "" ||
      email === "" ||
      dob === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userName", fullName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userDOB", dob);
    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully 💜");

    navigate("/login");
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{maxWidth:"450px"}}>

        <h2 className="text-center text-primary">
          🌸 MindBuddy
        </h2>

        <p className="text-center text-muted">
          Create Your Account
        </p>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-3"
          value={dob}
          onChange={(e)=>setDob(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default CreateAccount;