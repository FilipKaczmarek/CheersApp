import { IBU_SELECT, ABV_SELECT } from './SelectApp'

// const mainBox = document.createElement('div');
// mainBox.className = 'app--container';

function app() {
    const mainBox = document.createElement('div');
    mainBox.className = 'app--container';


    const searchBar = document.createElement('div');
    searchBar.className = 'app--container__searchbar';
    const beersBox = document.createElement('div');
    beersBox.className = 'app--container__beers';

    searchBar.appendChild(IBU_SELECT);
    searchBar.appendChild(ABV_SELECT);
    mainBox.appendChild(searchBar);

    return mainBox
}

export default app