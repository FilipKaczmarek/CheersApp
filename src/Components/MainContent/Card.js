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

    const title = document.createElement('h3');
    title.innerHTML = `${name}`;

    const spanInfoABV = document.createElement('span');
    const spanInfoIBU = document.createElement('span');
    spanInfoABV.innerHTML = `${abv}`;
    spanInfoIBU.innerHTML = `${ibu}`;

    const descriptionContent = document.createElement('p');
    descriptionContent.innerHTML = `${description}`;

    cardBox.appendChild(imageBox);
    cardBox.appendChild(title);
    cardBox.appendChild(spanInfoABV);
    cardBox.appendChild(spanInfoIBU);
    cardBox.appendChild(descriptionContent);

    return cardBox
}

export default createCard 