const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const newEl = document.createElement("li");
  newEl.textContent = ingredients[i];
  newEl.classList.add("item");
  ingredientsEl.append(newEl);
  console.log(newEl);

};