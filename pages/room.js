import Link from "next/link";
import styled from "styled-components";
import Clue from "../components/Clue";
import PuzzlePieces from "../components/PuzzlePieces";
import CollectingArea from "../components/CollectingArea";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const GridContainer = styled.div`
  background-color: ghostwhite;
  border: solid ghostwhite;
  filter: ${(props) => (props.isOn ? "brightness(100%)" : "brightness(75%)")};
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(20, 1fr);
  width: 375px;
  height: 83vh;
`;

const StyledDoor = styled(Link)`
  font-size: 100px;
  grid-column: 12 / span 2;
  grid-row: 10 / span 3;
  z-index: -1;
  text-decoration: none;
  cursor: default;
`;

const StyledLightButton = styled.button`
  grid-column: 11;
  grid-row: 11;
`;

const StyledPaper = styled(Link)`
  font-size: 60px;
  grid-column: 11 / span 2;
  grid-row: 16 / span 2;
  z-index: 1;
  text-decoration: none;
  cursor: default;
`;

export default function Room({
  onCollect,
  puzzlePieces,
  countPieces,
  randomColors,
  randomSymbols,
  onToggleOnOff,
  isOn,
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <Header>Zimmer</Header>
      {isClient && (
        <GridContainer isOn={isOn}>
          <CollectingArea
            countPieces={countPieces}
            puzzlePieces={puzzlePieces}
            randomColors={randomColors}
            randomSymbols={randomSymbols}
          />
          {!isOn && (
            <Clue randomColors={randomColors} randomSymbols={randomSymbols} />
          )}
          <StyledDoor href={"/door"}>🚪</StyledDoor>
          <PuzzlePieces onCollect={onCollect} puzzlePieces={puzzlePieces} />
          <StyledLightButton type="button" onClick={onToggleOnOff}>
            on/off
          </StyledLightButton>
          <StyledPaper href={"/crossword"}>📝</StyledPaper>
        </GridContainer>
      )}
    </>
  );
}
