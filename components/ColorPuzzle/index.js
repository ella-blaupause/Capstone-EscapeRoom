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
  randomSymbol,
}) {
  return (
    <PuzzleDiv>
      <p>{randomSymbol[2]}</p>
      <p>{randomSymbol[0]}</p>
      <p>{randomSymbol[1]}</p>
      <ColorDiv
        color={colors[count.first]}
        onClick={() => onColorSwitch("first")}
      />
      <ColorDiv
        color={colors[count.second]}
        onClick={() => onColorSwitch("second")}
      />
      <ColorDiv
        color={colors[count.third]}
        onClick={() => onColorSwitch("third")}
      />
    </PuzzleDiv>
  );
}
