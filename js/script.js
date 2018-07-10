// Layout of board map
const gameMaplvl1 = [
    [0,0,0,0,0,1,0,0,2,1,0,2],
    [0,1,0,1,1,1,0,1,1,1,0,1],
    [0,1,0,0,0,1,0,1,0,0,0,1],
    [0,1,1,1,0,1,0,1,1,0,1,1],
    [0,1,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,1,1,0,0,1,1,1,0],
    [0,1,0,0,0,1,1,0,1,2,1,0],
    [0,1,1,1,0,0,0,0,1,0,1,0],
    [0,1,2,1,0,1,1,1,1,0,1,0],
    [0,0,0,1,0,0,0,0,0,0,1,3],
    [0,1,1,1,1,0,1,0,1,1,1,1],
    [0,0,0,2,1,2,1,0,0,0,0,2]
]; 

// index code for each map object
let gameIndexCode = {
    0: 'path',
    1: 'wall',
    2: 'token',
    3: 'door'
};

// Creates grid for game map
// Uses gameIndexCode to translate the # classes to string values
let gameboard = document.querySelector('#gameBoard');
function createGameLevel() { 
    for ( let i = 0; i < gameMaplvl1.length; i++){
        for ( let j = 0; j < gameMaplvl1[i].length; j++) {
            
            let gameBoxes = document.createElement('div');
            gameBoxes.className = "square";
            gameBoxes.classList.add(gameIndexCode[gameMaplvl1[i][j]]);
            gameboard.appendChild(gameBoxes);
            gameboard.style.position = "relative"
        }
    } 
}
createGameLevel();


// Start position for character
const student = {
    x: 0,
    y: 0
}

// Positions that are walls for the maze:
let walls = [
    {x: 5, y: 0},
    {x: 9, y: 0},
    {x: 1, y: 1},
    {x: 3, y: 1},
    {x: 4, y: 1},
    {x: 5, y: 1},
    {x: 7, y: 1},
    {x: 8, y: 1},
    {x: 9, y: 1},
    {x: 11, y: 1},
    {x: 1, y: 2},
    {x: 5, y: 2},
    {x: 7, y: 2},
    {x: 11, y: 2},
    {x: 1, y: 3},
    {x: 2, y: 3},
    {x: 3, y: 3},
    {x: 5, y: 3},
    {x: 7, y: 3},
    {x: 8, y: 3},
    {x: 10, y: 3},
    {x: 11, y: 3},
    {x: 1, y: 4},
    {x: 1, y: 5},
    {x: 3, y: 5},
    {x: 4, y: 5},
    {x: 5, y: 5},
    {x: 8, y: 5},
    {x: 9, y: 5},
    {x: 10, y: 5},
    {x: 1, y: 6},
    {x: 5, y: 6},
    {x: 6, y: 6},
    {x: 8, y: 6},
    {x: 10, y: 6},
    {x: 1, y: 7},
    {x: 2, y: 7},
    {x: 3, y: 7},
    {x: 8, y: 7},
    {x: 10, y: 7},
    {x: 1, y: 8},
    {x: 3, y: 8},
    {x: 5, y: 8},
    {x: 6, y: 8},
    {x: 7, y: 8},
    {x: 8, y: 8},
    {x: 10, y: 8},
    {x: 3, y: 9},
    {x: 10, y: 9},
    {x: 1, y: 10},
    {x: 2, y: 10},
    {x: 3, y: 10},
    {x: 4, y: 10},
    {x: 6, y: 10},
    {x: 8, y: 10},
    {x: 9, y: 10},
    {x: 10, y: 10},
    {x: 11, y: 10},
    {x: 4, y: 11},
    {x: 6, y: 11},
];


// Create Token for the Maze:
let tokens = [
    {x: 8, y: 0},
    {x: 11, y: 0},
    {x: 9, y: 6},
    {x: 2, y: 8},
    {x: 3, y: 11},
    {x: 5, y: 11},
    {x: 11, y: 11},
];

// Creates the Door to the Maze:
let door = [
    {x: 11, y: 9}
]

// Code reference: Eric Lewis
// Wall check @ given coordinate:
const isThereAWall = (x, y) => {
    for (let i = 0; i < walls.length; i += 1){
        const wall = walls[i];
        if (wall.x === x && wall.y === y){
            return true;
        }
    }
    return false;
};

// Token check @ given coordinate:
const isThereToken = (x,y) => {
    for (let j = 0; j < tokens.length; j++){
        const token = tokens[j];
        if (token.x === x && token.y === y){
            return true;    
        }
    }
    return false;
};

// This is layout of maze
const gridLayout = (x,y) => {
    if ( x < 0 || y < 0 || x > 11 || y > 11){
        return false;
    }
    return true;
};

// Check if spot is able to move there
const canMoveTo = (x,y) => {
    if (!gridLayout(x,y)){
        // console.log('gridlayouworks');
        return false;
    }
    if (isThereAWall(x,y)){
        // console.log('istherewallworks');
        return false;
    }
    return true;
}

