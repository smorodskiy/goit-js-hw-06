const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.getElementById("ingredients");

// Create HTML collection
const list = document.createDocumentFragment();

ingredients.forEach(elem => {  
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerText = elem;
  list.appendChild(li);
})

// by one operation add to html
ingredientsElement.appendChild(list);

