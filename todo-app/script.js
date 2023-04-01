const form = document.getElementById("form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");

const todoVal = JSON.parse(localStorage.getItem("todos"));

if (todoVal) todoVal.forEach((todo) => addToDo(todo));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addToDo();
});

function addToDo(todo) {
  // debugger
  let inputText = input.value;

  if (todo) inputText = todo.text;

  if (inputText) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("complete");
    }

    todoEl.innerText = inputText;

    const btnDel = document.createElement("button");
    btnDel.innerHTML = `<i class="fas fa-times"></i>`;
    btnDel.classList.add("remove");

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("complete");

      updateLS();
    });

    form.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      btnDel.style.display = "none";

      updateLS();
    });

    btnDel.addEventListener("click", () => {
      todoEl.remove();
      btnDel.style.display = "none";

      updateLS();
    });

    todos.appendChild(todoEl);
    todos.appendChild(btnDel);

    input.value = "";
    updateLS();
  }
}

function updateLS() {
  const todos = document.querySelectorAll("li");

  const todoArr = [];

  todos.forEach((todo) => {
    todoArr.push({
      text: todo.innerText,
      completed: todo.classList.contains("complete"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todoArr));
}
