export const fetchScores = async (skill) => {
    try {
      const response = await fetch(`http://localhost:5000/hiscores/${skill}`);
      const fetchedData = await response.json();
      return fetchedData;
    } catch (error) {
      console.error('Error:', error);
      return null; // Return null on error
    }
  };

export const fetchRsn = async (rsn) => {
    try {
      const response = await fetch(`http://localhost:5000/player/${rsn}`);
      const fetchedData = await response.json();
      return fetchedData;
    } catch (error) {
      console.error('Error:', error);
      return null; // Return null on error
    }
  };