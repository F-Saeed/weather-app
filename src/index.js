import 'normalize.css';
import './sass/style.scss';
import { addWeather, createCard } from './modules/dom';

createCard('Moscow');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', addWeather);
