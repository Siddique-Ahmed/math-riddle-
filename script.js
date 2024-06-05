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
  window.location.href = "https://www.google.com";
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
  }, 100);
  if ((levelContainer.style.display = "flex")) {
    seclvl1.style.display = "flex";
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

lvl1.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl1.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl2.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl2.style.display = "flex";
  levelList.style.display = "none";
  seclvl1.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl3.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl3.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl1.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl4.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl4.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl1.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl5.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl5.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl1.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl6.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl6.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl1.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl7.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl7.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl1.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl8.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl8.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl1.style.display = "none";
  seclvl9.style.display = "none";
  seclvl10.style.display = "none";
});
lvl9.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl9.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl1.style.display = "none";
  seclvl10.style.display = "none";
});
lvl10.addEventListener("click", () => {
  levelContainer.style.display = "flex";
  section1.style.display = "none";
  seclvl10.style.display = "flex";
  levelList.style.display = "none";
  seclvl2.style.display = "none";
  seclvl3.style.display = "none";
  seclvl4.style.display = "none";
  seclvl5.style.display = "none";
  seclvl6.style.display = "none";
  seclvl7.style.display = "none";
  seclvl8.style.display = "none";
  seclvl9.style.display = "none";
  seclvl1.style.display = "none";
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
    seclvl2.style.display = "flex";
    seclvl1.style.display = "none";
  } else {
    wrongAnswerlvl1.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl1 === "") {
    wrongAnswerlvl1.textContent = "please Enter answer";
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
    seclvl3.style.display = "flex";
    seclvl2.style.display = "none";
  } else {
    wrongAnswerlvl2.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl2 === "") {
    wrongAnswerlvl2.textContent = "please Enter answer";
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
    seclvl4.style.display = "flex";
    seclvl3.style.display = "none";
  } else {
    wrongAnswerlvl3.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl3 === "") {
    wrongAnswerlvl3.textContent = "please Enter answer";
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
    seclvl5.style.display = "flex";
    seclvl4.style.display = "none";
  } else {
    wrongAnswerlvl4.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl4 === "") {
    wrongAnswerlvl4.textContent = "please Enter answer";
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
    seclvl6.style.display = "flex";
    seclvl5.style.display = "none";
  } else {
    wrongAnswerlvl5.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl5 === "") {
    wrongAnswerlvl5.textContent = "please Enter answer";
  }
  setTimeout(() => {
    wrongAnswerlvl5.textContent = "";
  }, 1000);
});
// ################# level 6 ###################### \\

let seclvl6 = document.querySelector(".level-6");
let inputlvl6 = document.querySelector("#answer6");
let wrongAnswerlvl6 = document.querySelector("#wrongAnswer6");
let hintlvl6 = document.querySelector("#hint6");
let btnlvl6 = document.querySelector("#btnlvl6");
let hintConlvl6 = document.querySelector(".hintlvl6");

hintlvl6.addEventListener("click", () => {
  hintConlvl6.style.display = "flex";
  setTimeout(() => {
    hintConlvl6.style.display = "none";
  }, 1500);
});

btnlvl6.addEventListener("click", () => {
  let valuelvl6 = inputlvl6.value;
  if (valuelvl6 === "5") {
    seclvl7.style.display = "flex";
    seclvl6.style.display = "none";
  } else {
    wrongAnswerlvl6.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl6 === "") {
    wrongAnswerlvl6.textContent = "please Enter answer";
  }
  setTimeout(() => {
    wrongAnswerlvl6.textContent = "";
  }, 1000);
});
// ################# level 7 ###################### \\

let seclvl7 = document.querySelector(".level-7");
let inputlvl7 = document.querySelector("#answer7");
let wrongAnswerlvl7 = document.querySelector("#wrongAnswer7");
let hintlvl7 = document.querySelector("#hint7");
let btnlvl7 = document.querySelector("#btnlvl7");
let hintConlvl7 = document.querySelector(".hintlvl7");

hintlvl7.addEventListener("click", () => {
  hintConlvl7.style.display = "flex";
  setTimeout(() => {
    hintConlvl7.style.display = "none";
  }, 1500);
});

btnlvl7.addEventListener("click", () => {
  let valuelvl7 = inputlvl7.value;
  if (valuelvl7 === "39") {
    seclvl8.style.display = "flex";
    seclvl7.style.display = "none";
  } else {
    wrongAnswerlvl7.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl7 === "") {
    wrongAnswerlvl7.textContent = "please Enter answer";
  }
  setTimeout(() => {
    wrongAnswerlvl7.textContent = "";
  }, 1000);
});
// ################# level 8 ###################### \\

