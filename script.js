
// console.log('the array is empty add elements by adding to their locations as gameboard[i][j] run checkgameboard to check if someone wins');



// function createGameboard() {
//     const row = 3;
//     const col = 3;
//     const board = [];
//     for (let i = 0; i < row; i++) {
//         board[i] = [];
//         for (let j = 0; j < col; j++) {
//             board[i].push(0);
//         }

//     }
//     // const getBoard = () => board;
//     return board; 
// }
// console.log(createGameboard());


const gameboard = function(){
        const row = 3;
        const col = 3;
        const board = [];
        for (let i = 0; i < row; i++) {
            board[i] = [];
            for (let j = 0; j < col; j++) {
                board[i].push(0);
            }
    
        }
    console.log(typeof (board));
    
        const getBoard = () => board;
        const addToken = (row,col,token) => {
            board[row][col] = token;
    }   
    const getElement = (row,col) => {
        return board[row][col];
    }
    const check = (row, col)=>{
        let element = board[row][col];
        if (row>=0 && row<=2 && col>=0 && col<=2 ) {
            if (
                element === board[row-1][col] && element ===[row+1][col]
            ) {
                
            }
        }
    }
    // const wincondition = function(array){
    //     let element = array[0];
    //     let status;
    //         if (element === array[1] && element === array[2]) {
    //              status = true;
    //                 let winningLine = array;
    //                 return { element, status, winningLine };
    //         } else {
    //             status = false
    //             return status;     
    //             }
    //     }
    
    
    // function wincondition(gameboardLine) {
    //     if (gameboardLine[0] !== '') {
    //         let element = gameboardLine[0];
    //         let status;
    //         if (element === gameboardLine[1] && element === gameboardLine[2]) {
    //              status = true;
    //                 let winningLine = gameboardLine;
    //                 return { element, status, winningLine };
    //         } else {
    //             status = false
    //             return status;     
    //             }
    //     }
            
        
    // }
    // // console.log(wincondition(gameboard[2]));
    // function check(board) {
    //     const row0 = board[0];
    //     const row1 = board[1];
    //     const row2 = board[2];
    //     const col0 = board.map(row => row[0]);
    //     const col1 = board.map(row => row[1]);
    //     const col2 = board.map(row => row[2]);
    //     const diag0 = [];
    //     diag0.push(board[0][0], board[1][1], board[2][2]);
    //     const diag1 = [];
    //     diag1.push(board[0][2], board[1][1], board[2][0]);
    //     let result;
    //     if ((result = wincondition(row0)).status) {
    //         return  `Won on row0'${result.element}`;
    //     }
    //     if ((result=wincondition(row1)).status) {
    //         return `Won on row1 with ${result.element}`;
    //     }
    //     if ((result=wincondition(row2)).status) {
    //         return `Won on row2 with ${result.element}`;
    //     }
    //     if ((result = wincondition(col0)).status) {
    //         return `Won on col0 with ${result.element}`;
    //     }
    //     if ((result = wincondition(col1)).status) {
    //         return `Won on col1 with ${result.element}`;
    //     }
    //     if ((result = wincondition(col2)).status) {
    //         return `Won on col2 with ${result.element}`
    //     }
    //     if ((result = wincondition(diag0)).status) {
    //         return `Won on diag0 with ${result.element}`;
    //     }
    //     if ((result = wincondition(diag1)).status) {
    //         return `Won on diag1 with ${result.element}`;
    //     }
    //     else {
    //         return 'Tie'
    //     }
    
    // }







    return {getBoard,addToken,getElement}; 
    }  


function gameController(
    playerOneName = "Player 1",
    playerTwoName = "Player 2"
) {
    
    const board = gameboard();
    const players = [
        {
            name: playerOneName,
            token: 'x'
        },
        {
            name: playerTwoName,
            token: 'o'
        }
    ]
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }
    const getActivePlayer = () => activePlayer;
    const printNewRound = () => {
        console.log(board.getBoard());
        console.log(`It's ${getActivePlayer().name}'s Turn,Enter coordinates where you want to place your token using 'game.playRound(row,col)'`);
    };
    const playRound = (row, col) => {

            console.log(
                `Dropping ${getActivePlayer().name}'s token into position ${row},${col}`
            );
        console.log(typeof (board));
        board.addToken(row, col, getActivePlayer().token);
        console.log(board.getElement(row,col));
        // console.log(board.check());
            switchPlayerTurn();
            printNewRound();

    };
    printNewRound();
    return {
        playRound,
        getActivePlayer
    }
}

const game = gameController();

// console.log(gameboard.createGameboard());
// let gameboard = gameboardObject.gameboard;
// console.log('board is '+ gameboard );
// console.log(gameboard[2]);
// console.log(wincondition(gameboard[1])); 



// console.log(check(gameboard));
