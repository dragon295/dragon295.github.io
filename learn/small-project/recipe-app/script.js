const searchForm = document.querySelector("form");
const divResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
const inputValue = document.querySelector("input");
const removeBtn = document.querySelector(".fa-search");
const idAPI = "55cc444b";
const APIkey = "bd417d33b7efc80c5b9b44abd9cee9d4";
let searchValue;
let wrong = "";

async function showAPIValue(value) {
  const response = await fetch(
    `https://api.edamam.com/search?q=${value}&app_id=${idAPI}&app_key=${APIkey}`
  );
  const data = await response.json();
  generateHTML(data.hits);
}

function generateHTML(datas) {
  if (datas.length > 0) {
    divResult.innerHTML = "";
    if (wrong) wrong.remove();
  } else {
    divResult.innerHTML = "";
    wrong = document.createElement("div");
    wrong.classList.add("wrong");
    wrong.innerText = "Sorry! We couldn't find your request. Please try again!";
    divResult.appendChild(wrong);
  }

  datas.forEach((data) => {
    const { calories, image, label, url, dietLabels, healthLabels, mealType } =
      data.recipe;
    const items = document.createElement("div");
    items.classList.add("item");
    items.innerHTML = `
    <img src="${image}" alt="">
    <div class="flex-container">
    <h1 class="title">${label}</h1>
    <a class="view-btn" href="${url}" target="_blank">View Recipe</a>
    </div>
    <p class="item-data">Calories: ${calories.toFixed(2)}</p>
    <p class="item-data">Meal type: ${mealType}</p>
    <p class="item-data">Diet label: ${
      dietLabels.length > 0 ? dietLabels : "Not Found"
    }
    </p>
    <p class="item-data">Health label: ${
      healthLabels.length > 0 ? healthLabels.slice(0, 2) : "Not Found"
    }
    </p>`;
    divResult.appendChild(items);
  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchValue = inputValue.value;

  if (searchValue) {
    showAPIValue(searchValue);
  }
});

removeBtn.addEventListener("click", () => {
  searchValue = inputValue.value;
  showAPIValue(searchValue);
});
