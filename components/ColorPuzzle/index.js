import styled from "styled-components";

const PuzzleDiv = styled.div`
  border: solid;
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

export default function ColorPuzzle({
  onColorSwitch,
  colors,
  count,
  randomSymbols,
}) {
  return (
    <>
      <p>Gib den Code ein!</p>
      <PuzzleDiv>
        <span>{randomSymbols[2]}</span>
        <span>{randomSymbols[0]}</span>
        <span>{randomSymbols[1]}</span>
        <ColorDiv
          color={colors[count.first]}
          onClick={() => onColorSwitch("first")}
          data-testid="color-div-0"
        />
        <ColorDiv
          color={colors[count.second]}
          onClick={() => onColorSwitch("second")}
          data-testid="color-div-1"
        />
        <ColorDiv
          color={colors[count.third]}
          onClick={() => onColorSwitch("third")}
          data-testid="color-div-2"
        />
      </PuzzleDiv>
    </>
  );
}
