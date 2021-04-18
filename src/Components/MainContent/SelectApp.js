const IBU_OPTIONS = [' ', '< 50'];
const ABV_OPTIONS = [' ', '0 - 3', '3.1 - 6', '6.1 - 9', '> 9'];

const createSelect = (labelText, optionsArray) => {
    const label = document.createElement('label');
    label.innerHTML = labelText
    const select = document.createElement('select');

    for (let i = 0; i < optionsArray.length; i++){
        let option = document.createElement('option');
        option.value = i;
        option.text = optionsArray[i];

        select.add(option)
    }

    label.appendChild(select)
    return label
}

const IBU_SELECT = createSelect('IBU ', IBU_OPTIONS);
const ABV_SELECT = createSelect('ABV ', ABV_OPTIONS);

export {IBU_SELECT, ABV_SELECT}