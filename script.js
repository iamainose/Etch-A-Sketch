let board = document.querySelector(".board");
let slider = document.getElementById("sliderRange");
let currentSize = 16;
let color = "black";

function boardSize(num) {
  board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num * num; i++) {
    let squares = document.createElement("div");
    squares.classList.add("grid");
    squares.addEventListener("mousemove", random);
    board.appendChild(squares);
  }
}
boardSize(currentSize);

function sizeGrid(num) {
  let demo = document.getElementById("demo");
  demo.textContent = `${num} x ${num}`;
  boardSize(num);
}

function changeSize(num) {
  board.innerHTML = "";
  sizeGrid(num);
}

slider.addEventListener("change", (e) => {
  changeSize(e.target.value);
});

function choice(choice) {
  color = choice;
}

function random() {
  if (color === "random") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `RGB(${randomR}, ${randomG}, ${randomB})`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("black")) {
        color = "black";
      } else if (button.classList.contains("gray")) {
        color = "lightgray";
      } else if (button.classList.contains("white")) {
        color = "white";
      } else if (button.classList.contains("reset")) {
        board = document.querySelector(".board");
        let squares = board.querySelectorAll("div");
        squares.forEach((div) => (div.style.backgroundColor = "lightgray"));
      }
    });
  });
}
changeColor();


