const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(apiUrl);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  listMovies(data.results);
}

function listMovies(movies) {
  const error = document.createElement("div");
  error.classList.add("error");
  error.innerText = "Sorry we couldn't find any results. Please try again!";
  if (movies[0] === undefined) {
    main.innerHTML = "";
    main.appendChild(error);
  } else {
    main.innerHTML = "";
  }

  movies.forEach((movie) => {
    let { poster_path, title, vote_average, overview } = movie;

    // console.log(movie)
    if (poster_path !== null) {
      poster_path;
    } else {
      poster_path = "";
      poster_path = "/nGf1tzFVu3FLVsraCExsAEOnaUL.jpg";
    }

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img
            src="${imgPath + poster_path}"
            alt="${title}"
            class="img-banner"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${changeRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview: ${title}</h3>
            ${overview}
        </div>
    `;

    main.appendChild(movieEl);
  });
}

function changeRate(vote) {
  return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchVal = search.value;

  if (searchVal) {
    getMovies(searchApi + searchVal);

    search.value = "";
  }
});
