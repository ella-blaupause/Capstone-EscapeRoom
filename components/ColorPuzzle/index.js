import styled from "styled-components";
import { colors } from "../../utils/utils";
import useGlobalStore from "../../store";

const PuzzleDiv = styled.div`
  border: solid;
  background-color: #f5f4eb;
  color: initial;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20% 90%;
  place-items: center;
  margin: 20px 0;
  padding: 8px;
  gap: 8px;
`;

const ColorDiv = styled.div`
  width: 2em;
  height: 2em;
  background-color: ${(props) => props.color};
`;

export default function ColorPuzzle({ onSolvedPuzzles }) {
  const colorCounts = useGlobalStore((state) => state.colorCounts);
  const randomColors = useGlobalStore((state) => state.randomColors);
  const randomSymbols = useGlobalStore((state) => state.randomSymbols);
  const increaseFirstColorDiv = useGlobalStore(
    (state) => state.increaseFirstColorDiv
  );
  const increaseSecondColorDiv = useGlobalStore(
    (state) => state.increaseSecondColorDiv
  );
  const increaseThirdColorDiv = useGlobalStore(
    (state) => state.increaseThirdColorDiv
  );
  const defaultColorCode = useGlobalStore((state) => state.defaultColorCode);

  function handleColorSwitch(props) {
    if (props === "first") {
      increaseFirstColorDiv();
    } else if (props === "second") {
      if (colorCounts.secondDiv >= colors.length - 1) {
        colorCounts.secondDiv = -1;
      }
      increaseSecondColorDiv();
    } else if (props === "third") {
      increaseThirdColorDiv();
    } else {
      defaultColorCode();
    }

    if (
      colors[colorCounts.firstDiv % colors.length] === randomColors[2] &&
      colors[colorCounts.secondDiv % colors.length] === randomColors[0] &&
      colors[colorCounts.thirdDiv % colors.length] === randomColors[1]
    ) {
      onSolvedPuzzles(4);
    }
  }

  return (
    <>
      <p>Gib den Code ein!</p>
      <PuzzleDiv>
        <span>{randomSymbols[2]}</span>
        <span>{randomSymbols[0]}</span>
        <span>{randomSymbols[1]}</span>
        <ColorDiv
          color={colors[colorCounts.firstDiv % colors.length]}
          onClick={() => handleColorSwitch("first")}
          data-testid="color-div-0"
        />
        <ColorDiv
          color={colors[colorCounts.secondDiv % colors.length]}
          onClick={() => handleColorSwitch("second")}
          data-testid="color-div-1"
        />
        <ColorDiv
          color={colors[colorCounts.thirdDiv % colors.length]}
          onClick={() => handleColorSwitch("third")}
          data-testid="color-div-2"
        />
      </PuzzleDiv>
    </>
  );
}
