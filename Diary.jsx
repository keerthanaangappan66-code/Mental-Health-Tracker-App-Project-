import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Diary.css";

function Diary() {

  const navigate = useNavigate();

  const [journal, setJournal] = useState("");

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  function saveJournal() {

    if (journal.trim() === "") {
      alert("Please write something!");
      return;
    }

    const key = "journal_" + new Date().toLocaleDateString();

    localStorage.setItem(key, journal);

    alert("Journal Saved 💜");

    navigate("/home");
  }

  return (

    <div className="diary-page">

      <div className="diary-card">

        <h1>📖 Daily Journal</h1>

        <p className="diary-date">
          {today}
        </p>

        <textarea
          placeholder="Write your thoughts here..."
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
        ></textarea>

        <button
          className="save-btn"
          onClick={saveJournal}
        >
          💾 Save Journal
        </button>

        <Link
          to="/journal-history"
          className="history-btn"
        >
          📚 Journal History
        </Link>

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

export default Diary;