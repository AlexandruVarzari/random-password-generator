const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordElFirst = document.getElementById("password-first");
let passwordElSecond = document.getElementById("password-second");
let btnEl = document.getElementById("btn-el");

let passwordLength = 15;

function getRandomChar() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

btnEl.addEventListener("click", function getRandomPassword() {
  let randomPasswordFirst = "";
  let randomPasswordSecond = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPasswordFirst += getRandomChar();
    randomPasswordSecond += getRandomChar();
  }
  passwordElFirst.textContent = randomPasswordFirst;
  passwordElSecond.textContent = randomPasswordSecond;
});

passwordElFirst.onclick = function () {
  document.execCommand("copy");
};

passwordElFirst.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordElFirst.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
