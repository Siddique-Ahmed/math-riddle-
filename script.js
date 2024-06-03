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
let levelContainer = document.querySelector(".levelContainer");

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
      levelContainer.style.display = "flex";
      loadingSound.pause();
      audio.play();
    }
  }, 160);
}

document.addEventListener("DOMContentLoaded", () => {
  audio.play();
});

// ################### level list script ####################### \\

let levelBtn = document.querySelector("#levelBtn");
let lvl1 = document.querySelector("#lvl1");
let lvl2 = document.querySelector("#lvl2");
let lvl3 = document.querySelector("#lvl3");
let lvl4 = document.querySelector("#lvl4");
let lvl5 = document.querySelector("#lvl5");
let lvl6 = document.querySelector("#lvl6");
let lvl7 = document.querySelector("#lvl7");
let lvl8 = document.querySelector("#lvl8");
let lvl9 = document.querySelector("#lvl9");
let lvl10 = document.querySelector("#lvl10");
let levelList = document.querySelector(".levelList");

levelBtn.addEventListener("click", () => {
  if (levelList.style.display == "none") {
    levelList.style.display = "flex";
  } else {
    levelList.style.display = "none";
  }
});

// ################ level 1 script ###############  \\

let seclvl1 = document.querySelector(".level-1");
let inputlvl1 = document.querySelector("#answer");
let wrongAnswerlvl1 = document.querySelector("#wrongAnswer");
let hintlvl1 = document.querySelector("#hint");
let btnlvl1 = document.querySelector("#btnlvl1");
let hintConlvl1 = document.querySelector(".hintlvl1")

hintlvl1.addEventListener("click",()=>{
  hintConlvl1.style.display = "flex";
  setTimeout(() => {
    hintConlvl1.style.display = "none";
  }, 1500);
})

btnlvl1.addEventListener("click",()=>{
  let valuelvl1 = inputlvl1.value
  if(valuelvl1 === "32"){
    
  }else{
    wrongAnswerlvl1.textContent = "Wrong Answer! Try again"
  }
  setTimeout(() => {
    wrongAnswerlvl1.textContent = ""
  }, 1000);
})

