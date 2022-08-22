const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.getElementById("ingredients");

// copy of UL without child
const list = ingredientsElement.cloneNode(false);

ingredients.forEach(elem => {  
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerText = elem;
  list.appendChild(li);
})

// by one operation add to html
ingredientsElement.parentNode.replaceChild(list, ingredientsElement);

