import { Link } from "react-router-dom";
import "../styles/JournalHistory.css";

function JournalHistory() {

  let journals = [];

  for (let i = 0; i < localStorage.length; i++) {

    let key = localStorage.key(i);

    if (key.startsWith("journal_")) {

      journals.push({

        date: key.replace("journal_", ""),

        text: localStorage.getItem(key)

      });

    }

  }

  journals.reverse();

  return (

    <div className="history-page">

      <div className="history-card">

        <h1>📚 Journal History</h1>

        <p className="subtitle">

          Your Daily Journal Records

        </p>

        {

          journals.length === 0 ?

          (

            <h3 className="empty">

              No Journals Found 💜

            </h3>

          )

          :

          journals.map((item,index)=>(

            <div
              className="journal-box"
              key={index}
            >

              <h3>📅 {item.date}</h3>

              <p>{item.text}</p>

            </div>

          ))

        }

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

export default JournalHistory;