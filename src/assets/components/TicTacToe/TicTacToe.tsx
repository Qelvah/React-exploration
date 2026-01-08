// Tutorial: https://react.dev/learn/tutorial-tic-tac-toe
import { useState } from "react";
import Board from "./Board";
import type { SquareValue } from "../../config/types";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinners(squares)) {
      return;
    }

    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinners(squares);
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
          <Board squares={squares} onSquareClick={handleClick} />
        </div>
      </div>
    </>
  );
}

function calculateWinners(squares: SquareValue[]): SquareValue {
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
      return squares[a];
    }
  }
  return null;
}
