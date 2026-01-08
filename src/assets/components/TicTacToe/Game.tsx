import { useState, type ReactNode } from "react";
import Board from "./Board";
import type { SquareValue } from "../../config/types";
import "./TicTacToe.css";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handleClick = (i: number) => {
    if (currentSquares[i] || calculateWinners(currentSquares)) {
      return;
    }

    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const rewind = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let defaultDescription = "You are at move #" + move;
    let description;
    if (move === history.length) {
      description = defaultDescription;
    } else if (move > 0) {
      description = "Go to move #" + move;
    } else if (move === 0) {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        {move === currentMove ? (
          <i>You are here</i>
        ) : (
          <button onClick={() => rewind(move)}>{description}</button>
        )}
      </li>
    );
  });

  const result = calculateWinners(currentSquares);
  const winner = result?.winner ?? null;
  const winningLine = result?.line ?? [];

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board
            squares={currentSquares}
            onSquareClick={handleClick}
            winningLine={winningLine}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

function calculateWinners(squares: SquareValue[]): {
  winner: SquareValue;
  line: number[];
} | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
