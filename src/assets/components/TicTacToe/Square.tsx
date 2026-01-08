import { type ReactNode } from "react";

interface Props {
  value: ReactNode;
  onSquareClick: () => void;
  isWinning?: boolean;
}

export default function Square({ value, onSquareClick, isWinning }: Props) {
  return (
    <>
      <button
        className={`square ${isWinning ? "winning" : ""}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
