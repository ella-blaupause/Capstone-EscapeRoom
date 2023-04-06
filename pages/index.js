import Link from "next/link";
import styled from "styled-components";
import Clue from "../components/Clue";
import { useEffect, useState } from "react";

const StyledLayout = styled.div`
  background-color: ${({ isOn }) => {
    isOn ? "white" : "lightgray";
  }};
  width: 300px;
  height: 100vw;
`;

/* filter: ${({ isOn }) => {
  isOn ? "none" : "brightness(70%)";
}}; */
const RoomDiv = styled.div`
  display: relativ;

  width: 300px;
  height: 100vw;
`;
const DoorButton = styled.button`
  width: 100px;
  height: 150px;
  position: absolute;
  transform: translate(0, -50%);
  right: 100px;
  top: 50%;
  font-size: 80px;
`;

const LightButton = styled.button`
  position: absolute;
  transform: translate(0, -50%);
  right: 200px;
  top: 50%;
`;

export default function Room({ randomColor, randomSymbol }) {
  const [isOn, setIsOn] = useState(true);
  // Componente wir nur beim zweiten Mal gerendert
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  function toggleOnOff() {
    setIsOn(!isOn);
  }

  return (
    <>
      {isClient && (
        <StyledLayout isOn={isOn}>
          <RoomDiv>
            <Clue randomColor={randomColor} randomSymbol={randomSymbol} />
            <Link href={"/door"}>
              <DoorButton>🚪</DoorButton>
            </Link>
            <LightButton type="button" onClick={toggleOnOff}>
              on/off
            </LightButton>
          </RoomDiv>
        </StyledLayout>
      )}
    </>
  );
}
