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
  audio.pause();
  loadingSound.pause();
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
      levelContainer.style.display = "none";

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
  if(levelContainer.style.display = "flex"){
    seclvl1.style.display = "flex"
  }
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
let hintConlvl1 = document.querySelector(".hintlvl1");

hintlvl1.addEventListener("click", () => {
  hintConlvl1.style.display = "flex";
  setTimeout(() => {
    hintConlvl1.style.display = "none";
  }, 1500);
});

btnlvl1.addEventListener("click", () => {
  let valuelvl1 = inputlvl1.value;
  if (valuelvl1 === "32") {
    seclvl2.style.display = "flex"
    seclvl1.style.display = "none"
  } else {
    wrongAnswerlvl1.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl1 === "") {
    wrongAnswerlvl1.textContent = "please select answer";
  }
  setTimeout(() => {
    wrongAnswerlvl1.textContent = "";
  }, 1000);
});

// ################# level 2 ###################### \\

let seclvl2 = document.querySelector(".level-2");
let inputlvl2 = document.querySelector("#answer2");
let wrongAnswerlvl2 = document.querySelector("#wrongAnswer2");
let hintlvl2 = document.querySelector("#hint2");
let btnlvl2 = document.querySelector("#btnlvl2");
let hintConlvl2 = document.querySelector(".hintlvl2");

hintlvl2.addEventListener("click", () => {
  hintConlvl2.style.display = "flex";
  setTimeout(() => {
    hintConlvl2.style.display = "none";
  }, 1500);
});

btnlvl2.addEventListener("click", () => {
  let valuelvl2 = inputlvl2.value;
  if (valuelvl2 === "6") {
    seclvl3.style.display = "flex"
    seclvl2.style.display = "none"
  } else {
    wrongAnswerlvl2.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl2 === "") {
    wrongAnswerlvl2.textContent = "please select answer";
  }
  setTimeout(() => {
    wrongAnswerlvl2.textContent = "";
  }, 1000);
});

// ################# level 3 ###################### \\

let seclvl3 = document.querySelector(".level-3");
let inputlvl3 = document.querySelector("#answer3");
let wrongAnswerlvl3 = document.querySelector("#wrongAnswer3");
let hintlvl3 = document.querySelector("#hint3");
let btnlvl3 = document.querySelector("#btnlvl3");
let hintConlvl3 = document.querySelector(".hintlvl3");

hintlvl3.addEventListener("click", () => {
  hintConlvl3.style.display = "flex";
  setTimeout(() => {
    hintConlvl3.style.display = "none";
  }, 1500);
});

btnlvl3.addEventListener("click", () => {
  let valuelvl3 = inputlvl3.value;
  if (valuelvl3 === "10") {
    seclvl4.style.display = "flex"
    seclvl3.style.display = "none"
  } else {
    wrongAnswerlvl3.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl3 === "") {
    wrongAnswerlvl3.textContent = "please select answer";
  }
  setTimeout(() => {
    wrongAnswerlvl3.textContent = "";
  }, 1000);
});
// ################# level 4 ###################### \\

let seclvl4 = document.querySelector(".level-4");
let inputlvl4 = document.querySelector("#answer4");
let wrongAnswerlvl4 = document.querySelector("#wrongAnswer4");
let hintlvl4 = document.querySelector("#hint4");
let btnlvl4 = document.querySelector("#btnlvl4");
let hintConlvl4 = document.querySelector(".hintlvl4");

hintlvl4.addEventListener("click", () => {
  hintConlvl4.style.display = "flex";
  setTimeout(() => {
    hintConlvl4.style.display = "none";
  }, 1500);
});

btnlvl4.addEventListener("click", () => {
  let valuelvl4 = inputlvl4.value;
  if (valuelvl4 === "25") {
    seclvl5.style.display = "flex"
    seclvl4.style.display = "none"
  } else {
    wrongAnswerlvl4.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl4 === "") {
    wrongAnswerlvl4.textContent = "please select answer";
  }
  setTimeout(() => {
    wrongAnswerlvl4.textContent = "";
  }, 1000);
});
// ################# level 5 ###################### \\

let seclvl5 = document.querySelector(".level-5");
let inputlvl5 = document.querySelector("#answer5");
let wrongAnswerlvl5 = document.querySelector("#wrongAnswer5");
let hintlvl5 = document.querySelector("#hint5");
let btnlvl5 = document.querySelector("#btnlvl5");
let hintConlvl5 = document.querySelector(".hintlvl5");

hintlvl5.addEventListener("click", () => {
  hintConlvl5.style.display = "flex";
  setTimeout(() => {
    hintConlvl5.style.display = "none";
  }, 1500);
});

btnlvl5.addEventListener("click", () => {
  let valuelvl5 = inputlvl5.value;
  if (valuelvl5 === "25") {
    // seclvl5.style.display = "flex"
    seclvl5.style.display = "none"
  } else {
    wrongAnswerlvl5.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl5 === "") {
    wrongAnswerlvl5.textContent = "please select answer";
  }
  setTimeout(() => {
    wrongAnswerlvl5.textContent = "";
  }, 1000);
});
