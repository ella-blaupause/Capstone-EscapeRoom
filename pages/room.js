import Link from "next/link";
import styled from "styled-components";
import Clue from "../components/Clue";
import PuzzlePieces from "../components/PuzzlePieces";
import CollectingArea from "../components/CollectingArea";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import useLightStore from "../stores/lightStore";

const GridContainer = styled.div`
  background-color: ghostwhite;
  border: solid black;
  filter: ${(props) => (props.isOn ? "brightness(100%)" : "brightness(75%)")};
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(22, 1fr);
  width: 375px;
  height: 83vh;
  margin: 0 0 8vh 0;
  position: relative;
  @media (max-width: 414px) {
    width: 100%;
  }
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
  position: absolute;
  object-fit: cover;
  user-select: none;
  z-index: -1;
`;

export default function Room({
  onCollect,
  puzzlePieces,
  onSolvedPuzzles,
  onSolvedPuzzle,
}) {
  const isOn = useLightStore((state) => state.isOn);
  const switchLight = useLightStore((state) => state.switchLight);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  function handleToggleOnOff() {
    switchLight();
    onSolvedPuzzles(1);
  }
  return (
    <>
      <Header>Zimmer</Header>
      {isClient && (
        <GridContainer isOn={isOn}>
          <StyledImage src="/zimmer-real.jpg" fill alt="" priority />
          <CollectingArea />
          {!isOn && <Clue />}
          <StyledDoor href={"/door"}>
            <DoorDiv />
          </StyledDoor>
          <PuzzlePieces onSolvedPuzzles={onSolvedPuzzles} />
          <StyledLightButton
            type="button"
            onClick={handleToggleOnOff}
          ></StyledLightButton>
          <StyledPaper href={"/crossword"}>
            <PaperDiv />
          </StyledPaper>
        </GridContainer>
      )}
    </>
  );
}
