let gameboard = document.querySelector('#gameBoard');
function createGameLevel() { 

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

    for ( let i = 0; i < gameMaplvl1.length; i++){
        for ( let j = 0; j < gameMaplvl1[i].length; j++) {
            
            let gameBoxes = document.createElement('div');
            gameBoxes.className = "square";
            gameBoxes.classList.add(gameMaplvl1[i][j]);
            gameboard.appendChild(gameBoxes);
            gameboard.style.position = "relative"
        }
    } 
}
createGameLevel();

let character = document.createElement('img');
character.src = "./lambda.png";
character.style.position = "absolute";
character.style.height = "40px";
character.style.width = "40px";
gameboard.appendChild(character);
console.log(character);






    // let gameIndexCode = {
    //     0: 'path',
    //     1: 'wall',
    //     2: 'token',
    //     3: 'door'
    // };