// This array will hold the images on the board
let boardImgArray = [];

// Move character around grid by px of 41x41;
const movingCharacter = (x, y) => {
    const student = document.querySelector('#GAdude');
    student.style.top = (y * 41).toString() + 'px';
    student.style.left = (x * 41).toString() + 'px';
// If you're on the grid AND there is a token AND specifically at these X AND Y coordinates:
// STYLE this specific img like this: 
    if (canMoveTo (x,y) === isThereToken(x,y) && x === 8 && y === 0) {
        boardImgArray.pop();
        const inventory = document.getElementById('tokenInventory');
        tok1img.style.display = "inline-block";
        tok1img.style.height = "50px";
        tok1img.style.width = "50px";
        tok1img.style.margin = "0 auto";
        inventory.appendChild(tok1img);
    } 
    else if (canMoveTo(x,y) === isThereToken(x, y) && x === 11 && y === 0) {
        boardImgArray.pop();
        const inventory = document.getElementById('tokenInventory');
        tok2img.style.display = "inline-block";
        tok2img.style.height = "50px";
        tok2img.style.width = "50px";
        tok2img.style.margin = "0 auto";
        inventory.appendChild(tok2img);
    }
    else if (canMoveTo(x,y) === isThereToken(x,y) && x === 9 && y === 6){
        boardImgArray.pop();
        tok3img.style.display = "none";
        const inventory = document.getElementById('tokenInventory');
        tok3img.style.display = "inline-block";
        tok3img.style.height = "50px";
        tok3img.style.width = "50px";
        tok3img.style.margin = "0 auto";
        inventory.appendChild(tok3img);
    }
    else if (canMoveTo(x,y) === isThereToken(x,y) && x === 2 && y === 8){
        boardImgArray.pop();
        const inventory = document.getElementById('tokenInventory');
        tok4img.style.display = "inline-block";
        tok4img.style.height = "50px";
        tok4img.style.width = "50px";
        tok4img.style.margin = "0 auto";
        inventory.appendChild(tok4img);
    }
    else if (canMoveTo(x,y) === isThereToken(x,y) && x === 3 && y === 11){
        boardImgArray.pop();
        const inventory = document.getElementById('tokenInventory');
        tok5img.style.display = "inline-block";
        tok5img.style.height = "50px";
        tok5img.style.width = "50px";
        tok5img.style.margin = "0 auto";
        inventory.appendChild(tok5img);

    }
    else if (canMoveTo(x,y) === isThereToken(x,y) && x === 5 && y === 11){
        boardImgArray.pop();
        const inventory = document.getElementById('tokenInventory');
        tok6img.style.display = "inline-block";
        tok6img.style.height = "50px";
        tok6img.style.width = "50px";
        tok6img.style.margin = "0 auto";
        inventory.appendChild(tok6img);
    }
    else if (canMoveTo(x,y) === isThereToken(x,y) && x === 11 && y === 11){
        boardImgArray.pop();
        const inventory = document.getElementById('tokenInventory');
        tok7img.style.display = "inline-block";
        tok7img.style.height = "50px";
        tok7img.style.width = "50px";
        tok7img.style.margin = "0 auto";
        inventory.appendChild(tok7img);
    } 
    else if((boardImgArray.length !== 0) && (x === 11 && y ===9)){
        let collectmessage = document.getElementById('unitheading');
        collectmessage.innerHTML = "GO STUDY MORE, COLLECT MO TOKENS";
        collectmessage.style.color = "red";
    }
    // functionality for winning
    else if ((boardImgArray.length === 0) && (x === 11 && y === 9)) {
        let display = document.querySelector('#displaymessage');
        display.style.display = "block";
        display.style.animation = "flashing 3s infinite";
    }
    else if (boardImgArray.length === 0){
        const gameSquares = document.querySelectorAll('.square');
        gameSquares[119].style.animation = "flashing 3s infinite";
    }
  };



// Move the character left one tile, if possible.
const moveLeft = () => {
    if (canMoveTo(student.x - 1, student.y)) {
      student.x -= 1;
      movingCharacter(student.x, student.y);
    }
  }
  
// Move the character right one tile, if possible.
  const moveRight = () => {
    if (canMoveTo(student.x + 1, student.y)) {
        student.x += 1; 
      movingCharacter(student.x, student.y);
    }
  }
  
// Move the character up one tile, if possible.
  const moveUp = () => {
    if (canMoveTo(student.x, student.y - 1)) {
        student.y -= 1;
      movingCharacter(student.x, student.y);
    }
  };
  
