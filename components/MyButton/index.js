import { useRouter } from "next/router";
import styled from "styled-components";
import useLightStore from "../../stores/lightStore";
import usePuzzlePiecesStore from "../../stores/puzzlePiecesStore";
import useColorCodePuzzleStore from "../../stores/colorCodePuzzleStore";

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
  const newGamePuzzlePieces = usePuzzlePiecesStore(
    (state) => state.newGamePuzzlePieces
  );
  const newGameCountPieces = usePuzzlePiecesStore(
    (state) => state.newGameCountPieces
  );
  const newGameRandomColors = useColorCodePuzzleStore(
    (state) => state.newGameRandomColors
  );

  const newGameRandomSymbols = useColorCodePuzzleStore(
    (state) => state.newGameRandomSymbols
  );

  const router = useRouter();

  function handleNewGame() {
    router.push("/room");

    newGameRandomColors();
    newGameRandomSymbols();

    turnLight();

    newGamePuzzlePieces();
    newGameCountPieces();
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
