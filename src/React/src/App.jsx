import React, { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Hiscores, Player } from "./pages";
import "./index.css"


export default function App() {
  return(
    <div className = "appDiv">
      <BrowserRouter>
        <nav className = "navLink">
          <ul className = "navbar">
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/player">Player</NavLink></li>
          </ul>
        </nav>
        <SearchPlayer />
        <Routes>
          <Route path ="/" element={<Hiscores />} />
          <Route path="/player/:rsn" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function SearchPlayer() {
  const [rsn, setRsn] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rsn.trim()) { // Checks if input is not just white spaces.
      navigate(`/player/${rsn}`);
    }
  };

  return (
    <form className = "playersearch" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Player Name"
        value={rsn}
        onChange={e => setRsn(e.target.value)}
      />
      <button className = "searchBtn" type="submit">Fetch Player Stats</button>
    </form>
  );
}