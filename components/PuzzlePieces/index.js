import { useState } from "react";
import styled from "styled-components";
import { initialPuzzlePieces } from "../../utils/utils";

const PuzzlePiece = styled.button`
  background: none;
  border: none;
  padding: 0;
  grid-row: ${({ position }) => position.row};
  grid-column: ${({ position }) => position.column};
`;

export default function PuzzlePieces() {
  const [puzzlePieces, setPuzzlePieces] = useState(initialPuzzlePieces);

  function handleCollect(puzzlePieceId) {
    setPuzzlePieces(
      puzzlePieces.map((puzzlePiece) => {
        return puzzlePiece.id === puzzlePieceId
          ? { ...puzzlePiece, isCollected: true }
          : puzzlePiece;
      })
    );
  }

  return (
    <>
      {puzzlePieces.map((puzzlePiece) => (
        <PuzzlePiece
          key={puzzlePiece.id}
          type="button"
          onClick={() => {
            handleCollect(puzzlePiece.id);
          }}
          position={puzzlePiece.position}
        >
          {puzzlePiece.isCollected ? null : "🧩"}
        </PuzzlePiece>
      ))}
    </>
  );
}
