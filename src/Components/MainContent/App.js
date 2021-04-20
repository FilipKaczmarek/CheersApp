import { IBU_SELECT, ABV_SELECT } from './SelectApp'
import cards from './Cards'

function app () {
    const mainBox = document.createElement('div');
    mainBox.className = 'app--container';

    /// Filter navigation
    const searchBar = document.createElement('div');
    searchBar.className = 'app--container__searchbar';
    const beersBox = document.createElement('div');
    beersBox.className = 'app--container__beers';

    searchBar.appendChild(IBU_SELECT);
    searchBar.appendChild(ABV_SELECT);
    mainBox.appendChild(searchBar);

    // Create cards
    const cardBox = cards()
    mainBox.appendChild(cardBox);

    return mainBox
}

export default app