let gameboard = document.querySelector('#gameBoard');
let gameMaplvl1 = [
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

function moveStudent (x,y){
    let GAdude = document.getElementById('GAdude')
    GAdude.style.left = (x * 41).toString() + 'px';
    GAdude.style.top = (y * 41).toString() + 'px';
}

moveStudent(1,1);



document.onkeydown = function(e){
    let student = document.getElementById('GAdude');
    if (e.keyCode == 37){
        //LEFT
        if (gameMaplvl1[student.y][student.x -1] != 1){
             student.x--;
        }
    }
    if (e.keyCode == 39){
        //RIGHT
        if (gameMaplvl1[student.y][student.x +1] != 1){
        student.x++;
        }
    }
    if (e.keyCode == 40){
        //DOWN
        if (gameMaplvl1[student.y+1][student.x] !=1){
            student.y++;
        }
    }
    if (e.keyCode == 38){
        //UP
        if (gameMaplvl1[student.y-1][student.x] != 1){
            student.y--;
        }
    }
}



