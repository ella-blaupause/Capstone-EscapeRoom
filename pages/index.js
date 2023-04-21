import Header from "../components/Header";
import MyButton from "../components/MyButton";
import styled from "styled-components";
import { HouseSvg } from "../utils/icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 667px;
`;

const StartDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export default function HomePage({ onNewGame }) {
  return (
    <Wrapper>
      <Header>Escape Room</Header>
      <StartDiv>
        <MyButton type="button" fontSize={"24px"} onNewGame={onNewGame}>
          Start
        </MyButton>
      </StartDiv>
    </Wrapper>
  );
}
