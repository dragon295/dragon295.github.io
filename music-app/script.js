const previous = document.querySelector(".pre");
const play = document.querySelector(".play");
const next = document.querySelector(".next");
const title = document.querySelector(".title");
const volume_range = document.querySelector(".volume_range");
const volume_show = document.querySelector(".volume_show");
const volume_edit = document.querySelector(".volume_icon");
const slider = document.querySelector(".duration_slider");
const show_duration = document.querySelector(".show_duration");
const track_image = document.querySelector(".track-image");
const auto_play = document.querySelector(".auto");
const present = document.querySelector(".present");
const total = document.querySelector(".total");
const artist = document.querySelector(".artist");

let timer;
let playing_song = false;
let index_song = 0;
let track = document.createElement("audio");
let list_song = [
  {
    name: "Discovery",
    path: "music/AK  Discovery.mp3",
    img: "https://i.pinimg.com/originals/bb/69/66/bb6966c7b298c88784fb1b304b7ed2bc.jpg",
    artist: "AK",
  },
  {
    name: "Final Fantasy X HD OST",
    path: "music/Final Fantasy X HD OST  To Zanarkand.mp3",
    img: "https://freevitathemes.com/wp-content/uploads/2013/01/856c.jpg",
    artist: "FFX Theme",
  },
  {
    name: "Varien Valkyrie III Atonement",
    path: "music/Varien  Valkyrie III Atonement ft Laura Brehm.mp3",
    img: "https://cdnb.artstation.com/p/assets/images/images/004/232/981/large/carl-christian-gehl-varien-wip2.jpg?1481581805",
    artist: "Laura Brehm",
  },
  {
    name: "Drumstep Varien Valkyrie",
    path: "music/Drumstep  Varien  Valkyrie feat Laura Brehm.mp3",
    img: "https://bbts1.azureedge.net/images/p/full/2020/03/b5fcbea1-6afd-47f2-aec4-3e723bd39e16.jpg",
    artist: "Laura Brehm",
  },
  {
    name: "XomuTera Original",
    path: "music/Xomu  Tera Original Mix.mp3",
    img: "https://c4.wallpaperflare.com/wallpaper/449/115/758/digital-painting-2d-space-art-fantasy-art-wallpaper-preview.jpg",
    artist: "Xomu",
  },
  {
    name: "Xomu Lanterns Androlyx",
    path: "music/Xomu  Lanterns Androlyx Remix.mp3",
    img: "https://cdn.mos.cms.futurecdn.net/ooyXuccjW3PuhNXp9NKRnK.jpg",
    artist: "Xomu",
  },
];

// LOAD TRACK

function loadTrack(index_song) {
  clearInterval(timer);
  resetSlider();
  track.src = list_song[index_song].path;
  title.innerText = list_song[index_song].name;
  track_image.src = list_song[index_song].img;
  artist.innerText = list_song[index_song].artist;

  timer = setInterval(durationSlider, 500);

  // console.log(timer)
  present.innerText = index_song + 1;
  total.innerText = list_song.length;

  track.load();
}

// PLAY AT INDEX 0;

loadTrack(index_song);

function justPlay() {
  playing_song === false ? playSong() : pauseSong();
}

play.addEventListener("click", () => justPlay());

// playSong

function playSong() {
  track.play();
  playing_song = true;
  play.innerHTML = `<i class="fa fa-pause"></i>`;
}

// pauseSong

function pauseSong() {
  track.pause();
  playing_song = false;
  play.innerHTML = `<i class="fas fa-play"></i>`;
}

// previousSong

function previousSong() {
  if (index_song > 0) {
    index_song -= 1;
    loadTrack(index_song);
    playSong();
  } else {
    index_song = list_song.length - 1;
    loadTrack(index_song);
    playSong();
  }
}

previous.addEventListener("click", () => previousSong());

// nextSong

function nextSong() {
  if (index_song < list_song.length - 1) {
    index_song += 1;
    loadTrack(index_song);
    playSong();
  } else {
    index_song = 0;
    loadTrack(index_song);
    playSong();
  }
}

next.addEventListener("click", () => {
  nextSong();
});

// randomSong

function randomSong() {
  index_song = Math.floor(Math.random() * list_song.length);
  loadTrack(index_song);
  playSong();
}

auto_play.addEventListener("click", () => randomSong());

// changeVolume

function changeVolume() {
  volume_show.innerText = volume_range.value;
  track.volume = volume_range.value / 100;

  if (volume_edit.classList.contains("fa-volume-mute") && track.volume > 0) {
    volume_edit.classList.remove("fa-volume-mute");
    volume_edit.classList.add("fa-volume-up");
  } else if (track.volume === 0) {
    volume_edit.classList.remove("fa-volume-up");
    volume_edit.classList.add("fa-volume-mute");
  }
}

volume_range.addEventListener("change", () => changeVolume());

// muteSong

function muteSong() {
  volume_range.value = 0;
  if (volume_edit.classList.contains("fa-volume-up")) {
    volume_edit.classList.remove("fa-volume-up");
    volume_edit.classList.add("fa-volume-mute");
  }

  track.volume = volume_range.value;
  volume_show.innerText = volume_range.value;
}

volume_edit.addEventListener("click", () => {
  muteSong();
});

// RESET SLIDER

function resetSlider() {
  slider.value = 0;
}

// CHANGE SLIDER

function changeDuration() {
  let slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

slider.addEventListener("change", () => changeDuration());

// durationSlider

function durationSlider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = `<i class="fas fa-play"></i>`;
    index_song += 1;
    index_song >= list_song.length ? (index_song = 0) : index_song;
    loadTrack(index_song);
    pauseSong();
  }
}

durationSlider();
