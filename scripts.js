//  scroll placements
const serviceBtn = document.querySelector(".servicesBtn");
const productsBtn = document.querySelector(".productsBtn");
const gamesBtn = document.querySelector(".gamesBtn");
const serviceSection = document.querySelector(".service-content");
const productsSection = document.querySelector(".products-center");
const gameSection = document.querySelector(".game");
const homeBtn = document.querySelector(".homeBtn");
const home = document.querySelector(".main-section");
const learnMore = document.querySelector(".learn-more");
learnMore.addEventListener("click", (e) => {
  e.preventDefault();
  serviceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
serviceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  serviceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
productsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  productsSection.scrollIntoView({ behavior: "smooth" });
});
gamesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gameSection.scrollIntoView({ behavior: "smooth" });
});
homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  home.scrollIntoView({ behavior: "smooth" });
});

// service section beginning
const servicePrevBtn = document.getElementById("prev");
const serviceNextBtn = document.getElementById("next");
const slider = document.querySelector(".image-slider");
const images = document.querySelectorAll(".image-slider img");

let counter = 1;
slider.style.transform = "translateX(" + -350 * counter + "px)";

serviceNextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  slider.style.transition = "transform .5s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -320 * counter + "px)";
});
servicePrevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform .5s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -320 * counter + "px)";
});

slider.addEventListener("transitionend", () => {
  if (images[counter].id === "cloneStart") {
    slider.style.transition = "none";
    counter = images.length - 2;
    slider.style.transform = "translateX(" + -350 * counter + "px)";
  }
  if (images[counter].id === "cloneEnd") {
    slider.style.transition = "none";
    counter = images.length - counter;
    slider.style.transform = "translateX(" + -350 * counter + "px)";
  }
});

// main-functionality
const budgetBtn = document.querySelector(".btn1");
const performanceBtn = document.querySelector(".btn2");
const enthusiastBtn = document.querySelector(".btn3");
const productInfo = document.querySelector(".product-info");
const productCpu = document.querySelector(".product-cpu");
const productGpu = document.querySelector(".product-gpu");
const buildTitle = document.querySelector(".title");
const buildCenter = document.querySelector(".build");
const buildOverlay = document.querySelector(".build-overlay");
const buildIcon = document.querySelector(".fa-ethereum");
const closeBtn = document.querySelector(".closeBuild");
const buildDom = document.querySelector(".products-container");
const clearBuild = document.querySelector(".clear-build");
const comLogo = document.querySelector(".components-logo");
const comModel = document.querySelector(".components-model");
const comCenter = document.querySelector(".com-model-center");
const comPrice = document.querySelector(".components-price");
const buildTotal = document.querySelector(".inBuild-total");
const gamesLogo = document.querySelector(".game-logo");
const gameModel = document.querySelector(".games-model");
const gamesDom = document.querySelector(".games-model-center");
const apexlegends = document.querySelector(".first");
const csgo = document.querySelector(".second");
const cyberpunk = document.querySelector(".third");
const fortnite = document.querySelector(".forth");
const rocketleage = document.querySelector(".fifth");
const theWitcher = document.querySelector(".sixth");
var cart = 0;
class ProductBtn {
  getPathBtn() {
    budgetBtn.addEventListener("click", () => {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => data.Basic)
        .then((basic) => Storage.savePath(basic))
        .then((info) => {
          UI.displayPath();
          UI.comInfo();
          UI.buildDom();

          productInfo.innerHTML = `<img src="images/budget.png" alt="">
            <p class="product-text">Lower budget no problem with our recomended part you will be sure to still enjoy you build without breaking the bank. Our parts are designed to give you the best performance for the price.</p>`;
          productInfo.style.opacity = 1;
          buildTitle.innerHTML = "<h2>Budget</h2>";
          Storage.info(productInfo.innerHTML);
          Storage.title(buildTitle.innerHTML);
        })
        .catch((err) => console.log(err));
      findGame();
      // location.reload();
    });
    performanceBtn.addEventListener("click", () => {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => data.Performance)
        .then((performance) => Storage.savePath(performance))
        .catch((err) => console.log(err))
        .then((info) => {
          UI.displayPath();
          UI.comInfo();
          UI.buildDom();

          productInfo.innerHTML = `<p class="product-text">Crush gaming and rank higher with our performance path. designed to kill it at games and be capable to power your productivity needs with our recomended parts you will no be sacrificing anything while gaming or editing</p>
            <img src="images/Performance.png" alt="">`;
          productInfo.style.opacity = 1;
          buildTitle.innerHTML = `<h2>PerFormance</h2>`;
          Storage.info(productInfo.innerHTML);
          Storage.title(buildTitle.innerHTML);
        });
      findGame();
      // location.reload();
    });
    enthusiastBtn.addEventListener("click", () => {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => data.Enthusiast)
        .then((enthusiast) => Storage.savePath(enthusiast))
        .then((info) => {
          UI.displayPath();
          UI.comInfo();
          UI.buildDom();
          productInfo.innerHTML = `<img src="images/enthusiast.png" alt="">
            <p class="product-text"> An enthusiast PC implies the early adoption of new hardware, which is sold at a premium price. Make Your imagination pop with the highest end pc components.</p>`;
          productInfo.style.opacity = 1;
          buildTitle.innerHTML = `<h2>Enthusiast</h2>`;
          Storage.info(productInfo.innerHTML);
          Storage.title(buildTitle.innerHTML);
        })
        .catch((err) => console.log(err));
      // location.reload();
      findGame();
    });
  }
}

