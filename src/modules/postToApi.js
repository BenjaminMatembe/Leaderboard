const showLeaderBoardItems = async (user, score) => {
  const form = document.querySelector('.form');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vpJBjV7mGxCF2BqcSpOO/scores/';
  // eslint-disable-next-line no-unused-vars
  const postedData = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  form.name.value = '';
  form.score.value = '';
};

export default showLeaderBoardItems;