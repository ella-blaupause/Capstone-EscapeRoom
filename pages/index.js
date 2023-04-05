import Link from "next/link";
import styled from "styled-components";

const DoorButton = styled.button`
  width: 100px;
  height: 150px;
  position: absolute;
  transform: translate(0,-50%);
  right: 50px;
  top 50%;
  font-size: 80px
`;

const RoomDiv = styled.div`
  display: relativ;
  width: 300px;
`;

export default function Room() {
  return (
    <RoomDiv>
      <Link href={"/door"}>
        <DoorButton>🚪</DoorButton>
      </Link>
    </RoomDiv>
  );
}
