import Square from "./Square";
import type { SquareValue } from "../../config/types";

interface Props {
  squares: SquareValue[];
  onSquareClick: (i: number) => void;
  winningLine: number[];
}

export default function Board({ squares, onSquareClick, winningLine }: Props) {
  return (
    <>
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            const isWinningSquare = winningLine.includes(index);
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => onSquareClick(index)}
                isWinning={isWinningSquare}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
