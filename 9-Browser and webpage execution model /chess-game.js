import { getValidMoves } from './chess-moves.js';
import { initializeBoard, updateBoardUI, switchTurn, isGameOver } from './chess-board.js';

let currentPlayer = 'white';
let board = initializeBoard();
let selectedPiece = null;
let selectedPosition = null;
let selectedPieceElement = null;  // Track selected piece element

const boardElement = document.getElementById('chess-board');
const turnIndicator = document.getElementById('current-player');

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
      board[row][col] = selectedPiece;
      board[selectedPosition.row][selectedPosition.col] = null;

      // Clear the selected piece and highlight
      clearSelectedPiece();

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
    }
  } else if (piece && piece.color === currentPlayer && (piece.type === 'pawn' || piece.type === 'queen')) {
    // Select the piece if it belongs to the current player and is a pawn or queen
    selectedPiece = piece;
    selectedPosition = { row, col };
    selectedPieceElement = target.classList.contains('piece') ? target : target.firstChild;

    // Add the selected-piece class to indicate selection
    selectedPieceElement.classList.add('selected-piece');
  }
});

// Helper function to clear the selected piece highlight
function clearSelectedPiece() {
  if (selectedPieceElement) {
    selectedPieceElement.classList.remove('selected-piece');
    selectedPieceElement = null;
  }
  selectedPiece = null;
  selectedPosition = null;
}
