const container =document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const button = document.getElementById("clear-button");

defaultgrid();

function defaultgrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cell";
        }
        
    }
}

function colourDiv() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].setAttribute("style", "background-color: orange")
        })
    }
}

colourDiv();


function newGrid(userInput) {
    makeRows(userInput);
    makeColumns(userInput);
    colourDiv();
}

button.addEventListener('click', () => {
    let userInput = prompt ('Enter the size of your new frid! (Below 100 squares)');
    if (isNaN(userInput)) {
        let userInput = prompt('Please enter a valid number:');
        newGrid(userInput);
    } else if (userInput > 100) {
        let userInput = prompt('Please enter a valid number:');
        newGrid(userInput);
    } else {
        newGrid(userInput);
    }
})
