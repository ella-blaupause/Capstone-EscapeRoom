import styled from "styled-components";
import { SvgPuzzleElement } from "../../utils/icons";
import usePuzzlePiecesStore from "../../stores/puzzlePiecesStore";

const PuzzlePiece = styled.button`
  background: none;
  border: none;
  padding: 0;
  grid-row: ${({ position }) => position.row};
  grid-column: ${({ position }) => position.column};
`;

export default function PuzzlePieces({ onSolvedPuzzles }) {
  const puzzlePieces = usePuzzlePiecesStore((state) => state.puzzlePieces);
  const countPieces = usePuzzlePiecesStore((state) => state.countPieces);
  const increaseCountPieces = usePuzzlePiecesStore(
    (state) => state.increaseCountPieces
  );
  const collectPuzzlePiece = usePuzzlePiecesStore(
    (state) => state.collectPuzzlePiece
  );

  function handleCollect(puzzlePieceId) {
    const piece = puzzlePieces.find((piece) => piece.id === puzzlePieceId);

    if (!piece.isCollected) {
      increaseCountPieces();
      collectPuzzlePiece(puzzlePieceId);
    }

    if (countPieces + 1 === puzzlePieces.length) {
      onSolvedPuzzles(2);
    }
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
          {puzzlePiece.isCollected ? null : (
            <SvgPuzzleElement alt="Grünes Puzzleteil" />
          )}
        </PuzzlePiece>
      ))}
    </>
  );
}
