import Link from "next/link";
import styled from "styled-components";
import Clue from "../components/Clue";
import { initialPuzzlePieces } from "../utils/utils";
import { useState } from "react";
import PuzzlePieces from "../components/PuzzlePieces";

const GridContainer = styled.div`
  background-color: ghostwhite;
  border: solid ghostwhite;
  filter: ${(props) => (props.isOn ? "brightness(100%)" : "brightness(75%)")};
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(20, 1fr);
  width: 375px;
  height: 667px;
`;

const DoorButton = styled(Link)`
  font-size: 100px;
  grid-column: 12 / span 2;
  grid-row: 10 / span 3;
  z-index: -1;
  text-decoration: none;
  cursor: default;
`;

const LightButton = styled.button`
  grid-column: 11;
  grid-row: 11;
`;

export default function Room({
  randomColor,
  randomSymbol,
  onToggleOnOff,
  isOn,
}) {
  return (
    <GridContainer isOn={isOn}>
      {!isOn && <Clue randomColor={randomColor} randomSymbol={randomSymbol} />}

      <DoorButton href={"/door"}>🚪</DoorButton>
      <PuzzlePieces />

      <LightButton type="button" onClick={onToggleOnOff}>
        on/off
      </LightButton>
    </GridContainer>
  );
}
