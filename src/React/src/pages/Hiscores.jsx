import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Hiscores.css';
import { fetchScores } from "../API/api.js"

export default function Hiscores(){
  const [skill, setSkill] = useState('');
  const [hiscoreData, setHiscoreData] = useState(null);
  const navigation = useNavigate();
  const skills = [
    'overall',
    'attack',
    'defence',
    'strength',
    'hitpoints',
    'ranged',
    'prayer',
    'magic',
    'cooking',
    'woodcutting',
    'fletching',
    'fishing',
    'firemaking',
    'crafting',
    'smithing',
    'mining',
    'herblore',
    'agility',
    'thieving',
    'slayer',
    'farming',
    'runecraft',
    'hunter',
    'construction'
  ];
  const fetchHiscores = async (skill) => {
    const fetchedData = await fetchScores(skill);
    setHiscoreData(fetchedData);
  };

  useEffect (() => {
    fetchHiscores("overall");
  }, [])

  return (
    <div className="App">
      <div className="flex-container">
        <div className="left-column">
          <ul className = "ulSkills">
            {skills.map(skillName => (
              <li key={skillName}>
                <button className = "button" onClick={() => fetchHiscores(skillName)}>
                  {skillName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Display the skills table */}
        <div className="middle-column">
          {hiscoreData && (
            <table className ="rankingTable" border="5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rank</th>
                  <th>Level</th>
                  <th>XP</th>
                  <th>Is Dead?</th>
                </tr>
              </thead>
              <tbody>
                {hiscoreData.map((player, index) => (
                  <tr key={index} 
                  onClick={() => navigation(`/player/${player.name}`)}>
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
        <div className="right-column">
          {/* Empty space for now */}
          <table className = "info">
            <thead>
              <h3>Info</h3>
              <p></p>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}



