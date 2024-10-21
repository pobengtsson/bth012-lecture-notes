import { getValidMoves } from './chess-moves.js';
import { initializeBoard, updateBoardUI, switchTurn, isGameOver, getPieceSymbol } from './chess-board.js';

let currentPlayer = 'white';
let board = initializeBoard();
let selectedPiece = null;
let selectedPosition = null;
let selectedPieceElement = null;
let highlightedSquares = []; // Track highlighted squares
let enPassantTarget = null; // Track en passant target square

const boardElement = document.getElementById('chess-board');
const turnIndicator = document.getElementById('current-player');
const capturedWhiteContainer = document.getElementById('captured-white');
const capturedBlackContainer = document.getElementById('captured-black');
const showMovesWhite = document.getElementById('show-moves-white');
const showMovesBlack = document.getElementById('show-moves-black');
const toggleCoordinates = document.getElementById('toggle-coordinates');
const boardContainer = document.querySelector('.board-container');

// Set up initial board UI
updateBoardUI(board, boardElement, 'white');

toggleCoordinates.addEventListener('change', () => {
  if (toggleCoordinates.checked) {
    boardContainer.classList.remove('hide-coords');
  } else {
    boardContainer.classList.add('hide-coords');
  }
});

boardElement.addEventListener('click', (e) => {
  const target = e.target;

  // Ensure the clicked element is a piece or a square
  if (!target.classList.contains('square') && !target.classList.contains('piece')) return;

  // Get the square element that was clicked
  const square = target.classList.contains('square') ? target : target.parentElement;
  const row = parseInt(square.dataset.row);
  const col = parseInt(square.dataset.col);
  const piece = board[row][col];

  if (selectedPiece) {
    const validMoves = getValidMoves(board, selectedPiece, selectedPosition, enPassantTarget);
    const isValidMove = validMoves.some(move => move.row === row && move.col === col);

    if (isValidMove) {
      // Handle special moves
      if (handleSpecialMoves(row, col)) return;

      // Perform regular move
      makeMove(row, col);
    } else {
      clearSelectedPiece();
      clearHighlightedMoves();
      updateBoardUI(board, boardElement, currentPlayer, undefined)
    }
  } else if (piece && piece.color === currentPlayer) {
    // Select the piece if it belongs to the current player
    selectedPiece = piece;
    selectedPosition = { row, col };
    selectedPieceElement = target.classList.contains('piece') ? target : target.firstChild;

    updateBoardUI(board, boardElement, currentPlayer, selectedPiece)

    // Highlight valid moves if the toggle is enabled
    const showMoves = (currentPlayer === 'white' && showMovesWhite.checked) ||
      (currentPlayer === 'black' && showMovesBlack.checked);
    if (showMoves) {
      const validMoves = getValidMoves(board, selectedPiece, selectedPosition, enPassantTarget);
      highlightValidMoves(validMoves);
    }
  }
});

// Handle special moves like promotion, en passant, and castling
function handleSpecialMoves(row, col) {
  // Handle pawn promotion
  if (selectedPiece.type === 'pawn' && (row === 0 || row === 7)) {
    const promotionType = prompt('Promote to (queen, rook, bishop, knight):', 'queen');
    if (promotionType) {
      selectedPiece.type = promotionType;
      makeMove(row, col);
      return true;
    }
  }

  // Handle en passant capture
  if (selectedPiece.type === 'pawn' && enPassantTarget && row === enPassantTarget.row && col === enPassantTarget.col) {
    // Remove the opponent's pawn that was captured en passant
    const capturedPawnRow = (currentPlayer === 'white') ? row + 1 : row - 1;
    addCapturedPiece(board[capturedPawnRow][col])
    board[capturedPawnRow][col] = null;
    makeMove(row, col);
    return true;
  }

  // Handle castling (existing logic remains unchanged)
  if (selectedPiece.type === 'king' && Math.abs(col - selectedPosition.col) === 2) {
    if (col === 6) { // Kingside castling
      board[row][5] = board[row][7]; // Move rook
      board[row][7] = null;
    } else if (col === 2) { // Queenside castling
      board[row][3] = board[row][0]; // Move rook
      board[row][0] = null;
    }
    makeMove(row, col);
    return true;
  }

  return false;
}

// Execute the move and update the game state
function makeMove(row, col) {
  // Handle en passant availability
  if (selectedPiece.type === 'pawn' && Math.abs(row - selectedPosition.row) === 2) {
    enPassantTarget = { row: (selectedPosition.row + row) / 2, col };
  } else {
    enPassantTarget = null;
  }

  if(board[row][col]) {
    addCapturedPiece(board[row][col])
  }

  // Move the piece on the board
  board[row][col] = selectedPiece;
  board[selectedPosition.row][selectedPosition.col] = null;

  // Clear the selected piece and highlight
  clearSelectedPiece();
  clearHighlightedMoves();

  switchTurn(turnIndicator, currentPlayer);
  currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
  updateBoardUI(board, boardElement, currentPlayer, undefined);

  if (isGameOver(board, currentPlayer)) {
    alert(`${currentPlayer === 'white' ? 'Black' : 'White'} wins!`);
    board = initializeBoard();
    updateBoardUI(board, boardElement);
  }
}

// Update castling rights based on the move
function updateCastlingRights(piece, position) {
  if (piece.type === 'king') {
    castlingRights[piece.color].kingside = false;
    castlingRights[piece.color].queenside = false;
  }
  if (piece.type === 'rook') {
    if (position.col === 0) castlingRights[piece.color].queenside = false;
    if (position.col === 7) castlingRights[piece.color].kingside = false;
  }
}

// Highlight valid moves
function highlightValidMoves(validMoves) {
  clearHighlightedMoves(); // Clear any previous highlights

  validMoves.forEach(({ row, col }) => {
    const square = boardElement.querySelector(`.square[data-row='${row}'][data-col='${col}']`);
    if (square) {
      square.classList.add('valid-move');
      highlightedSquares.push(square);
    }
  });
}

// Clear highlighted moves
function clearHighlightedMoves() {
  highlightedSquares.forEach(square => square.classList.remove('valid-move'));
  highlightedSquares = [];
}

// Add captured piece to the respective container
function addCapturedPiece(piece) {
  const pieceElement = document.createElement('div');
  pieceElement.textContent = getPieceSymbol(piece);
  pieceElement.classList.add('captured-piece');
  pieceElement.classList.add(piece.color);

  if (piece.color === 'white') {
    capturedWhiteContainer.appendChild(pieceElement);
  } else {
    capturedBlackContainer.appendChild(pieceElement);
  }
}

// Clear the selected piece highlight
function clearSelectedPiece() {
  if (selectedPieceElement) {
    selectedPieceElement.classList.remove('selected-piece');
    selectedPieceElement = null;
  }
  selectedPiece = null;
  selectedPosition = null;
}
