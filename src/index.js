import './styles.css';
import showLeaderBoardItems from './modules/postToApi.js';
import getUsersAndScores from './modules/getFromAPI.js';

const form = document.querySelector('.form');
const refreshButton = document.querySelector('.refresh');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.name.value;
  const score = form.score.value;
  showLeaderBoardItems(name, score);
});

refreshButton.addEventListener('click', () => {
  getUsersAndScores().then((data) => {
    const names = document.querySelector('.names');
    const scores = document.querySelector('.scores');
    scores.innerHTML = '';
    names.innerHTML = '';
    data.result.forEach((user) => {
      const createdUsers = document.createElement('li');
      const createdScores = document.createElement('li');
      createdUsers.textContent = `${user.user}`;
      createdScores.textContent = `${user.score}`;
      names.appendChild(createdUsers);
      scores.appendChild(createdScores);
    });
  });
});
