//  ckeck for color option
const mainColor = localStorage.getItem("color--option");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
}

// ===================  togell setting =======================

document.querySelector(".togell-setting i").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};
//  ====================  end togell setting =================

// ======================================= start change color option =======================

const licolor = document.querySelectorAll(".option-color li ");
licolor.forEach((sadf) => {
  sadf.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color--option", e.target.dataset.color);
  });
});

// ======================================= end  change color option =======================

//  ================================ start of back switch ===================

const randomback = document.querySelectorAll(".option-back span");
//  toggel switch color
randomback.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((span) => {
      span.classList.remove("active");
    });

    e.target.classList.add("active");
    //localStorage.setItem("backgroundrandom", "");
    // let back =  localStorage.clear();
    if (e.target.dataset.back === "yes") {
      localStorage.setItem("backgroundrandom", true);
      randomizeBackground();
    } else {
      localStorage.setItem("backgroundrandom", false);
      clearInterval(backgroundInterval);
    }
  });
});

//  ================================ end of back switch ===================

let arrayimgph = [
  "pho (1).jpg",
  "pho (1).png",
  "pho (2).jpg",
  "pho (3).jpg",
  "pho (4).jpg",
  "pho (5).jpg",
  "pho (6).jpg",
  "pho (7).jpg",
  "pho (8).jpg",
  "pho (9).jpg",
  "pho (10).jpg",
];

let landpage = document.querySelector(".landing-page");
let backgroundrandom = true;
backgroundrandom = localStorage.getItem("backgroundrandom");

function randomizeBackground() {
  if (backgroundrandom === "true") {
    backgroundInterval = setInterval(() => {
      let randomback = Math.floor(Math.random() * arrayimgph.length);
      landpage.style.backgroundImage =
        `url("/imgs/` + arrayimgph[randomback] + `")`;
    }, 5000);
  }
}

// ============================ start of Gallary ===================

let gallary = document.querySelectorAll(".Gallary img");

gallary.forEach((element) => {
  element.addEventListener("click", (e) => {
    let overrlay = document.createElement("div");
    overrlay.className = "popup-overrlay";
    document.body.appendChild(overrlay);

    // ==========
    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";
    // ====================  Heading =========================
    if (element.alt !== null) {
      let imgHeding = document.createElement("h3");

      let imgText = document.createTextNode(element.alt);

      imgHeding.appendChild(imgText);
      popupbox.appendChild(imgHeding);
    }
    // ===============  Create img ================
    let imgpop = document.createElement("img");
    imgpop.src = element.src;

    popupbox.appendChild(imgpop);
    document.body.appendChild(popupbox);

    // =============== creat span

    let closeButton = document.createElement("span");
    let closeText = document.createTextNode("X");
    closeButton.appendChild(closeText);
    popupbox.appendChild(closeButton);
    closeButton.className = "close-Button";
  });
});

//////  ============== cloose popup

document.addEventListener("click", (e) => {
  if (e.target.className == "close-Button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overrlay").remove();
  }
});

// ============================ end of Gallary ===================

// ========================  navbar section =================

const navbaritem = document.querySelectorAll(".nav-link");

navbaritem.forEach((e) => {
  e.addEventListener("click", (element) => {
    element.preventDefault();
    document.querySelector(element.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =========================== option color resett

document
  .querySelector(".option-color button")
  .addEventListener("click", (e) => {
    localStorage.removeItem("backgroundrandom");
    localStorage.removeItem("color--option");
    Window.location.reload();
  });
