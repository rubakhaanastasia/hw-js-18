// 1. Підрахунок категорій
const categories = document.querySelectorAll("ul > li");
console.log(`в списку ${categories.length} категорій`);

categories.forEach((category) => {
  const elements = category.closest("ul").querySelectorAll("li");
  console.log(
    `категорія ${category.textContent}, кількість ${elements.length - 1}`
  );
});

// 2. Список інгредієнтів
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.getElementById("ingredients");
const items = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
ingredientsList.innerHTML = items;

// 3. Галерея зображень
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");
const markup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");
gallery.innerHTML = markup;
