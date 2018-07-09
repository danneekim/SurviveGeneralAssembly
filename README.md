# GASurvival
- Is a simple dungeon maze game, where the dungeon is depicted as General Assembly.
- The individual maps of the dungeon are the different units covered throughout the WDI course.
- The tokens that need to be collected before advancing to the next stage - are relevant topics covered in that specific unit.

# Technical Discussion:

### HTML5: 
The game was created trying to use minimum HTML elements - most of the game is coded by manipulating the DOM with Javascript functions

### CSS3:
The game relies on CSS styling such as flexbox and CSS3 keyframe animations to render the general game board and other related effects.

### JavaScript:
The entire logic behind the game was created using JavaScript in order to create elements within the DOM.

# JavaScript Explanation:

### Creating the Gameboard:
```javascript
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

let gameIndexCode = {
    0: 'path',
    1: 'wall',
    2: 'token',
    3: 'door'
};

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
```
The first level was created by hardcoding numerical values for the arrays within the array of gameMaplvl1.
I created a gameIndexCode that corresponded for each of the numerical values in gameMaplvl1[].
I created a function called createGameLevel() which was a for loop within a for loop, in order to iterate through each individual object of the arrays within an array. 
  - As I was iterating through - I created divs for each object and game them a class of ".square"
  - In addition - class names of: ".path" / ".wall" / ".token" / ".door" were added using the gameIndexCode to denoted their respective class distinction.  (Also made it alot easier to style them individually in CSS)
  - Lastly I appended these divs into the HTML #gameBoard div.

```javascript
let boardImgArray = [];

const movingCharacter = (x, y) => {
    const student = document.querySelector('#GAdude');
    student.style.top = (y * 41).toString() + 'px';
    student.style.left = (x * 41).toString() + 'px';

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
```
My movingCharacter function that checks for ALOT of things.
In hindsight, I wish I hadn't writen all my functionality into one gigantic function but where it stands now I'm not certain to how it could seperate into multiple functions.

1. It allows the character to move 41px up and down the X & Y axis.
1. It checks if there is a token at that specified location to be collected:
    * If true - then pops "a token element" out of boardImgArray[];
    * Then styles the specified token and appends it to the inventory
1. It checks for win/loss:
    * If all the tokens are not collected (which is checked using the length of the boardImgArray)
    * If the boardImgArray is not 0 (because it would be 0 if all tokens were collected and "popped out") then displays message.
    * If the boardImgArray is 0 (and all tokens have been "popped out" and collected) then the portal square changes color and after      moving to specified location of portal will display message that you to move onto the next unit.




# Resources:
Used these resources as a reference to finding out how to check for grid-based collision detection and understanding keyCode movement.
- http://absorbing-property.glitch.me/
- https://wakeful-baritone.glitch.me/
