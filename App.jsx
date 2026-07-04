import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Mood from "./pages/Mood";
import Diary from "./pages/Diary";
import Breathing from "./pages/Breathing";
import Pets from "./pages/Pets";
import Therapy from "./pages/Therapy";
import Profile from "./pages/Profile";
import MoodHistory from "./pages/MoodHistory";
import JournalHistory from "./pages/JournalHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/home" element={<Home />} />

         <Route path="/mood" element={<Mood />} />
         <Route path="/diary" element={<Diary />} />
         <Route path="/breathing" element={<Breathing />} />
         <Route path="/pets" element={<Pets />} />
         <Route path="/therapy" element={<Therapy />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/mood-history" element={<MoodHistory />} />
          <Route path="/journal-history" element={<JournalHistory />}/>
          <Route path="/pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;