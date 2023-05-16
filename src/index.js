// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import './styles.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // eslint-disable-next-line no-undef
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
