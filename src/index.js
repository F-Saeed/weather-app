import 'normalize.css';
import './sass/style.scss';
import { addWeather } from './modules/dom';

const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', addWeather(searchForm));
