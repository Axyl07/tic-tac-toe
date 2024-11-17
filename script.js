const dialog = document.querySelector("dialog");
const open = document.querySelector(".openForm");
open.addEventListener('click', () => {
    dialog.show();
})

const input = document.querySelector('input');
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    const p1name = document.querySelector('#p1name');
    const p2name = document.querySelector('#p2name');
    if (p1name.value === '' || p2name.value === '') {
    } else {
      const player1name = p1name.value;
      const player2name = p2name.value;
      display(player1name, player2name);

      
        dialog.close();
    }
})

const gameboard = (function () {
  const row = 3;
  const col = 3;
  const board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i].push("");
    }
  }

  const getBoard = () => board;
  const getRow = () => row;
  const getCol = () => col;
  const addToken = (row, col, token) => {
    board[row][col] = token;
  };
  const getElement = (row, col) => {
    return board[row][col];
  };
  const checkFill = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (
          board[i][j] === undefined ||
          board[i][j] === null ||
          board[i][j] === ""
        ) {
          return false; // array is not fully filled
        }
      }
    }
    return true; // array is fully filled
  };
  const check = () => {
    function arrayEquals(a, b) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    let sampleX = ["X", "X", "X"];
    let sampleO = ["O", "O", "O"];
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
      return "X";
    } else if (arrayEquals(row0, sampleO)) return "O";
    else if (arrayEquals(row1, sampleX)) {
      return "X";
    } else if (arrayEquals(row1, sampleO)) return "O";
    else if (arrayEquals(row2, sampleX)) {
      return "X";
    } else if (arrayEquals(row2, sampleO)) return "O";
    else if (arrayEquals(col0, sampleX)) {
      return "X";
    } else if (arrayEquals(col0, sampleO)) return "O";
    else if (arrayEquals(col1, sampleX)) {
      return "X";
    } else if (arrayEquals(col1, sampleO)) return "O";
    else if (arrayEquals(col2, sampleX)) {
      return "X";
    } else if (arrayEquals(col2, sampleO)) return "O";
    else if (arrayEquals(diag0, sampleX)) {
      return "X";
    } else if (arrayEquals(diag0, sampleO)) return "O";
    else if (arrayEquals(diag1, sampleX)) {
      return "X";
    } else if (arrayEquals(diag1, sampleO)) return "O";
    if (checkFill()) return "tie";
    return null;
  };
  return { getRow, getCol, getBoard, addToken, getElement, check, checkFill };
})();

function gameController(playerOneName = "x", playerTwoName = "o") {
  const players = [
    {
      name: playerOneName,
      token: "X",
      score: 0,
    },
    {
      name: playerTwoName,
      token: "O",
      score: 0,
    },
  ];
  // const board = gameboard();
  // console.log(players);
  // let p1score = players[0].score;
  // let p2score = players[1].score;

  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  const printNewRound = () => {
    console.log(gameboard.getBoard());
    console.log(
      `It's ${
        getActivePlayer().name
      }'s Turn,Enter coordinates where you want to place your token using 'game.playRound(row,col)'`
    );
  };

  const playRound = (row, col) => {
    if (gameboard.getElement(row, col) == "") {
      console.log(
        `Dropping ${getActivePlayer().name}'s token into position ${row},${col}`
      );
      gameboard.addToken(row, col, getActivePlayer().token);
      //check for win
      if (gameboard.check() == "X") {
        console.log("X won i.e Player 1 has won !!! Refresh to play again");
        return "X";
      } else if (gameboard.check() == "O") {
        console.log("O i.e. Player 2 has won!!! Refresh to play again");
        return "O";
      } else if (gameboard.check() == "tie") {
        console.log("The game tied Refresh to play again");
        return "tie";
      }

      switchPlayerTurn();
      printNewRound();
      return null;
    } else
      console.log(
        `You can't override other players token lol(choose a different position(other than ${row},${col}))`
      );
  };
  printNewRound();
  return {
    playRound,
    getActivePlayer,
  };
}

const container = document.querySelector(".container");
container.style.opacity = '0';

function display(p1name, p2name) {
  container.style.opacity = '1';
  const game = gameController(p1name,p2name);
  const playerTurnDiv = document.querySelector(".turn");
  playerTurnDiv.textContent = `${p1name} is 'X' and ${p2name} is 'O', Let's Play!!!`;
  const board = document.querySelector('.board');
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    const rowIndex = parseInt(btn.dataset.rowIndex);
    const colIndex = parseInt(btn.dataset.colIndex);
    btn.addEventListener("click", () => {
      console.log(rowIndex, colIndex);
      if (btn.textContent == "") {
        btn.textContent = game.getActivePlayer().token;
      } else return;
      const result = game.playRound(rowIndex, colIndex);
      if (result == "X") {
        playerTurnDiv.textContent =
          `${p1name} has won !!! Press Reset to play again`;
        btns.forEach((btn) => {
            btn.style.boxShadow = '1px 1px 50px limegreen'
          })
  
        return;
      }
      if (result == "O") {
        playerTurnDiv.textContent =
          `${p2name} has won !!! Press Reset to play again`;
          btns.forEach((btn) => {
            btn.style.boxShadow = '1px 1px 50px purple'
          })
     
        return;
      }
      if (result == "tie") {
        playerTurnDiv.textContent = "Tied!! Nobody has won. Press Reset to play again";
        btns.forEach((btn) => {
          btn.style.boxShadow = '1px 1px 50px red'
        })
        return;
      }
      const reset = document.querySelector("#resetbtn");
      reset.addEventListener("click", () => {
        let board = gameboard.getBoard();
        console.log(gameboard);
       
        for (let i = 0; i < 3; i++) {
          board[i] = [];
          for (let j = 0; j < 3; j++) {
            board[i].push("");
          }
        }
        btns.forEach((btn) => {
          btn.textContent = "";
          btn.style.boxShadow = "";
        });
        playerTurnDiv.textContent = '';
      });
      console.log(game.getActivePlayer().token);
    });
  });
}

