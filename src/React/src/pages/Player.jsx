import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Hiscores.css';
import { fetchRsn } from '../API/api';

export default function Player() {
  const { rsn } = useParams();
  const [ playerStats, setPlayerStats ] = useState({});

  const fetchPlayerStats = async (rsn) => {
    const fetchedStats = await fetchRsn(rsn);
    setPlayerStats(fetchedStats);
  };

  useEffect(() => {
    fetchPlayerStats(rsn);
  }, [rsn]);

  return (
    <div className="skill-table">
      <h2 className = "playername">{rsn} Hiscores</h2>
      {playerStats.main && (
        <table className = "middle-column rankingTable" border="1">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Rank</th>
              <th>Level</th>
              <th>XP</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(playerStats.main.skills).map(([skill, data], index) => (
              <tr key={index}>
                <td>{skill}</td>
                <td>{data.rank}</td>
                <td>{data.level}</td>
                <td>{data.xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}