// Move the character down one tile, if possible.
  const moveDown = () => {
    if (canMoveTo(student.x, student.y + 1)) {
      student.y += 1;
      movingCharacter(student.x, student.y);
    }
  };


  document.body.addEventListener('keydown', evt => {
    const keyCode = evt.keyCode;
    // If the user pressed any directional keys, 
    // prevent the browser default of scrolling the page.
    if ([37, 38, 39, 40].includes(keyCode)) {
      evt.preventDefault();
    }
    // Attempt to move the character in the direction 
    switch (keyCode) {
      case 37:
        moveLeft();
        break;
      case 38:
        moveUp();
        break;
      case 39:
        moveRight();
        break;
      case 40:
        moveDown();
        break;
    }
  });

// Create Token1 for position Token[0]:
const toktok = document.querySelectorAll(".token");
const tok1img = document.createElement('img');
tok1img.src = "./img/html5.png";
tok1img.style.height = "70%";
tok1img.style.width = "70%";
tok1img.style.marginLeft = "13%";
tok1img.style.marginTop = "13%";
tok1img.style.borderRadius = "20%";
tok1img.style.border = "1px solid black";
tok1img.style.backgroundColor = "rgba(0,255,0,0.4)"
boardImgArray.push(tok1img)
let tok1 = toktok[0];
tok1.appendChild(tok1img);

// Create Token2 for position Token[1]:
const tok2img = document.createElement('img');
tok2img.src = "./img/css3.png";
tok2img.style.height = "70%";
tok2img.style.width = "70%";
tok2img.style.marginLeft = "13%";
tok2img.style.marginTop = "13%";
tok2img.style.borderRadius = "20%";
tok2img.style.border = "1px solid black";
tok2img.style.backgroundColor = "rgba(0,255,0,0.4)";
boardImgArray.push(tok2img);
let tok2 = toktok[1];
tok2.appendChild(tok2img);

// Create Token3 for position Token[2]:
const tok3img = document.createElement('img');
tok3img.src = "./img/dom.png";
tok3img.style.height = "70%";
tok3img.style.width = "70%";
tok3img.style.marginLeft = "13%";
tok3img.style.marginTop = "13%";
tok3img.style.borderRadius = "20%";
tok3img.style.border = "1px solid black";
tok3img.style.backgroundColor = "rgba(0,255,0,0.4)";
boardImgArray.push(tok3img);
let tok3 = toktok[2];
tok3.appendChild(tok3img);

// Create Token4 for position Token[3]:
const tok4img = document.createElement('img');
tok4img.src = "./img/JS.png";
tok4img.style.height = "70%";
tok4img.style.width = "70%";
tok4img.style.marginLeft = "13%";
tok4img.style.marginTop = "13%";
tok4img.style.borderRadius = "20%";
tok4img.style.border = "1px solid black";
tok4img.style.backgroundColor = "rgba(0,255,0,0.4)";
boardImgArray.push(tok4img);
let tok4 = toktok[3];
tok4.appendChild(tok4img);

// Create Token5 for position Token[4]:
const tok5img = document.createElement('img');
tok5img.src = "./img/coffee.png";
tok5img.style.height = "70%";
tok5img.style.width = "70%";
tok5img.style.marginLeft = "13%";
tok5img.style.marginTop = "13%";
tok5img.style.borderRadius = "20%";
tok5img.style.border = "1px solid black";
tok5img.style.backgroundColor = "rgba(0,255,0,0.4)";
boardImgArray.push(tok5img);
let tok5 = toktok[4];
tok5.appendChild(tok5img);

// Create Token 6 for position Token[5]:
const tok6img = document.createElement('img');
tok6img.src = "./img/github.png";
tok6img.style.height = "70%";
tok6img.style.width = "70%";
tok6img.style.marginLeft = "13%";
tok6img.style.marginTop = "13%";
tok6img.style.borderRadius = "20%";
tok6img.style.border = "1px solid black";
tok6img.style.backgroundColor = "rgba(0,255,0,0.4)";
boardImgArray.push(tok6img);
let tok6 = toktok[5];
tok6.appendChild(tok6img);

// Create Token 7 for position Token[6]:
const tok7img = document.createElement('img');
tok7img.src = "./img/terminal.png";
tok7img.style.height = "70%";
tok7img.style.width = "70%";
tok7img.style.marginLeft = "13%";
tok7img.style.marginTop = "13%";
tok7img.style.borderRadius = "20%";
tok7img.style.border = "1px solid black";
tok7img.style.backgroundColor = "rgba(0,255,0,0.4)";
boardImgArray.push(tok7img);
let tok7 = toktok[6];
tok7.appendChild(tok7img);

// Create Portal for door[0]
const doorimg = document.createElement('img');
doorimg.src = "./img/fatarrowportal.png";
doorimg.style.display = "none";
doorimg.style.height = "70%";
doorimg.style.width = "70%";
doorimg.style.marginLeft = "13%";
doorimg.style.marginTop = "13%";
doorimg.style.borderRadius = "20%";
doorimg.style.border = "1px solid black";
doorimg.style.backgroundColor = "rgba(0,255,0,0.4)";
let portal = document.querySelector(".door");
portal.style.textAlign = "center";
portal.appendChild(doorimg);

