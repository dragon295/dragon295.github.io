const apiUrl = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const demoRepo = "dragon295";

getUser(demoRepo);

async function getUser(user) {
  const response = await fetch(apiUrl + user);
  const data = await response.json();

  getRepos(user);

  addUserCard(data);
}

async function getRepos(user) {
  const response = await fetch(apiUrl + user + "/repos");
  const data = await response.json();

  addRepoToHtml(data);
}

function addRepoToHtml(datas) {
  const repos = document.querySelectorAll(".repos");

  datas
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((data) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repoEl.href = data.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = data.name;

      repos.forEach((repo) => {
        repo.appendChild(repoEl);
      });
    });
}
function addUserCard(user) {
  const htmlEl = document.createElement("div");
  htmlEl.classList.add("card");
  htmlEl.innerHTML = `<div>
    <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul class="info">
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>
    <div class="repos"></div>
  </div>`;

  main.appendChild(htmlEl);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
