
// console.log('the array is empty add elements by adding to their locations as gameboard[i][j] run checkgameboard to check if someone wins');



const gameboardObject = {
    // rows: 3,
    // cols: 3,
    gameboard: [
        ['o', 'x', 'x'],
        ['x', 'x', 'o'],
        ['x', 'o', 'o']
    ],    
    
}
let gameboard = gameboardObject.gameboard;
console.log('board is '+ gameboard );
console.log(gameboard[2]);
console.log(wincondition(gameboard[1])); 


function wincondition(gameboardLine) {
    let element = gameboardLine[0];
    let status;
    if (element === gameboardLine[1] && element === gameboardLine[2]) {
         status = true;
            let winningLine = gameboardLine;
            return { element, status,winningLine };
    } else {
        status = false
        return status;     
        }
        
    
}
console.log(wincondition(gameboard[2]));
function check(gameboard) {
    const row0 = gameboard[0];
    const row1 = gameboard[1];
    const row2 = gameboard[2];
    const col0 = gameboard.map(row => row[0]);
    const col1 = gameboard.map(row => row[1]);
    const col2 = gameboard.map(row => row[2]);
    const diag0 = [];
    diag0.push(gameboard[0][0], gameboard[1][1], gameboard[2][2]);
    const diag1 = [];
    diag1.push(gameboard[0][2], gameboard[1][1], gameboard[2][0]);
    let result;
    if ((result = wincondition(row0)).status) {
        return  `Won on row0'${result.element}`;
    }
    if ((result=wincondition(row1)).status) {
        return `Won on row1 with ${result.element}`;
    }
    if ((result=wincondition(row2)).status) {
        return `Won on row2 with ${result.element}`;
    }
    if ((result = wincondition(col0)).status) {
        return `Won on col0 with ${result.element}`;
    }
    if ((result = wincondition(col1)).status) {
        return `Won on col1 with ${result.element}`;
    }
    if ((result = wincondition(col2)).status) {
        return `Won on col2 with ${result.element}`
    }
    if ((result = wincondition(diag0)).status) {
        return `Won on diag0 with ${result.element}`;
    }
    if ((result = wincondition(diag1)).status) {
        return `Won on diag1 with ${result.element}`;
    }
    else {
        return 'Tie'
    }

}
console.log(check(gameboard));


//ignore beyond this point
// console.log(gameboard);
// console.log(array);
// function checkTurn() {
//     let p1t = player1.turn;
//     let p2t = player2.turn;
//     console.log(player1,player2);
//     for (let i = 0; i < 9; i++) {
//         if (i % 2 === 0) {
//             console.log('Player 1s turn');
//             p1t = true;
//             return p1t;
//         } else {
//             console.log('Player 2s turn');
//             p2t = true;
//             return p2t;
//         }
        
        
//     } 
//     return { player1.turn, player2.turn };
    
// }

//ignore for now
function createPlayer(name) {
    const playerName = name;
    let score = 0;
    let turn;
    return { playerName, score, turn };
    
}
const player1 = createPlayer('axyl');
const player2 = createPlayer('bot');


function playgame() {
    for (let index = 0; index < 9; index++) {
        console.log(`Enter ${index}th term`);
        
    }
}