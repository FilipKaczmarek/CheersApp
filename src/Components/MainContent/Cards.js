import createCard from './Card'
import api from '../../API/api'

const cards = ( ) => {
    const cardsBox = document.createElement('div');
    cardsBox.className = 'app--container__cardBox';

    api().then( api_data => {

        for (let beerObject of api_data){

            const cardBox = createCard(beerObject)
            cardsBox.appendChild(cardBox)

        } 

        return cardsBox
    })

    return cardsBox

}

export default cards