import colors from "./data/colors";

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let isActiveColorSwitch = false;
let colorSwitch;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = (colors) => {
  let min = 0;
  let max = colors.length - 1;
  return colors[randomIntegerFromInterval(min, max)];
};

const bodyColor = (el) => {
  document.body.style.backgroundColor = randomColor(colors);
};

startBtn.addEventListener("click", () => {
  if (isActiveColorSwitch) {
    return;
  }
  colorSwitch = setInterval(() => bodyColor(colors), 1000);
  isActiveColorSwitch = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(colorSwitch);
  colorSwitch = null;
  isActiveColorSwitch = false;
});
