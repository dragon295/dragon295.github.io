const listQuiz = [
  {
    question: "Ngôn ngữ lập trình nào phổ biến nhất 2020?",
    a: "JavaScript",
    b: "Python",
    c: "Java",
    d: "Đếu biết",
    answer: "a",
  },
  {
    question: "Tổng thống Hoa Kỳ hiện tại?",
    a: "Franklin D. Roosevelt",
    b: "George Washington",
    c: "Joe Biden",
    d: "Harry S. Truman",
    answer: "c",
  },
  {
    question: "Idol JAV nhận giải nổi bật nhất 2020?",
    a: "Yua Mikami",
    b: "Eimi Fukada",
    c: "Yui Hatano",
    d: "Arisa Hanyuu",
    answer: "a",
  },
];

let countQuiz = 0;
let score = 0;
let countTrue = 0;

// Đếm số câu đúng
let p = document.createElement("p");
p.textContent = `Số câu đúng: ${countTrue}`;
p.style.cssFloat = "right";
let siv =
  document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
    .childNodes[3];
siv.appendChild(p);

// Nút Reset
let btn = document.createElement("button");
btn.innerText = "Chơi lại";
btn.style.width = "100%";
btn.style.height = "40px";
btn.style.fontSize = "1.25rem";
btn.style.border = "none";
btn.style.backgroundColor = "#0ff344";
btn.style.textAlign = "center";
btn.style.cursor = "pointer";
btn.style.fontFamily = "inherit";
btn.style.color = "#fff";
btn.style.transition = "background-color 0.25s linear";
btn.addEventListener("click", () => window.location.reload());
btn.addEventListener(
  "mouseover",
  () => (btn.style.backgroundColor = "#0ed83d")
);
btn.addEventListener("mouseout", () => (btn.style.backgroundColor = "#0ff344"));

const quiz_lert = document.getElementById("quiz-lert");
const question = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const ques_a = document.getElementById("ques-a");
const ques_b = document.getElementById("ques-b");
const ques_c = document.getElementById("ques-c");
const ques_d = document.getElementById("ques-d");
const submitBtn = document.getElementById("btn-submit");

// const indexArr = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

loadQuiz();

function loadQuiz() {
  deSelected();
  const currQuiz = listQuiz[countQuiz];
  question.innerText = currQuiz.question;

  ques_a.innerText = currQuiz.a;
  ques_b.innerText = currQuiz.b;
  ques_c.innerText = currQuiz.c;
  ques_d.innerText = currQuiz.d;
}

function getSelected() {
  let theAnswer = undefined;

  answers.forEach((answer) => {
    if (answer.checked) {
      theAnswer = answer.id;
    }
  });

  return theAnswer;
}

function deSelected() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const trueAnswer = getSelected();

  if (trueAnswer) {
    if (trueAnswer === listQuiz[countQuiz].answer) {
      countTrue++;
      p.textContent = `Số câu đúng: ${countTrue}`;
    }
    countQuiz++;
    countQuiz < listQuiz.length
      ? loadQuiz()
      : (quiz_lert.innerHTML = `<h2 style="text-align:center; margin-top: 20px">Số câu đúng của bạn: ${countTrue}/${listQuiz.length}</h2>
          </br>`) && quiz_lert.appendChild(btn);
  }
});
