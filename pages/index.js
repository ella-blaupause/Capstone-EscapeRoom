import Link from "next/link";
import styled from "styled-components";
import Clue from "../components/Clue";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const StyledLayout = styled.div`
  background-color: ghostwhite;
  border: solid ghostwhite;
  filter: ${(props) => (props.isOn ? "brightness(100%)" : "brightness(75%)")};
  width: 375px;
  height: 667px;
`;

const DoorButton = styled.button`
  width: 100spx;
  height: 150px;
  position: absolute;
  transform: translate(0, -50%);
  right: 0;
  top: 50%;
  font-size: 80px;
`;

const LightButton = styled.button`
  position: absolute;
  transform: translate(0, -50%);
  right: 100px;
  top: 50%;
`;

export default function Room({ randomColor, randomSymbol }) {
  const [isOn, setIsOn] = useLocalStorageState("isOn", { defaultValue: true });
  // Es wir nur beim zweiten Mal gerendert
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
          {!isOn && (
            <Clue randomColor={randomColor} randomSymbol={randomSymbol} />
          )}
          <Link href={"/door"}>
            <DoorButton>🚪</DoorButton>
          </Link>
          <LightButton type="button" onClick={toggleOnOff}>
            on/off
          </LightButton>
        </StyledLayout>
      )}
    </>
  );
}
