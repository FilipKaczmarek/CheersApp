import './style.css'
import currentList from './Components/Navigation/NavBar'
import aboutUsSection from './Components/AboutUs/AboutUs'
import app from './Components/MainContent/App'
import api from './API/api'

api()

const rootBox = document.getElementById('root');

// Creating background
const bgImage = document.createElement('img');
bgImage.className = 'background--image';
bgImage.src = './img/bg-beer.png'

rootBox.appendChild(bgImage);

// Creating Navbar
const navBox = document.createElement('div');
navBox.classList = 'navigation--bar';
navBox.appendChild(currentList);

rootBox.appendChild(navBox);

// Creating AboutUs Section
rootBox.appendChild(aboutUsSection);

// Box with Beers
rootBox.appendChild(app(api());