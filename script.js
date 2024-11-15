

const gameboard = function () {
  const row = 3;
  const col = 3;
  const board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i].push('');
    }
  }


  const getBoard = () => board;
  const addToken = (row, col, token) => {
    board[row][col] = token;
  };
  const getElement = (row, col) => {
    return board[row][col];
  };
  const checkFill = () => {
    
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === undefined || board[i][j] === null || board[i][j]==='') {
            return false; // array is not fully filled
          }
        }
      }
      return true; // array is fully filled
    
  }
  const check = () => {
    function arrayEquals(a, b) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    let sampleX = ['x', 'x', 'x'];
    let sampleO = ['o', 'o', 'o'];
    //divide 2d matrix to 8 1d matrices to check for consecutive x or o's
    let row0 = [];
    row0.push(board[0][0], board[0][1], board[0][2]);
    let row1 = [];
    row1.push(board[1][0], board[1][1], board[1][2]);
    let row2 = [];
    row2.push(board[2][0], board[2][1], board[2][2]);
    let col0 = [];
    col0.push(board[0][0], board[1][0], board[2][0]);
    let col1 = [];
    col1.push(board[0][1], board[1][1], board[2][1]);
    let col2 = [];
    col2.push(board[0][2], board[1][2], board[2][2]);
    let diag0 = [];
    diag0.push(board[0][0], board[1][1], board[2][2]);
    let diag1 = [];
    diag1.push(board[0][2], board[1][1], board[2][0]);
    //check conditions
    if (arrayEquals(row0, sampleX)) {
      return 'x';
    } else if (arrayEquals(row0, sampleO)) return 'o';
    else if (arrayEquals(row1, sampleX)) {
      return 'x';
    } else if (arrayEquals(row1, sampleO)) return 'o';
    else if (arrayEquals(row2, sampleX)) {
      return 'x';
    } else if (arrayEquals(row2, sampleO)) return 'o';
    else if (arrayEquals(col0, sampleX)) {
      return 'x';
    } else if (arrayEquals(col0, sampleO)) return 'o';
    else if (arrayEquals(col1, sampleX)) {
      return 'x';
    } else if (arrayEquals(col1, sampleO)) return 'o';
    else if (arrayEquals(col2, sampleX)) {
      return 'x';
    } else if (arrayEquals(col2, sampleO)) return 'o';
    else if (arrayEquals(diag0, sampleX)) {
      return 'x';
    } else if (arrayEquals(diag0, sampleO)) return 'o';
    else if (arrayEquals(diag1, sampleX)) {
      return 'x';
    } else if (arrayEquals(diag1, sampleO)) return 'o';
    if (checkFill()) return 'tie';
    return null;


 
  };
  return { getBoard, addToken, getElement,check,checkFill };
};

function gameController(
  playerOneName = "Player 1",
  playerTwoName = "Player 2"
) {
  const board = gameboard();
  const players = [
    {
      name: playerOneName,
      token: "x",
    },
    {
      name: playerTwoName,
      token: "o",
    },
  ];
  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  const printNewRound = () => {
    console.log(board.getBoard());
    console.log(
      `It's ${
        getActivePlayer().name
      }'s Turn,Enter coordinates where you want to place your token using 'game.playRound(row,col)'`
    );
  };
  let count = 0;
  const playRound = (row, col) => {

    if (board.getElement(row, col) == '') {
      count++;
      console.log(
        `Dropping ${getActivePlayer().name}'s token into position ${row},${col}`
      );
      board.addToken(row, col, getActivePlayer().token);
     
        if (board.check() == 'x') {
          console.log('X won i.e Player 1 has won !!! Refresh to play again');
        } else if (board.check() == 'o') {
          console.log('O i.e. Player 2 has won!!! Refresh to play again');
        } else if (board.check() == 'tie') console.log('The game tied Refresh to play again');
  
      switchPlayerTurn();
      printNewRound();
    } else console.log(`You can't override other players token lol(choose a different position(other than ${row},${col}))`);
  };
  printNewRound();
  return {
    playRound,
    getActivePlayer,
  };
}

const game = gameController();
