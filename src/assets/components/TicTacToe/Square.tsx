import { type ReactNode } from "react";

interface Props {
  value: ReactNode;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: Props) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