class UI {
  uiInfo() {
    let info = localStorage.getItem("info");
    productInfo.innerHTML = info;
    productInfo.style.opacity = 1;
  }
  static displayPath() {
    if (localStorage.getItem("path") === null) return;
    let item = JSON.parse(localStorage.getItem("path"));
    // console.log(item);
    const cpu = item[0];
    const gpu = item[1];
    productCpu.innerHTML = `
        <h2 class="cpu-title">Recomended Cpu</h2>
        <article class="cpu">
            <div class="cpu-container">
                <img src='${cpu.image}' alt="">
                <h2 class="cpu-hover-name info"> <span class="cpu-title">${cpu.title}</span> <br> <span>$${cpu.price}</span></h2>
                <button class="cpu-btn" data-id${cpu.id}><i class="fas fa-toolbox"></i>Add to Buld</button>
            </div>
        </article>
        `;
    productGpu.innerHTML = `
        <h2 class="gpu-title">Recomended Gpu</h2>
        <article class="gpu">
            <div class="gpu-container">
                <img src="${gpu.image}" alt="">
                <h2 class="gpu-hover-name info"><span class="gpu-title">${gpu.title} </span> <br> <span>$${gpu.price}</span></h2>
                <button class="gpu-btn" data-id${gpu.id}><i class="fas fa-toolbox"></i>Add to Buld</button>
            </div>
        </article>
        `;
  }
  static displayBuild() {
    buildIcon.addEventListener("click", UI.openBuild);
    closeBtn.addEventListener("click", UI.closeBuild);
  }
  static openBuild() {
    buildCenter.classList.add("showBuild");
    buildOverlay.classList.remove("hidden");
  }
  static closeBuild() {
    buildCenter.classList.remove("showBuild");
    buildOverlay.classList.add("hidden");
  }
  static buildDom() {
    const item = JSON.parse(localStorage.getItem("path"));
    const cpuBtn = document.querySelector(".cpu-btn");
    const gpuBtn = document.querySelector(".gpu-btn");
    // console.log(cpuBtn);
    if (item === null) return;
    if (cart < 2) {
      cpuBtn.addEventListener("click", () => {
        const cpu = item[0];
        const div = document.createElement("div");
        div.classList.add("build-cpu");
        div.innerHTML = `
      <img src="${cpu.image}" alt="">
      <div class="build-info">
      <h2>${cpu.title}</h2>
      <h3>$${cpu.price}</h3>`;
        buildDom.appendChild(div);
        cpuBtn.disabled = true;
        cpuBtn.innerText = "Added to build";
        // buildTotal.innerText = Number(comPrice.innerText) =+ cpu.price
        UI.calcTotal(cpu.price);
        UI.openBuild();
        cart++;
      });

      gpuBtn.addEventListener("click", () => {
        const gpu = item[1];
        const div = document.createElement("div");
        div.classList.add("build-gpu");
        div.innerHTML = `
                <img src="${gpu.image}" alt="">
                <div class="build-info">
                <h2>${gpu.title}</h2>
                <h3>$${gpu.price}</h3>`;
        buildDom.appendChild(div);
        gpuBtn.disabled = true;
        gpuBtn.innerText = "Added To Build";
        // buildTotal.innerText = Number(comPrice.innerText) =+ gpu.price
        UI.calcTotal(gpu.price);
        UI.openBuild();
        cart++;
      });
    }
  }
  static calcTotal(number) {
    let temp = +buildTotal.innerText;
    let total = (temp += number);
    buildTotal.innerText = parseFloat(total.toFixed(2));
  }
  static buildLogic() {
    clearBuild.addEventListener("click", () => {
      while (buildDom.children.length > 1) {
        buildDom.removeChild(buildDom.children[1]);
      }
      location.reload();
      UI.closeBuild();
    });
  }
  static comUI() {
    comLogo.addEventListener("click", () => {
      comModel.classList.toggle("hidden");
    });
  }
  static comInfo(avg) {
    let item = JSON.parse(localStorage.getItem("path"));
    if (item === null) return;
    item = item.map((item) => item.id);
    const val = parseFloat(item);
    if (val === 1) {
      comCenter.innerHTML = `
            <div class="com">
                <img src="${"images/components/A520-Aorus(amd).png"}" alt="">
                <h2>A520-Aorus <br><span class="com-price">$199.99</span></h2>
            </div>
            <div class="com">
                <img src=${"images/components/8gb-ram.png"} alt="">
                <h2>8gb Ram <br><span class="com-price">$79.99</span></h2>
            </div>
            <div class="com">
                <img src=${"images/components/1tb-hdd.png"} alt="">
                <h2>1tb-hdd <br><span class="com-price">$59.99</span></h2>
            </div>
            <div class="com">
                <img src="${"images/components/Corsair-Tx650.png"}" alt="">
                <h2>Corsair Tx650 <br><span class="com-price">$109.99</span></h2>
            </div>`;
      comPrice.innerText = `449.96`;
      buildTotal.innerHTML = `449.96`;
    } else if (val === 3) {
      comCenter.innerHTML = `
            <div class="com">
                <img src="${"images/components/A520-Aorus(amd).png"}" alt="">
                <h2>Title <br><span class="com-price">$199.99</span></h2>
            </div>
            <div class="com">
                <img src=${"images/components/8gb-ram.png"} alt="">
                <h2>8gb Ram <br><span class="com-price">$79.99</span></h2>
            </div>
            <div class="com">
                <img src=${"images/components/1tb-hdd.png"} alt="">
                <h2>1tb-hdd<br><span class="com-price">$59.99</span></h2>
            </div>
            <div class="com">
                <img src="${"images/components/Corsair-Tx650.png"}" alt="">
                <h2>Corsair Tx650  <br><span class="com-price">$109.99</span></h2>
            </div>`;
      comPrice.innerText = `449.96`;
      buildTotal.innerHTML = `449.96`;
    } else if (val === 5) {
      comCenter.innerHTML = `
            <div class="com">
                <img src="${"images/components/Z490-Aorus.png"}" alt="">
                <h2>Z490-Aorus <br><span class="com-price">$399.99</span></h2>
            </div>
            <div class="com">
                <img src=${"images/components/8gb-ram.png"} alt="">
                <h2>16gb Ram <br><span class="com-price">$109.99</span></h2>
            </div>
            <div class="com">
                <img src=${"images/components/SanDisk-ssd.png"} alt="">
                <h2>SanDisk-ssd 1TB<br><span class="com-price">$89.99</span></h2>
            </div>
            <div class="com">
                <img src="${"images/components/Corsair-Tx650.png"}" alt="">
                <h2>Corsair Tx650  <br><span class="com-price">$109.99</span></h2>
            </div>`;
      comPrice.innerText = `709.99`;
      buildTotal.innerHTML = `709.99`;
    }
  }
}

