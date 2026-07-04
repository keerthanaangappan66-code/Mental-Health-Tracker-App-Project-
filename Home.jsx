import { Link } from "react-router-dom";
import "../styles/Home.css";

import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import rabbit from "../assets/rabbit.png";
import panda from "../assets/panda.png";

function Home() {

  const name = localStorage.getItem("userName");

  const today = new Date().toLocaleDateString("en-US",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  });

  const todayMood = localStorage.getItem(
    "mood_" + new Date().toLocaleDateString()
  );

  const petName = localStorage.getItem("petName");
  const petType = localStorage.getItem("petType");

  let petImage="";

  if(petType==="dog"){
    petImage=dog;
  }
  else if(petType==="cat"){
    petImage=cat;
  }
  else if(petType==="rabbit"){
    petImage=rabbit;
  }
  else if(petType==="panda"){
    petImage=panda;
  }

  return (

    <div className="home-container">

      <div className="dashboard">

        <h1 className="title">
          💜 MindBuddy 💜
        </h1>

        <p className="subtitle">
          Your Personal Mental Health Companion
        </p>

        <h3 className="welcome">
          👋 Welcome, {name}
        </h3>

        <p className="date">{today}</p>

        <div className="card-container">

          <Link to="/mood" className="feature-card">
            <div className="icon">😊</div>
            <h4>Mood Tracker</h4>
          </Link>

          <Link to="/diary" className="feature-card">
            <div className="icon">📖</div>
            <h4>Diary</h4>
          </Link>

          <Link to="/journal-history" className="feature-card">
            <div className="icon">📚</div>
            <h4>Journal History</h4>
          </Link>

          <Link to="/breathing" className="feature-card">
            <div className="icon">🧘</div>
            <h4>Breathing</h4>
          </Link>

          <Link to="/pets" className="feature-card">
            <div className="icon">🐶</div>
            <h4>Virtual Pet</h4>
          </Link>

          <Link to="/therapy" className="feature-card">
            <div className="icon">🩺</div>
            <h4>Therapy</h4>
          </Link>

          <Link to="/profile" className="feature-card">
            <div className="icon">👤</div>
            <h4>Profile</h4>
          </Link>

        </div>

        <div className="quote-card">

          <h3>🐾 My Buddy</h3>

          {

          petType ?

          <>

          <img
          src={petImage}
          alt=""
          style={{
          width:"120px",
          height:"120px",
          objectFit:"contain"
          }}
          />

          <h2>{petName}</h2>

          </>

          :

          <h3>No Pet Selected</h3>

          }

        </div>

        <div className="quote-card">

          <h3>😊 Today's Mood</h3>

          <h2>

          {todayMood ? todayMood : "No Mood Selected"}

          </h2>

        </div>

        <div className="quote-card">

          <h3>🌸 Quote of the Day</h3>

          <p>

          "Your mental health is just as important as your physical health."

          </p>

        </div>

      </div>

    </div>

  );

}

export default Home;