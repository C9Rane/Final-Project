import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Hiscores.css';

export default function Hiscores(){
  const { username } = useParams();
  const [playerData, setPlayerData] = useState({});
  const [loading, setLoading] = useState(false);
  // const response = await fetch(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=GIM_Rane`);
  // const data = await response.text();
  // const skills = data.split('\n');
  // const skillNames = ['Overall', 'Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged', 'Prayer', 'Magic', 'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing', 'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecraft', 'Hunter', 'Construction']; 
  // const playerStats = {};

  const fetchData = () => {
    setLoading(true);
    fetch(`https://secure.runescape.com/m=hiscore/ranking.json?table=9&category=0&size=2`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((scores) => {
        console.log(scores);
      
      })
      .catch((err) => console.error(err));
  };

  // const fetchData2 = async () => {
  //   setLoading(true);
  //   try {
  //     for (let i = 0; i < skillNames.length; i++) {
  //       const [rank, level, experience] = skills[i].split(',');
  //       playerStats[skillNames[i]] = { rank, level, experience };
  //     }
  //     setPlayerData(playerStats);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, [username]);

  return (
    <div className="hiscores">
      <h1>Old School RuneScape Hiscores</h1>
      <h2>{username}</h2>
      <div className="player-stats">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {Object.keys(playerData).map(skill => (
              <li key={skill}>
                <span>{skill}</span>
                <span>Rank: {playerData[skill].rank}</span>
                <span>Level: {playerData[skill].level}</span>
                <span>Experience: {playerData[skill].experience}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};



