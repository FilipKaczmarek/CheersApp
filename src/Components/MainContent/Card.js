const createCard = (cardDetailsObject) => {
    
    const { 
        name, 
        first_brewed, 
        description, 
        image_url, 
        abv,
        ibu,  } = cardDetailsObject;

    const cardBox = document.createElement('div');
    cardBox.className = 'cardBox--card';
    
    const imageBox = document.createElement('div');
    imageBox.className = 'cardBox--imageBox'
    const image = document.createElement('img');
    image.src = `${image_url}`;
    imageBox.appendChild(image);

    const informationBox = document.createElement('div');
    informationBox.className = 'cardBox--details'

    const title = document.createElement('h3');
    title.innerHTML = `${name}`;

    const spanInfoABV = document.createElement('span');
    const spanInfoIBU = document.createElement('span');
    spanInfoABV.innerHTML = `ABV: ${abv}`;
    spanInfoIBU.innerHTML = `IBU: ${ibu}`;

    const descriptionContent = document.createElement('p');
    descriptionContent.innerHTML = `${description}`;

    cardBox.appendChild(imageBox);
    informationBox.appendChild(title);
    informationBox.appendChild(title);
    informationBox.appendChild(spanInfoABV);
    informationBox.appendChild(spanInfoIBU);
    informationBox.appendChild(descriptionContent);
    cardBox.appendChild(informationBox)

    return cardBox
}

export default createCard 