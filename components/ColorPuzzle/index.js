import styled from "styled-components";

const PuzzleDiv = styled.div`
  width: 375;
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

export default function ColorPuzzle({ onColorSwitch, colors, count }) {
  return (
    <PuzzleDiv>
      <p>◇</p>
      <p>△</p>
      <p>☆</p>
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
      />{" "}
    </PuzzleDiv>
  );
}
