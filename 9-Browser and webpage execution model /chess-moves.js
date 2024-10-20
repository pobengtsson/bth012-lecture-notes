export function getValidMoves(board, piece, position) {
  const { type, color } = piece;
  switch (type) {
    case 'pawn':
      return getPawnMoves(board, position, color);
    case 'queen':
      return getQueenMoves(board, position, color);
    default:
      return [];
  }
}

function getPawnMoves(board, { row, col }, color) {
  const moves = [];
  const direction = (color === 'white') ? -1 : 1;

  if (isWithinBounds(row + direction, col) && !board[row + direction][col]) {
    moves.push({ row: row + direction, col });
  }

  if ((row === 1 && color === 'black') || (row === 6 && color === 'white')) {
    if (!board[row + 2 * direction][col]) {
      moves.push({ row: row + 2 * direction, col });
    }
  }

  // Diagonal captures
  if (isWithinBounds(row + direction, col - 1) && board[row + direction][col - 1]?.color !== color) {
    moves.push({ row: row + direction, col: col - 1 });
  }
  if (isWithinBounds(row + direction, col + 1) && board[row + direction][col + 1]?.color !== color) {
    moves.push({ row: row + direction, col: col + 1 });
  }

  return moves;
}

function getQueenMoves(board, { row, col }, color) {
  const moves = [];
  getLinearMoves(board, { row, col }, color, moves, [-1, 0]); // Up
  getLinearMoves(board, { row, col }, color, moves, [1, 0]);  // Down
  getLinearMoves(board, { row, col }, color, moves, [0, -1]); // Left
  getLinearMoves(board, { row, col }, color, moves, [0, 1]);  // Right
  getLinearMoves(board, { row, col }, color, moves, [-1, -1]); // Diagonal up-left
  getLinearMoves(board, { row, col }, color, moves, [-1, 1]);  // Diagonal up-right
  getLinearMoves(board, { row, col }, color, moves, [1, -1]);  // Diagonal down-left
  getLinearMoves(board, { row, col }, color, moves, [1, 1]);   // Diagonal down-right
  return moves;
}

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
      break;
    } else {
      break;
    }
  }
}

function isWithinBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}
