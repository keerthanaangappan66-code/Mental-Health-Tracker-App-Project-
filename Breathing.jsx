import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Breathing.css";

function Breathing() {

  const [message, setMessage] = useState("Press Start");
  const [circleClass, setCircleClass] = useState("");

  const [streak, setStreak] = useState(
    Number(localStorage.getItem("breathingStreak")) || 0
  );

  function startBreathing() {

    setCircleClass("breathe-in");
    setMessage("🌬 Inhale... 4 sec");

    setTimeout(() => {

      setCircleClass("hold");
      setMessage("😌 Hold... 7 sec");

    }, 4000);

    setTimeout(() => {

      setCircleClass("breathe-out");
      setMessage("💨 Exhale... 8 sec");

    }, 11000);

    setTimeout(() => {

      const newStreak = streak + 1;

      setStreak(newStreak);

      localStorage.setItem(
        "breathingStreak",
        newStreak
      );

      setCircleClass("");

      setMessage("✅ Session Completed");

    }, 19000);

  }

  return (

    <div className="breathing-page">

      <div className="breathing-card">

        <h1>🧘 Breathing Exercise</h1>

        <p className="subtitle">

          Relax your mind with 4-7-8 breathing.

        </p>

        <h3>

          🔥 Streak : {streak}

        </h3>

        <div className={`circle ${circleClass}`}>

          🌸

        </div>

        <h2>{message}</h2>

        <button
          className="start-btn"
          onClick={startBreathing}
        >

          ▶ Start Breathing

        </button>

        <br /><br />

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

export default Breathing;