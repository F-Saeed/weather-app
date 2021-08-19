import 'normalize.css';
import './sass/style.scss';
import addWeather from './modules/dom';
import updateCard from './modules/functions';

/* default weather card for moscow */
updateCard('Moscow').then(() => {
  const searchForm = document.querySelector('form');
  searchForm.addEventListener('submit', addWeather);
});
