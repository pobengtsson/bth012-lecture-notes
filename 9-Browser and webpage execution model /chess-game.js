import { getValidMoves } from './chess-moves.js';
import { initializeBoard, updateBoardUI, switchTurn, isGameOver } from './chess-board.js';

let currentPlayer = 'white';
let board = initializeBoard();
let selectedPiece = null;
let selectedPosition = null;
let selectedPieceElement = null;
let highlightedSquares = []; // Track highlighted squares

const boardElement = document.getElementById('chess-board');
const turnIndicator = document.getElementById('current-player');
const capturedWhiteContainer = document.getElementById('captured-white');
const capturedBlackContainer = document.getElementById('captured-black');
const showMovesWhite = document.getElementById('show-moves-white');
const showMovesBlack = document.getElementById('show-moves-black');

// Set up initial board UI
updateBoardUI(board, boardElement);

// Event listener for clicks on the board
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
    // Attempt to move the selected piece
    const validMoves = getValidMoves(board, selectedPiece, selectedPosition);
    const isValidMove = validMoves.some(move => move.row === row && move.col === col);

    if (isValidMove) {
      // If there's an opponent's piece at the destination, capture it
      if (board[row][col]) {
        const capturedPiece = board[row][col];
        addCapturedPiece(capturedPiece);
      }

      board[row][col] = selectedPiece;
      board[selectedPosition.row][selectedPosition.col] = null;

      // Clear the selected piece and highlight
      clearSelectedPiece();
      clearHighlightedMoves();

      updateBoardUI(board, boardElement);
      switchTurn(turnIndicator, currentPlayer);
      currentPlayer = currentPlayer === 'white' ? 'black' : 'white';

      if (isGameOver(board, currentPlayer)) {
        alert(`${currentPlayer === 'white' ? 'Black' : 'White'} wins!`);
        board = initializeBoard();
        updateBoardUI(board, boardElement);
      }
    } else {
      // Invalid move, reset the selection
      clearSelectedPiece();
      clearHighlightedMoves();
    }
  } else if (piece && piece.color === currentPlayer) {
    // Select the piece if it belongs to the current player (any type)
    selectedPiece = piece;
    selectedPosition = { row, col };
    selectedPieceElement = target.classList.contains('piece') ? target : target.firstChild;

    // Add the selected-piece class to indicate selection
    selectedPieceElement.classList.add('selected-piece');

    // Highlight valid moves if the toggle is enabled
    const showMoves = (currentPlayer === 'white' && showMovesWhite.checked) ||
      (currentPlayer === 'black' && showMovesBlack.checked);
    if (showMoves) {
      const validMoves = getValidMoves(board, selectedPiece, selectedPosition);
      highlightValidMoves(validMoves);
    }
  }
});

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

  if (piece.color === 'white') {
    capturedWhiteContainer.appendChild(pieceElement);
  } else {
    capturedBlackContainer.appendChild(pieceElement);
  }
}

// Helper function to clear the selected piece highlight
function clearSelectedPiece() {
  if (selectedPieceElement) {
    selectedPieceElement.classList.remove('selected-piece');
    selectedPieceElement = null;
  }
  selectedPiece = null;
  selectedPosition = null;
}

// Helper function to get piece symbol
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
