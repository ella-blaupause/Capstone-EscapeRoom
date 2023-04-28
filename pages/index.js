import Header from "../components/Header";
import MyButton from "../components/MyButton";
import styled from "styled-components";

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

const StyledIntroduction = styled.p`
  padding: 0 25px;
  font-size: 20px;
  text-align: center;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Header>Code Breaker</Header>

      <h3>Finde den Code und entkomme!</h3>
      <StyledIntroduction>
        In diesem Spiel findest du dich in einem Raum voller Puzzleteile und
        versteckter Hinweise wieder. Dein Ziel ist es, den Raum zu verlassen,
        indem du den Farbcode richtig eingibst.
      </StyledIntroduction>
      <StartDiv>
        <MyButton type="button" fontSize={"24px"}>
          Start
        </MyButton>
      </StartDiv>
    </Wrapper>
  );
}
