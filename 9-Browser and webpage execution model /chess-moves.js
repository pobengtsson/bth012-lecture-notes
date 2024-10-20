export function getValidMoves(board, piece, position) {
  const { type, color } = piece;
  switch (type) {
    case 'pawn':
      return getPawnMoves(board, position, color);
    case 'rook':
      return getRookMoves(board, position, color);
    case 'knight':
      return getKnightMoves(board, position, color);
    case 'bishop':
      return getBishopMoves(board, position, color);
    case 'queen':
      return getQueenMoves(board, position, color);
    case 'king':
      return getKingMoves(board, position, color);
    default:
      return [];
  }
}

function getPawnMoves(board, { row, col }, color) {
  const moves = [];
  const direction = (color === 'white') ? -1 : 1; // White moves up, Black moves down

  // Move forward one square
  if (isWithinBounds(row + direction, col) && board[row + direction][col] === null) {
    moves.push({ row: row + direction, col });
  }

  // Initial double move
  if ((row === 1 && color === 'black') || (row === 6 && color === 'white')) {
    if (board[row + 2 * direction][col] === null && board[row + direction][col] === null) {
      moves.push({ row: row + 2 * direction, col });
    }
  }

  // Diagonal captures
  if (isWithinBounds(row + direction, col - 1)) {
    const diagonalLeft = board[row + direction][col - 1];
    if (diagonalLeft && diagonalLeft.color !== color) {
      moves.push({ row: row + direction, col: col - 1 });
    }
  }
  if (isWithinBounds(row + direction, col + 1)) {
    const diagonalRight = board[row + direction][col + 1];
    if (diagonalRight && diagonalRight.color !== color) {
      moves.push({ row: row + direction, col: col + 1 });
    }
  }

  return moves;
}

// Rook, Knight, Bishop, Queen, King Moves (unchanged)
function getRookMoves(board, { row, col }, color) {
  const moves = [];
  getLinearMoves(board, { row, col }, color, moves, [-1, 0]);
  getLinearMoves(board, { row, col }, color, moves, [1, 0]);
  getLinearMoves(board, { row, col }, color, moves, [0, -1]);
  getLinearMoves(board, { row, col }, color, moves, [0, 1]);
  return moves;
}

function getKnightMoves(board, { row, col }, color) {
  const moves = [];
  const knightJumps = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
  ];

  knightJumps.forEach(([dr, dc]) => {
    const newRow = row + dr;
    const newCol = col + dc;
    if (isWithinBounds(newRow, newCol) && (!board[newRow][newCol] || board[newRow][newCol].color !== color)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  return moves;
}

function getBishopMoves(board, { row, col }, color) {
  const moves = [];
  getLinearMoves(board, { row, col }, color, moves, [-1, -1]);
  getLinearMoves(board, { row, col }, color, moves, [-1, 1]);
  getLinearMoves(board, { row, col }, color, moves, [1, -1]);
  getLinearMoves(board, { row, col }, color, moves, [1, 1]);
  return moves;
}

function getQueenMoves(board, { row, col }, color) {
  return [
    ...getRookMoves(board, { row, col }, color),
    ...getBishopMoves(board, { row, col }, color)
  ];
}

function getKingMoves(board, { row, col }, color) {
  const moves = [];
  const kingSteps = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];

  kingSteps.forEach(([dr, dc]) => {
    const newRow = row + dr;
    const newCol = col + dc;
    if (isWithinBounds(newRow, newCol) && (!board[newRow][newCol] || board[newRow][newCol].color !== color)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  return moves;
}

// Helper functions (unchanged)
function getLinearMoves(board, startPos, color, moves, direction) {
  let [row, col] = [startPos.row, startPos.col];
  while (true) {
    row += direction[0];
    col += direction[1];
    if (!isWithinBounds(row, col)) break;

    if (board[row][col] === null) {
      moves.push({ row, col });
    } else if (board[row][col].color !== color) {
      moves.push({ row, col });
      break; // Capture, then stop
    } else {
      break; // Blocked by same color piece
    }
  }
}

function isWithinBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}
