const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());

const noteValue = JSON.parse(localStorage.getItem("notes"));

if (noteValue) noteValue.forEach((text) => addNewNote(text));

const titles = JSON.parse(localStorage.getItem("titles"));

if (titles) {
  let i = 0;
  const titleValue = document.querySelectorAll(".title");
  while (i < titleValue.length && i < titles.length) {
    titleValue[i].value = titles[i];
    i++;
  }
}

function addNewNote(text = "") {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");

  noteEl.innerHTML = `
  <div class="notes">
  <div class="tools">
      <input type="text" class="title" placeholder="title here">
     <div> 
     <button class="edit"> <i class="fas fa-edit "></i></button>
     <button class="delete"> <i class="fas fa-trash-alt "></i></button>
     </div>
 </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;

  const editBtn = noteEl.querySelector(".edit");
  const delBtn = noteEl.querySelector(".delete");

  const main = noteEl.querySelector(".main");
  const textArea = noteEl.querySelector("textarea");
  const title = noteEl.querySelector(".title");

  textArea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");

    updateLS();
  });

  delBtn.addEventListener("click", () => {
    noteEl.remove();
    updateLS();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  title.addEventListener("change", () => updateLS());

  document.body.appendChild(noteEl);
}

function updateLS() {
  // update Title

  const titleValue = document.querySelectorAll(".title");

  const titleArr = [];

  titleValue.forEach((val) => titleArr.push(val.value));

  localStorage.setItem("titles", JSON.stringify(titleArr));

  // update Text

  const textAreaList = document.querySelectorAll("textarea");

  const noteArr = [];

  textAreaList.forEach((text) => noteArr.push(text.value));

  localStorage.setItem("notes", JSON.stringify(noteArr));
}
