import styled from "styled-components";

const StyledClue = styled.div`
  width: 375;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const StyledColorDiv = styled.div`
  height: 2em;
  width: 2em;
  display: grid;
  place-items: center;
`;

export default function Clue() {
  return (
    <>
      <p>Gib den Code ein!</p>
      <StyledClue>
        <StyledColorDiv style={{ backgroundColor: "red" }}>△</StyledColorDiv>
        <StyledColorDiv style={{ backgroundColor: "green" }}>☆</StyledColorDiv>
        <StyledColorDiv style={{ backgroundColor: "purple" }}>◇</StyledColorDiv>
      </StyledClue>
    </>
  );
}
