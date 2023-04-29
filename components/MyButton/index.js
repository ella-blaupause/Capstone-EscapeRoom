import { useRouter } from "next/router";
import styled from "styled-components";
import useGlobalStore from "../../store";

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
  const turnLight = useGlobalStore((state) => state.turnLight);
  const resetPuzzlePieces = useGlobalStore((state) => state.resetPuzzlePieces);
  const resetCountPieces = useGlobalStore((state) => state.resetCountPieces);
  const resetRandomColors = useGlobalStore((state) => state.resetRandomColors);
  const resetRandomSymbols = useGlobalStore(
    (state) => state.resetRandomSymbols
  );
  const resetCountRightAnswer = useGlobalStore(
    (state) => state.resetCountRightAnswer
  );
  const resetCrosswordClues = useGlobalStore(
    (state) => state.resetCrosswordClues
  );
  const deleteToasts = useGlobalStore((state) => state.deleteToasts);
  const setIsAnswered = useGlobalStore((state) => state.setIsAnswered);
  const resetSolvedPuzzle = useGlobalStore((state) => state.resetSolvedPuzzle);

  const router = useRouter();

  function handleNewGame() {
    router.push("/room");

    resetRandomColors();
    resetRandomSymbols();

    turnLight();

    resetPuzzlePieces();
    resetCountPieces();

    resetCountRightAnswer();
    resetCrosswordClues();

    deleteToasts();
    setIsAnswered(false);
    resetSolvedPuzzle();
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
