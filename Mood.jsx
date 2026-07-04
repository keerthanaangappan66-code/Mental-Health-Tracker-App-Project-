import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Mood() {

  const navigate = useNavigate();

  const today = new Date();

  const todayDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const todayKey = "mood_" + new Date().toLocaleDateString();

  const [selectedMood, setSelectedMood] = useState(
    localStorage.getItem(todayKey) || ""
  );

  function saveMood(mood) {

    localStorage.setItem(todayKey, mood);

    setSelectedMood(mood);

    alert("Mood Saved 💜");

    navigate("/home");

  }

  return (

    <div className="container mt-5">

      <div className="card shadow p-4 text-center">

        <h1 className="text-primary">
          😊 Mood Tracker
        </h1>

        <p>{todayDate}</p>

        <h4>How are you feeling today?</h4>

        <div className="mt-4">

          <button
            className="btn btn-warning m-2"
            onClick={() => saveMood("😄 Happy")}
          >
            😄
          </button>

          <button
            className="btn btn-success m-2"
            onClick={() => saveMood("🙂 Good")}
          >
            🙂
          </button>

          <button
            className="btn btn-secondary m-2"
            onClick={() => saveMood("😐 Okay")}
          >
            😐
          </button>

          <button
            className="btn btn-primary m-2"
            onClick={() => saveMood("😔 Sad")}
          >
            😔
          </button>

          <button
            className="btn btn-danger m-2"
            onClick={() => saveMood("😣 Stressed")}
          >
            😣
          </button>

        </div>

        {selectedMood && (

          <h3 className="mt-4">
            Today's Mood : {selectedMood}
          </h3>

        )}

      </div>

    </div>

  );

}

export default Mood;