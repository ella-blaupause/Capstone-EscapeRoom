import Link from "next/link";
import styled from "styled-components";
import Clue from "../components/Clue";
import PuzzlePieces from "../components/PuzzlePieces";
import CollectingArea from "../components/CollectingArea";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";

const GridContainer = styled.div`
  background-color: ghostwhite;
  border: solid ghostwhite;
  filter: ${(props) => (props.isOn ? "brightness(100%)" : "brightness(75%)")};
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(22, 1fr);
  width: 375px;
  height: 83vh;
`;

const StyledDoor = styled(Link)`
  grid-column: 12 / span 3;
  grid-row: 7 / span 4;
  z-index: 1;
  text-decoration: none;
  cursor: default;
`;

const DoorDiv = styled.div`
  margin: 0 10px 0 10px;
  width: 120px;
  height: 280px;
`;

const StyledLightButton = styled.button`
  grid-column: 11;
  grid-row: 11 / span 2;
  background-color: transparent;
  border: none;
  margin: 12px 0;
`;

const StyledPaper = styled(Link)`
  grid-column: 13 / span 3;
  grid-row: 19 / span 2;
  z-index: 1;
  text-decoration: none;
  cursor: default;
`;

const PaperDiv = styled.div`
  width: 60px;
  height: 30px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  opacity: 0.9;
  user-select: none;
  z-index: -1;
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
          <StyledImage src="/zimmer-real.jpg" fill alt="" />
          <CollectingArea
            countPieces={countPieces}
            puzzlePieces={puzzlePieces}
            randomColors={randomColors}
            randomSymbols={randomSymbols}
          />
          {!isOn && (
            <Clue randomColors={randomColors} randomSymbols={randomSymbols} />
          )}
          <StyledDoor href={"/door"}>
            <DoorDiv />
          </StyledDoor>
          <PuzzlePieces onCollect={onCollect} puzzlePieces={puzzlePieces} />
          <StyledLightButton
            type="button"
            onClick={onToggleOnOff}
          ></StyledLightButton>
          <StyledPaper href={"/crossword"}>
            <PaperDiv />
          </StyledPaper>
        </GridContainer>
      )}
    </>
  );
}
