const getUsersAndScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vpJBjV7mGxCF2BqcSpOO/scores/';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getUsersAndScores;