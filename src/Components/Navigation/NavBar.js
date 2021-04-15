// const navBox = document.createElement('div');
// navBox.classList = 'navigation--bar';

const icon = document.createElement('i');
icon.className = 'fas fa-beer';
const title = document.createElement('span');
title.classList = 'navbar--title';
title.innerHTML = "Cheers!";

const navItems = [icon, title]

const createList = (typeList, arrayItems) => {
    const list = document.createElement(typeList);

    for(let item of arrayItems){
        let li = document.createElement('li');
        li.appendChild(item);
        list.appendChild(li);
    }

    return list;
};

const currentList = createList('ul', navItems)


export default currentList