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

export default function Clue({ randomColor }) {
  return (
    <>
      <p>Gib den Code ein!</p>
      <StyledClue>
        <StyledColorDiv style={{ backgroundColor: randomColor[0] }}>
          △
        </StyledColorDiv>
        <StyledColorDiv style={{ backgroundColor: randomColor[1] }}>
          ☆
        </StyledColorDiv>
        <StyledColorDiv style={{ backgroundColor: randomColor[2] }}>
          ◇
        </StyledColorDiv>
      </StyledClue>
    </>
  );
}
