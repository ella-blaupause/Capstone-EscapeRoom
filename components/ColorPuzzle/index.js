import styled from "styled-components";
import useColorCodePuzzleStore from "../../stores/colorCodePuzzleStore";
import { colors } from "../../utils/utils";

const PuzzleDiv = styled.div`
  border: solid;
  background-color: #f5f4eb;
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
  const colorCounts = useColorCodePuzzleStore((state) => state.colorCounts);
  const randomColors = useColorCodePuzzleStore((state) => state.randomColors);
  const randomSymbols = useColorCodePuzzleStore((state) => state.randomSymbols);
  const increaseFirstColorDiv = useColorCodePuzzleStore(
    (state) => state.increaseFirstColorDiv
  );
  const increaseSecondColorDiv = useColorCodePuzzleStore(
    (state) => state.increaseSecondColorDiv
  );
  const increaseThirdColorDiv = useColorCodePuzzleStore(
    (state) => state.increaseThirdColorDiv
  );
  const defaultColorCode = useColorCodePuzzleStore(
    (state) => state.defaultColorCode
  );
  function handleColorSwitch(props) {
    if (props === "first") {
      if (colorCounts.first >= colors.length - 1) {
        colorCounts.first = -1;
      }

      increaseFirstColorDiv();
    } else if (props === "second") {
      if (colorCounts.second >= colors.length - 1) {
        colorCounts.second = -1;
      }
      increaseSecondColorDiv();
    } else if (props === "third") {
      if (colorCounts.third >= colors.length - 1) {
        colorCounts.third = -1;
      }
      increaseThirdColorDiv();
    } else {
      defaultColorCode();
    }

    if (
      colors[colorCounts.first] === randomColors[2] &&
      colors[colorCounts.second] === randomColors[0] &&
      colors[colorCounts.third] === randomColors[1]
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
          color={colors[colorCounts.first]}
          onClick={() => handleColorSwitch("first")}
          data-testid="color-div-0"
        />
        <ColorDiv
          color={colors[colorCounts.second]}
          onClick={() => handleColorSwitch("second")}
          data-testid="color-div-1"
        />
        <ColorDiv
          color={colors[colorCounts.third]}
          onClick={() => handleColorSwitch("third")}
          data-testid="color-div-2"
        />
      </PuzzleDiv>
    </>
  );
}
