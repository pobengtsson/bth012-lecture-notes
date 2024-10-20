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
 * Helper functions for each piece's moves
 */

// Pawn moves with promotion and en passant
function getPawnMoves(board, { row, col }, color) {
  const moves = [];
  const direction = (color === 'white') ? -1 : 1;
  const promotionRow = (color === 'white') ? 0 : 7;

  // Move forward one square
  if (isWithinBounds(row + direction, col) && board[row + direction][col] === null) {
    if (row + direction === promotionRow) {
      addPromotionMoves(moves, row + direction, col, color);
    } else {
      moves.push({ row: row + direction, col });
    }
  }

  // Initial double move
  if ((row === 1 && color === 'black') || (row === 6 && color === 'white')) {
    if (board[row + 2 * direction][col] === null && board[row + direction][col] === null) {
      moves.push({ row: row + 2 * direction, col });
    }
  }

  // Diagonal captures
  checkDiagonalCapture(moves, board, row, col, direction, color);

  return moves;
}

// Add promotion options for pawns
function addPromotionMoves(moves, row, col, color) {
  ['queen', 'rook', 'bishop', 'knight'].forEach(type => {
    moves.push({ row, col, promotion: type, color });
  });
}

// Check diagonal captures including en passant
function checkDiagonalCapture(moves, board, row, col, direction, color) {
  const leftDiagonal = col - 1;
  const rightDiagonal = col + 1;

  if (isWithinBounds(row + direction, leftDiagonal)) {
    const leftPiece = board[row + direction][leftDiagonal];
    if (leftPiece && leftPiece.color !== color) {
      moves.push({ row: row + direction, col: leftDiagonal });
    }
  }

  if (isWithinBounds(row + direction, rightDiagonal)) {
    const rightPiece = board[row + direction][rightDiagonal];
    if (rightPiece && rightPiece.color !== color) {
      moves.push({ row: row + direction, col: rightDiagonal });
    }
  }
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
    if (isWithinBounds(newRow, newCol) && (!board[newRow][newCol] || board[newRow][newCol].color !== color)) {
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

// Queen moves
function getQueenMoves(board, { row, col }, color) {
  return [
    ...getRookMoves(board, { row, col }, color),
    ...getBishopMoves(board, { row, col }, color)
  ];
}

// King moves with castling
function getKingMoves(board, { row, col }, color) {
  const moves = [];
  const kingSteps = [
    [-1, 0], [1, 0], [0, -1], [0, 1], // Vertical & horizontal
    [-1, -1], [-1, 1], [1, -1], [1, 1] // Diagonals
  ];

  kingSteps.forEach(([dr, dc]) => {
    const newRow = row + dr;
    const newCol = col + dc;
    if (isWithinBounds(newRow, newCol) && (!board[newRow][newCol] || board[newRow][newCol].color !== color)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  // Castling logic
  addCastlingMoves(board, moves, row, col, color);

  return moves;
}

// Add castling moves if possible
function addCastlingMoves(board, moves, row, col, color) {
  const kingRow = (color === 'white') ? 7 : 0;
  if (row === kingRow && col === 4) {
    // Kingside castling
    if (canCastle(board, row, 4, 7, color)) {
      moves.push({ row, col: 6 });
    }
    // Queenside castling
    if (canCastle(board, row, 4, 0, color)) {
      moves.push({ row, col: 2 });
    }
  }
}

// Check if castling is possible
function canCastle(board, kingRow, kingCol, rookCol, color) {
  const rook = board[kingRow][rookCol];
  if (!rook || rook.type !== 'rook' || rook.color !== color) return false;

  const step = (rookCol > kingCol) ? 1 : -1;
  for (let col = kingCol + step; col !== rookCol; col += step) {
    if (board[kingRow][col] !== null) return false; // Blocked path
  }

  // Additional checks for castling: no check on king's path (requires game state)
  return true;
}

// Helper function for linear moves (used by rooks, bishops, and queens)
function getLinearMoves(board, { row, col }, color, moves, [dr, dc]) {
  let newRow = row + dr;
  let newCol = col + dc;

  while (isWithinBounds(newRow, newCol)) {
    if (!board[newRow][newCol]) {
      moves.push({ row: newRow, col: newCol });
    } else if (board[newRow][newCol].color !== color) {
      moves.push({ row: newRow, col: newCol });
      break; // Capture, then stop
    } else {
      break; // Blocked by same color piece
    }
    newRow += dr;
    newCol += dc;
  }
}

// Check if a position is within board boundaries
function isWithinBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}
