let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const newYear = new Date();

const countTimer = () => {
  const now = new Date();
  const next = new Date(`1, Jan ${newYear.getFullYear() + 1}`);

  const totalSecond = (next - now) / 1000;
  const day = Math.floor(totalSecond / 3600 / 24);
  const hour = Math.floor(totalSecond / 3600) % 24;
  const minute = Math.floor(totalSecond / 60) % 60;
  const second = Math.floor(totalSecond) % 60;

  days.innerHTML = formatTime(day);
  hours.innerHTML = formatTime(hour);
  minutes.innerHTML = formatTime(minute);
  seconds.innerHTML = formatTime(second);
};

const formatTime = (val) => (val < 10 ? `0${val}` : val);

setInterval(countTimer, 1000);