let seclvl8 = document.querySelector(".level-8");
let inputlvl8 = document.querySelector("#answer8");
let wrongAnswerlvl8 = document.querySelector("#wrongAnswer8");
let hintlvl8 = document.querySelector("#hint8");
let btnlvl8 = document.querySelector("#btnlvl8");
let hintConlvl8 = document.querySelector(".hintlvl8");

hintlvl8.addEventListener("click", () => {
  hintConlvl8.style.display = "flex";
  setTimeout(() => {
    hintConlvl8.style.display = "none";
  }, 1500);
});

btnlvl8.addEventListener("click", () => {
  let valuelvl8 = inputlvl8.value;
  if (valuelvl8 === "2") {
    seclvl9.style.display = "flex";
    seclvl8.style.display = "none";
  } else {
    wrongAnswerlvl8.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl8 === "") {
    wrongAnswerlvl8.textContent = "please Enter answer";
  }
  setTimeout(() => {
    wrongAnswerlvl8.textContent = "";
  }, 1000);
});
// ################# level 9 ###################### \\

let seclvl9 = document.querySelector(".level-9");
let inputlvl9 = document.querySelector("#answer9");
let wrongAnswerlvl9 = document.querySelector("#wrongAnswer9");
let hintlvl9 = document.querySelector("#hint9");
let btnlvl9 = document.querySelector("#btnlvl9");
let hintConlvl9 = document.querySelector(".hintlvl9");

hintlvl9.addEventListener("click", () => {
  hintConlvl9.style.display = "flex";
  setTimeout(() => {
    hintConlvl9.style.display = "none";
  }, 1500);
});

btnlvl9.addEventListener("click", () => {
  let valuelvl9 = inputlvl9.value;
  if (valuelvl9 === "26") {
    seclvl10.style.display = "flex";
    seclvl9.style.display = "none";
  } else {
    wrongAnswerlvl9.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl9 === "") {
    wrongAnswerlvl9.textContent = "please Enter answer";
  }
  setTimeout(() => {
    wrongAnswerlvl9.textContent = "";
  }, 1000);
});
// ################# level 10 ###################### \\

let seclvl10 = document.querySelector(".level-10");
let inputlvl10 = document.querySelector("#answer10");
let wrongAnswerlvl10 = document.querySelector("#wrongAnswer10");
let hintlvl10 = document.querySelector("#hint10");
let btnlvl10 = document.querySelector("#btnlvl10");
let hintConlvl10 = document.querySelector(".hintlvl10");
let backHome = document.querySelector(".backHomeBox");
let retryBtn = document.querySelector("#retry");
let backBtn = document.querySelector("#backHome");

retryBtn.addEventListener("click", () => {
  setTimeout(() => {
    seclvl1.style.display = "flex";
    inputlvl1.value = "";
    inputlvl2.value = "";
    inputlvl3.value = "";
    inputlvl4.value = "";
    inputlvl5.value = "";
    inputlvl6.value = "";
    inputlvl7.value = "";
    inputlvl8.value = "";
    inputlvl9.value = "";
    inputlvl10.value = "";
    backHome.style.display = "none";
    backHome.style.display = "none";
    levelContainer.style.display = "flex";
  }, 800);
});
backBtn.addEventListener("click", () => {
  setTimeout(() => {
    section1.style.display = "flex";
    seclvl1.style.display = "none";
    backHome.style.display = "none";
    levelContainer.style.display = "none";
  }, 800);
});

hintlvl10.addEventListener("click", () => {
  hintConlvl10.style.display = "flex";
  setTimeout(() => {
    hintConlvl10.style.display = "none";
  }, 1500);
});

btnlvl10.addEventListener("click", () => {
  let valuelvl10 = inputlvl10.value;
  if (valuelvl10 === "48") {
    setTimeout(() => {
      backHome.style.display = "flex";
      seclvl10.style.display = "none";
    }, 300);
  } else {
    wrongAnswerlvl10.textContent = "Wrong Answer! Please try again";
  }

  if (valuelvl10 === "") {
    wrongAnswerlvl10.textContent = "please Enter answer";
  }
  setTimeout(() => {
    wrongAnswerlvl10.textContent = "";
  }, 1000);
});
