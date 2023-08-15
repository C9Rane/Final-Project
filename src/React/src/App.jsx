import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [skill, setSkill] = useState('');
  const [hiscoreData, setHiscoreData] = useState(null);

  const fetchHiscores = (event) => {
    console.log("something");
    event.preventDefault();
    fetch(`http://localhost:5000/hiscores/${skill}`)
      .then(response => response.json())
      .then(fetchedData => {
        setHiscoreData(fetchedData);       
        console.log(fetchedData)
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter Skill"
          value={skill}
          onChange={e => setSkill(e.target.value)}
        />
        <button type="button" onClick={fetchHiscores}>Fetch HiScores</button>
      </form>
  
      {/* Display the skills table */}
      {hiscoreData && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>Level</th>
              <th>XP</th>
              <th>Is Dead?</th>
            </tr>
          </thead>
          <tbody className="skill-table">
            {hiscoreData.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.rank}</td>
                <td>{player.level}</td>
                <td>{player.xp}</td>
                <td>{player.dead ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
}