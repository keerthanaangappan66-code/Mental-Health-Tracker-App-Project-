import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import rabbit from "../assets/rabbit.png";
import panda from "../assets/panda.png";

import "../styles/Pets.css";

function Pets() {

  const navigate = useNavigate();

  const [petName, setPetName] = useState("");

  function selectPet(type) {

    if (petName.trim() === "") {
      alert("Please enter your pet name!");
      return;
    }

    localStorage.setItem("petName", petName);
    localStorage.setItem("petType", type);

    alert("Pet Selected Successfully 💜");

    navigate("/home");
  }

  return (

    <div className="pets-page">

      <div className="pets-card">

        <h1>🐾 Choose Your Buddy</h1>

        <p>Name your virtual pet</p>

        <input
          type="text"
          className="pet-input"
          placeholder="Enter Pet Name"
          value={petName}
          onChange={(e)=>setPetName(e.target.value)}
        />

        <div className="pet-grid">

          <div
            className="pet-box"
            onClick={()=>selectPet("dog")}
          >
            <img src={dog} alt="" />
            <h3>Dog</h3>
          </div>

          <div
            className="pet-box"
            onClick={()=>selectPet("cat")}
          >
            <img src={cat} alt="" />
            <h3>Cat</h3>
          </div>

          <div
            className="pet-box"
            onClick={()=>selectPet("rabbit")}
          >
            <img src={rabbit} alt="" />
            <h3>Rabbit</h3>
          </div>

          <div
            className="pet-box"
            onClick={()=>selectPet("panda")}
          >
            <img src={panda} alt="" />
            <h3>Panda</h3>
          </div>

        </div>

        <Link
          to="/home"
          className="back-btn"
        >
          ⬅ Back to Home
        </Link>

      </div>

    </div>

  );

}

export default Pets;