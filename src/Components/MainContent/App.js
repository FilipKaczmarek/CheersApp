import { IBU_SELECT, ABV_SELECT } from './SelectApp'
import cards from './Cards'
import api from '../../API/api'

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

    // Create cards
    mainBox.appendChild(cards(api_data));

    return mainBox
}

export default app