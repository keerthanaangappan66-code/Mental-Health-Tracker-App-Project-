import { Link } from "react-router-dom";
function MoodHistory() {

  let moods = [];

  for (let i = 0; i < localStorage.length; i++) {

    let key = localStorage.key(i);

    if (key.startsWith("mood_")) {

      moods.push({
        date: key.replace("mood_", ""),
        mood: localStorage.getItem(key)
      });

    }

  }

  moods.reverse();

  return (

    <div className="container mt-5">

      <h1 className="text-center text-primary">
        😊 Mood History
      </h1>

      {moods.length === 0 ? (

        <div className="alert alert-warning mt-4">
          No Mood History Found
        </div>

      ) : (

        moods.map((item, index) => (

          <div
            className="card shadow mt-3 p-3"
            key={index}
          >

            <h5>{item.date}</h5>

            <h3>{item.mood}</h3>

          </div>

        ))

      )}
      <div className="text-center mt-4">

        <Link to="/home" className="btn btn-primary" >
         🏠 Back to Home
        </Link>

       </div>

    </div>

  );

}

export default MoodHistory;