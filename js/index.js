let gameboard = document.querySelector('#gameBoard');
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
    [0,0,0,2,1,2,1,0,0,0,0,1]
]; 

const student = {
    x: 0,
    y: 0
}


let gameIndexCode = {
    0: 'path',
    1: 'wall',
    2: 'token',
    3: 'door'
};

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
