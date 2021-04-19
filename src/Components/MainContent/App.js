import { IBU_SELECT, ABV_SELECT } from './SelectApp'

function app( api_data ) {
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

    // Cards box
    const cardsBox = document.createElement('div');
    cardsBox.className = 'app--container__cardBox';

    // Create card

    return mainBox
}

export default app