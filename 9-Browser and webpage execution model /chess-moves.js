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

/**
 * Helper functions for piece-specific moves
 */

// Pawn moves
function getPawnMoves(board, { row, col }, color) {
  const moves = [];
  const direction = (color === 'white') ? -1 : 1; // White moves up, Black moves down

  // Move forward one square
  if (isWithinBounds(row + direction, col) && board[row + direction][col] === null) {
    moves.push({ row: row + direction, col });
  }

  // Initial double move
  if ((row === 1 && color === 'black') || (row === 6 && color === 'white')) {
    if (board[row + 2 * direction][col] === null) {
      moves.push({ row: row + 2 * direction, col });
    }
  }

  // Capture diagonally
  if (isWithinBounds(row + direction, col - 1) && board[row + direction][col - 1]?.color !== color) {
    moves.push({ row: row + direction, col: col - 1 });
  }
  if (isWithinBounds(row + direction, col + 1) && board[row + direction][col + 1]?.color !== color) {
    moves.push({ row: row + direction, col: col + 1 });
  }

  return moves;
}

// Rook moves
function getRookMoves(board, { row, col }, color) {
  const moves = [];
  getLinearMoves(board, { row, col }, color, moves, [-1, 0]); // Up
  getLinearMoves(board, { row, col }, color, moves, [1, 0]);  // Down
  getLinearMoves(board, { row, col }, color, moves, [0, -1]); // Left
  getLinearMoves(board, { row, col }, color, moves, [0, 1]);  // Right
  return moves;
}

// Knight moves
function getKnightMoves(board, { row, col }, color) {
  const moves = [];
  const knightJumps = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
  ];

  knightJumps.forEach(([dr, dc]) => {
    const newRow = row + dr;
    const newCol = col + dc;
    if (isWithinBounds(newRow, newCol) && (board[newRow][newCol] === null || board[newRow][newCol]?.color !== color)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  return moves;
}

// Bishop moves
function getBishopMoves(board, { row, col }, color) {
  const moves = [];
  getLinearMoves(board, { row, col }, color, moves, [-1, -1]); // Up-left
  getLinearMoves(board, { row, col }, color, moves, [-1, 1]);  // Up-right
  getLinearMoves(board, { row, col }, color, moves, [1, -1]);  // Down-left
  getLinearMoves(board, { row, col }, color, moves, [1, 1]);   // Down-right
  return moves;
}

// Queen moves (combines rook and bishop)
function getQueenMoves(board, { row, col }, color) {
  return [
    ...getRookMoves(board, { row, col }, color),
    ...getBishopMoves(board, { row, col }, color)
  ];
}

// King moves
function getKingMoves(board, { row, col }, color) {
  const moves = [];
  const kingSteps = [
    [-1, 0], [1, 0], [0, -1], [0, 1], // Vertical & horizontal
    [-1, -1], [-1, 1], [1, -1], [1, 1] // Diagonals
  ];

  kingSteps.forEach(([dr, dc]) => {
    const newRow = row + dr;
    const newCol = col + dc;
    if (isWithinBounds(newRow, newCol) && (board[newRow][newCol] === null || board[newRow][newCol]?.color !== color)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  return moves;
}

/**
 * Helper function for linear moves (used by rook, bishop, and queen)
 */
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

/**
 * Check if the given position is within board bounds
 */
function isWithinBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}
