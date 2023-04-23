import styled from "styled-components";
import { SvgPuzzleElement } from "../../utils/icons";

const PuzzlePiece = styled.button`
  background: none;
  border: none;
  padding: 0;
  grid-row: ${({ position }) => position.row};
  grid-column: ${({ position }) => position.column};
`;

export default function PuzzlePieces({ onCollect, puzzlePieces }) {
  return (
    <>
      {puzzlePieces.map((puzzlePiece) => (
        <PuzzlePiece
          key={puzzlePiece.id}
          type="button"
          onClick={() => {
            onCollect(puzzlePiece.id);
          }}
          position={puzzlePiece.position}
        >
          {puzzlePiece.isCollected ? null : (
            <SvgPuzzleElement alt="Grünes Puzzleteil" />
          )}
        </PuzzlePiece>
      ))}
    </>
  );
}
