export function initializeBoard() {
  const board = Array(8).fill(null).map(() => Array(8).fill(null));

  // Initialize pawns
  for (let i = 0; i < 8; i++) {
    board[1][i] = { type: 'pawn', color: 'black' };
    board[6][i] = { type: 'pawn', color: 'white' };
  }

  // Initialize rooks
  board[0][0] = board[0][7] = { type: 'rook', color: 'black' };
  board[7][0] = board[7][7] = { type: 'rook', color: 'white' };

  // Initialize knights
  board[0][1] = board[0][6] = { type: 'knight', color: 'black' };
  board[7][1] = board[7][6] = { type: 'knight', color: 'white' };

  // Initialize bishops
  board[0][2] = board[0][5] = { type: 'bishop', color: 'black' };
  board[7][2] = board[7][5] = { type: 'bishop', color: 'white' };

  // Initialize queens
  board[0][3] = { type: 'queen', color: 'black' };
  board[7][3] = { type: 'queen', color: 'white' };

  // Initialize kings
  board[0][4] = { type: 'king', color: 'black' };
  board[7][4] = { type: 'king', color: 'white' };

  return board;
}

export function updateBoardUI(board, boardElement) {
  boardElement.innerHTML = '';
  board.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.row = rowIndex;
      square.dataset.col = colIndex;

      if ((rowIndex + colIndex) % 2 === 0) {
        square.classList.add('white-square');
      } else {
        square.classList.add('black-square');
      }

      if (piece) {
        const pieceElement = document.createElement('span');
        pieceElement.textContent = getPieceSymbol(piece);
        pieceElement.classList.add('piece');
        square.appendChild(pieceElement);
      }

      boardElement.appendChild(square);
    });
  });
}

export function switchTurn(turnIndicator, currentPlayer) {
  turnIndicator.textContent = currentPlayer === 'white' ? 'Black' : 'White';
}

export function isGameOver(board, color) {
  // Check if the king of the given color is still present on the board
  return !board.some(row => row.some(piece => piece?.type === 'king' && piece.color === color));
}

function getPieceSymbol(piece) {
  const symbols = {
    pawn: { white: '♙', black: '♟' },
    rook: { white: '♖', black: '♜' },
    knight: { white: '♘', black: '♞' },
    bishop: { white: '♗', black: '♝' },
    queen: { white: '♕', black: '♛' },
    king: { white: '♔', black: '♚' }
  };

  return symbols[piece.type][piece.color];
}
