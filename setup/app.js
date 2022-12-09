const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector("color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random(4) * colors.length);
}
