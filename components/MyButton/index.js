import { useRouter } from "next/router";
import styled from "styled-components";
import useLightStore from "../../stores/lightStore";
import usePuzzlePiecesStore from "../../stores/puzzlePiecesStore";
import useColorCodePuzzleStore from "../../stores/colorCodePuzzleStore";
import useCrosswordStore from "../../stores/crosswordStore";

const StyledButton = styled.button`
  padding: 10px 20px 10px 20px;
  font-size: ${(prop) => prop.fontSize};
  background: var(--my-orange);
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: black;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function MyButton({ children, fontSize }) {
  const turnLight = useLightStore((state) => state.turnLight);
  const resetPuzzlePieces = usePuzzlePiecesStore(
    (state) => state.resetPuzzlePieces
  );
  const resetCountPieces = usePuzzlePiecesStore(
    (state) => state.resetCountPieces
  );
  const resetRandomColors = useColorCodePuzzleStore(
    (state) => state.resetRandomColors
  );
  const resetRandomSymbols = useColorCodePuzzleStore(
    (state) => state.resetRandomSymbols
  );
  const resetCountRightAnswer = useCrosswordStore(
    (state) => state.resetCountRightAnswer
  );

  const router = useRouter();

  function handleNewGame() {
    router.push("/room");

    resetRandomColors();
    resetRandomSymbols();

    turnLight();

    resetPuzzlePieces();
    resetCountPieces();

    resetCountRightAnswer();
  }

  return (
    <StyledButton
      type="button"
      fontSize={fontSize}
      onClick={() => handleNewGame()}
    >
      {children}
    </StyledButton>
  );
}
