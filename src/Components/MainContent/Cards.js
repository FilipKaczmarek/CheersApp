import createCard from './Card'

const cards = ( api_data ) => {

    const cardsBox = document.createElement('div');
    cardsBox.className = 'app--container__cardBox';


    for (let beerObject of api_data){

        createCard(cardsBox, beerObject)

    }

}

export default cards