class Storage {
  static clearPath() {
    localStorage.removeItem("path");
  }
  static savePath(path) {
    localStorage.setItem("path", JSON.stringify(path));
  }
  static info(html) {
    localStorage.setItem("info", html);
    // productInfo.style.opacity = 0
  }
  static title(title) {
    localStorage.setItem("title", title);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const path = new ProductBtn();
  const ui = new UI();
  ui.uiInfo();
  path.getPathBtn();
  UI.displayPath();
  UI.displayBuild();
  UI.buildDom();
  UI.buildLogic();
  UI.comUI();
  UI.comInfo();
});

const gameExplore = document.querySelectorAll(".average");
const gamePage = document.querySelector(".game-page");
const averages = document.querySelector(".game-averages");
const gamePath = document.querySelector(".game-path");

function findGame() {
  let item = localStorage.getItem("path");
  [...gameExplore].forEach((btn) => {
    if (item) {
      btn.addEventListener("click", (e) => {
        let button = e.target;
        if (button.classList.contains("first")) {
          let path = JSON.parse(localStorage.getItem("path"));
          let [select, sub] = path;
          if (select.id === 1) {
            gamePage.innerHTML = `
          <div class="game-info-center">
            <div class="top">
                <i class="fas fa-times"></i>
                <h2 class="game-name">Apex Legends</h2>
            </div>
            <img src="./images/games/Apexlegends.png" alt="">
            <button class="game-path">pathname</button>
            <h2 class="game-averages">Average Fps: 81</h2>
            <P class="game-info">Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. ... In Apex Legends, up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat.</P>
          </div>
          `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Budget";
          }
          if (select.id === 3) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Apex Legends</h2>
          </div>
          <img src="./images/games/Apexlegends.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 138</h2>
          <P class="game-info">Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. ... In Apex Legends, up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Performance";
          }
          if (select.id === 5) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Apex Legends</h2>
          </div>
          <img src="./images/games/Apexlegends.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 264</h2>
          <P class="game-info">Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. ... In Apex Legends, up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Enthusiast";
          }
          explore();
        }
        if (button.classList.contains("second")) {
          let path = JSON.parse(localStorage.getItem("path"));
          let [select, sub] = path;
          if (select.id === 1) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">C.S.G.O</h2>
          </div>
          <img src="./images/games/Csgo.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 220</h2>
          <P class="game-info">Counter-Strike: Global Offensive (CS:GO) expands upon the team-based first person shooter gameplay the original Counter-Strike pioneered when it launched in 1999. Two teams compete in multiple rounds of objective-based game modes with the goal of winning enough rounds to win the match.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Budget";
          }
          if (select.id === 3) {
            gamePage.innerHTML = `
          <div class="game-info-center">
            <div class="top">
                <i class="fas fa-times"></i>
                <h2 class="game-name">C.S.G.O</h2>
            </div>
            <img src="./images/games/Csgo.png" alt="">
            <button class="game-path">pathname</button>
            <h2 class="game-averages">Average Fps: 220</h2>
            <P class="game-info">Counter-Strike: Global Offensive (CS:GO) expands upon the team-based first person shooter gameplay the original Counter-Strike pioneered when it launched in 1999. Two teams compete in multiple rounds of objective-based game modes with the goal of winning enough rounds to win the match.</P>
          </div>
          `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Performance";
          }
          if (select.id === 5) {
            gamePage.innerHTML = `
          <div class="game-info-center">
            <div class="top">
                <i class="fas fa-times"></i>
                <h2 class="game-name">C.S.G.O</h2>
            </div>
            <img src="./images/games/Csgo.png" alt="">
            <button class="game-path">pathname</button>
            <h2 class="game-averages">Average Fps: 681</h2>
            <P class="game-info">Counter-Strike: Global Offensive (CS:GO) expands upon the team-based first person shooter gameplay the original Counter-Strike pioneered when it launched in 1999. Two teams compete in multiple rounds of objective-based game modes with the goal of winning enough rounds to win the match.</P>
          </div>
          `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Enthusiast";
          }
          explore();
        }
        if (button.classList.contains("third")) {
          let path = JSON.parse(localStorage.getItem("path"));
          let [select, sub] = path;
          if (select.id === 1) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Cyberpunk</h2>
          </div>
          <img src="./images/games/Cyberpunk.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 43</h2>
          <P class="game-info">Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. ... You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.</P>
          </div>
          `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Budget";
          }
          if (select.id === 3) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Cyberpunk</h2>
          </div>
          <img src="./images/games/Cyberpunk.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 68</h2>
          <P class="game-info">Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. ... You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Performance";
          }
          if (select.id === 5) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Cyberpunk</h2>
          </div>
          <img src="./images/games/Cyberpunk.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 145</h2>
          <P class="game-info">Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. ... You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Enthusiast";
          }
          explore();
        }
        if (button.classList.contains("forth")) {
          let path = JSON.parse(localStorage.getItem("path"));
          let [select, sub] = path;
          if (select.id === 1) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Fortnite</h2>
          </div>
          <img src="images/games/Fortnite.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 192</h2>
          <P class="game-info">Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.</P>
          </div>
          `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Budget";
          }
          if (select.id === 3) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Fortnite</h2>
          </div>
          <img src="images/games/Fortnite.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 250</h2>
          <P class="game-info">Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Performance";
          }
          if (select.id === 5) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Fortnite</h2>
          </div>
          <img src="images/games/Fortnite.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 360</h2>
          <P class="game-info">Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Enthusiast";
          }
          explore();
        }
        if (button.classList.contains("fifth")) {
          let path = JSON.parse(localStorage.getItem("path"));
          let [select, sub] = path;
          if (select.id === 1) {
            gamePage.innerHTML = `
          <div class="game-info-center">
            <div class="top">
                <i class="fas fa-times"></i>
                <h2 class="game-name">Rocketleage</h2>
            </div>
            <img src="images/games/Rocketleage.png" alt="">
            <button class="game-path">pathname</button>
            <h2 class="game-averages">Average Fps: 180</h2>
            <P class="game-info">Rocket League is a vehicular soccer video game developed and published by Psyonix. Described as "soccer, but with rocket-powered cars," Rocket League involves two teams that use rocket-powered vehicles to hit a ball into their opponent's goal and score points over the course of a match.</P>
          </div>
          `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Budget";
          }
          if (select.id === 3) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Rocketleage</h2>
          </div>
          <img src="images/games/Rocketleage.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 238</h2>
          <P class="game-info">Rocket League is a vehicular soccer video game developed and published by Psyonix. Described as "soccer, but with rocket-powered cars," Rocket League involves two teams that use rocket-powered vehicles to hit a ball into their opponent's goal and score points over the course of a match.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Performance";
          }
          if (select.id === 5) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">Rocketleage</h2>
          </div>
          <img src="images/games/Rocketleage.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 908</h2>
          <P class="game-info">Rocket League is a vehicular soccer video game developed and published by Psyonix. Described as "soccer, but with rocket-powered cars," Rocket League involves two teams that use rocket-powered vehicles to hit a ball into their opponent's goal and score points over the course of a match.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Enthusiast";
          }
          explore();
        }
        if (button.classList.contains("sixth")) {
          let path = JSON.parse(localStorage.getItem("path"));
          let [select, sub] = path;
          if (select.id === 1) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">The Witcher</h2>
          </div>
          <img src="images/games/The-Witcher.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 76</h2>
          <P class="game-info">The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Budget";
          }
          if (select.id === 3) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">The Witcher</h2>
          </div>
          <img src="images/games/The-Witcher.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 98</h2>
          <P class="game-info">The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Performance";
          }
          if (select.id === 5) {
            gamePage.innerHTML = `
        <div class="game-info-center">
          <div class="top">
              <i class="fas fa-times"></i>
              <h2 class="game-name">The Witcher</h2>
          </div>
          <img src="images/games/The-Witcher.png" alt="">
          <button class="game-path">pathname</button>
          <h2 class="game-averages">Average Fps: 178</h2>
          <P class="game-info">The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.</P>
        </div>
        `;
            document.querySelector(".game-info-center").children[2].innerText =
              "Enthusiast";
          }
          explore();
        }
      });
      function explore() {
        gamePage.classList.remove("hidden");
        gamePage.classList.remove("animtion-s");
        gamePage.classList.add("animation-e");
        buildOverlay.classList.remove("hidden");
        const close = document.querySelector(".fa-times");
        close.addEventListener("click", () => {
          gamePage.classList.add("hidden");
          buildOverlay.classList.add("hidden");
        });
      }
    }
    if (item === null) return;
  });
}
findGame();

function comModelClose() {
  let model = document.querySelector(".components-model");
  model.addEventListener("click", (e) => {
    document.querySelector(".components-model").classList.add("hidden");
  });
}
comModelClose();
function menu() {
  function openNav() {
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector(".mobile-nav").classList.toggle("active");
    });
  }
  openNav();
  const nav = document.querySelectorAll(".mobile");
  [...nav].forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let button = e.target;
      if (button.classList.contains("services")) {
        e.preventDefault();
        serviceSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (button.classList.contains("products")) {
        e.preventDefault();
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
      if (button.classList.contains("games")) {
        e.preventDefault();
        gameSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
menu();
