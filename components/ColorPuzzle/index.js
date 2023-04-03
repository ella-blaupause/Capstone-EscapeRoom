import { useState } from "react";
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

const colors = [
  "yellow",
  "green",
  "lightblue",
  "brown",
  "red",
  "gray",
  "orange",
  "purple",
];

export default function ColorPuzzle() {
  const [color, setColor] = useState("blueviolet");
  const [color1, setColor1] = useState("blueviolet");
  const [color2, setColor2] = useState("blueviolet");
  const [count, setCount] = useState(0);

  function colorSwitch() {
    setColor(colors[count]);
    if (count >= colors.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function colorSwitch1() {
    setColor1(colors[count]);
    if (count >= colors.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function colorSwitch2() {
    setColor2(colors[count]);
    if (count >= colors.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  return (
    <PuzzleDiv>
      <p>◇</p>
      <p>△</p>
      <p>☆</p>
      <ColorDiv color={color} onClick={colorSwitch} />
      <ColorDiv color={color1} onClick={colorSwitch1} />
      <ColorDiv color={color2} onClick={colorSwitch2} />
    </PuzzleDiv>
  );
}
