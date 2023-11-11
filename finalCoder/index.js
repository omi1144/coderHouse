const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.querySelector("form");
const message = document.getElementById("message");
const log = document.getElementById("log");
const template = document.getElementById("template");
const container = document.getElementById("container");

const URL_API = "https://mocki.io/v1/d2ee1732-4fd1-429a-a971-3742f1422b8a";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const videoGames = async () => {
  const games = await fetch(URL_API).then((response) => response.json());
  let gamesCom = [];
  if (template) {
    games.forEach(({ title, author, lorem }) => {
      const article = template.content.firstElementChild.cloneNode(true);

      const img = article.querySelector(".posterG");
      img.src = "https://placehold.co/600x400";

      const titleG = article.querySelector(".titleG");
      titleG.innerText = title;

      const authorG = article.querySelector(".authorG");
      authorG.innerText = author;

      const descriptionsG = article.querySelector(".descriptionsG");
      descriptionsG.innerText = lorem;

      container.append(article);
      console.log(article);
    });
  }
};

videoGames();

if (log) {
  log.addEventListener("click", () => {
    localStorage.removeItem("data");
    window.location.href = "index.html";
    onSigning();
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value == "miguel" && password.value == "1234") {
      localStorage.data = JSON.stringify({ name: name.value });
      window.location.href = "crm.html";
      onSigning();
    } else {
      console.log(`Nombre o password no son validos`);
    }
  });
}

// function onSigning() {
//     const windowLocation = window.location.pathname;
//     console.log(windowLocation);
//   if (localStorage.data && windowLocation.includes("index.html")) {
//     window.location.href = "crm.html";
//   } if(!windowLocation.includes("index.html")) {
//     window.location.href = "index.html";
//   }
// }
// onSigning();
