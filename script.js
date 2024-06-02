let bar = document.querySelector("#bar");
let list = document.querySelector(".list");
let logo = document.querySelector(".logo h1 a");

bar.addEventListener("click", () => {
  if (list.style.top === "-550px") {
    list.style.top = "0px";
    bar.classList.add("fa-xmark");
    bar.classList.remove("fa-bars");
    bar.style.color = "#1d1d1d";
    logo.style.color = "#000";
  } else {
    list.style.top = "-550px";
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-xmark");
    bar.style.color = "#ffff";
    logo.style.color = "#fff";
  }
});

// ########### for audio button #################### \\

document.addEventListener("DOMContentLoaded", () => {
  let audioButton = document.querySelector("#audioBtn");
  let audio = document.querySelector("#audio");

  // audio.play();
  audio.volume = 0.6;

  audioButton.addEventListener("click", () => {
    if (audio.paused) {
      audioButton.textContent = "SOUND ON";
      audio.play();
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-volume-high");
      audioButton.appendChild(i);
      audioButton.style.display = "flex";
      audioButton.style.flexDirection = "row-reverse";
      audioButton.style.justifyContent = "flex-end";
    } else {
      audio.pause();
      audioButton.textContent = "SOUND OFF";
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-volume-xmark");
      audioButton.appendChild(i);
      audioButton.style.display = "flex";
      audioButton.style.flexDirection = "row-reverse";
      audioButton.style.justifyContent = "flex-end";
    }
  });
});

// ################## for Exit Game ################# \\

let exitGame = document.querySelector("#exitGame");
let exitBox = document.querySelector(".exitBox");
let yesBtn = document.querySelector("#yesBtn");
let noBtn = document.querySelector("#noBtn");

exitGame.addEventListener("click", () => {
  exitBox.style.display = "flex";
});

function exitWindow() {
  document.body.style.opacity = "0";
}

function hideBox() {
  exitBox.style.display = "none";
}
yesBtn.addEventListener("click", () => {
  exitWindow();
  hideBox();
});
noBtn.addEventListener("click", () => {
  hideBox();
});

// ################# play Game ######################### \\

let playBtn = document.querySelector("#playGame");
let sectoion1 = document.querySelector(".sec-1");
let loadingSec = document.querySelector(".loading");

playBtn.addEventListener("click", () => {
  if (sectoion1.style.display === "flex") {
    loadingSec.style.display = "none";
    sectoion1.style.display = "flex";
  } else {
    sectoion1.style.display = "none";
    loadingSec.style.display = "flex";
  }
});

// ############## loading section ################# \\

let loadline = document.querySelector(".loadLine");
let span = document.querySelector(".loading span");

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;

  setInterval(() => {
    if (count < 100) {
      count++;
      loadline.style.width = `${count}%`;
      span.textContent = `${count}%`;
    }
    if (count > 50) {
      span.style.color = "#000";
    }
    if (count == 100) {
      loadingSec.style.display = "none";
    }
  }, 160);
});
