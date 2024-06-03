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

  audio.volume = 0.6;

  audioButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      loadingSound.pause();
      audioButton.textContent = "SOUND ON";
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
let section1 = document.querySelector(".sec-1");
let loadingSec = document.querySelector(".loading");
let loadingSound = document.querySelector("#loadAudio");
let audio = document.querySelector("#audio");

playBtn.addEventListener("click", () => {
  section1.style.display = "none";
  loadingSec.style.display = "flex";
  audio.pause();
  loadingSound.play();
  startLoadingBar();
});


// ############## loading section ################# \\

let loadline = document.querySelector(".loadLine");
let span = document.querySelector(".loading span");
let levelContainer = document.querySelector(".levelContainer")

function startLoadingBar() {
  let count = 0;
  let loadingInterval = setInterval(() => {
    if (count < 100) {
      count++;
      loadline.style.width = `${count}%`;
      span.textContent = `${count}%`;
    }
    if (count > 50) {
      span.style.color = "#000";
    }
    if (count == 100) {
      clearInterval(loadingInterval); 
      loadingSec.style.display = "none";
      levelContainer.style.display = "flex"
      loadingSound.pause();
      audio.play(); 
    }
  }, 160);
}

document.addEventListener("DOMContentLoaded", () => {
  audio.play();
});
