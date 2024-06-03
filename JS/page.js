function getRandomImage(element) {
  const picture = {
    "💧": ["water1.png", "water2.png", "water3.png"],
    "🔥": ["fire1.png", "fire2.png", "fire3.png"],
    "🗿": ["earth1.png", "earth2.png", "earth3.png"],
    "☁️": ["air1.png", "air2.png", "air3.png"],
  };
  const elementPictures = picture[element];
  const randomIndex = Math.floor(Math.random() * elementPictures.length);
  return elementPictures[randomIndex];
}

function setElementDetails() {
  const params = new URLSearchParams(window.location.search);
  const phrase = params.get("phrase") || "null";
  const element = params.get("element") || "null";

  document.getElementById("phrase").innerText = "Phrase: " + phrase;
  document.getElementById("element").innerText = "Element: " + element;

  const elementColorMap = {
    "💧": "#add8e6",
    "🔥": "#ff4500",
    "🗿": "#808080",
    "☁️": "#f0e68c",
  };
  document.body.style.backgroundColor = elementColorMap[element];

  const imageUrl = getRandomImage(element);
  document.getElementById("main-image").src = `picture/${imageUrl}`;
}

window.onload = setElementDetails;
