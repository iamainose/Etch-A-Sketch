let color = "black";
let board = document.querySelector('.board');
let black = document.querySelector('#black');
let white = document.querySelector('#white');
let gray = document.querySelector('#gray');
let reset = document.querySelector('#reset');
let random = document.querySelector('#random');

function boardSize(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.appendChild(square);
    }
}
boardSize(16);


var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.style.color = "white";
output.innerHTML = rangeslider.value;
  
rangeslider.oninput = function() {
  output.innerHTML = this.value;
}

function changeSize(input) {
   boardSize(input);
}

function changeColor() {
    black.addEventListener('click', function() {
        color = "black";
   })
   white.addEventListener('click', function() {
        color = 'white';
   })
   gray.addEventListener('click', function() {
        color = 'gray';
   })
   random.addEventListener('click', function() {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`;
   })
}
changeColor();

function colorSquare() {
        this.style.backgroundColor = color;
}

function resetBoard() {
    document.querySelector('#reset').addEventListener('click', function() {
         board = document.querySelector('.board'); 
         let squares = board.querySelectorAll('div');
         squares.forEach((div) => div.style.backgroundColor = 'white');
    })
}
resetBoard();


