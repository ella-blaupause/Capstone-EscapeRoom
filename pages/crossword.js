import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";
import { initialCrosswordClues } from "../utils/utils";
import Toast from "../components/Toast";
import Header from "../components/Header";
import EntryChatGPT from "../components/EntryChatGPT";
import useGlobalStore from "../store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  margin: 8px 0 16vh 0;
  font-family: "Comic Sans MS", sans-serif;
`;

const StyledColorDiv1 = styled.div`
  margin: 68px;
  height: 2em;
  width: 2em;
  display: grid;
  font-size: 80px;
  place-items: center;
  background-color: ${(props) => props.color};
`;

export default function Crossword({ onSolvedPuzzles }) {
  const randomColors = useGlobalStore((state) => state.randomColors);
  const randomSymbols = useGlobalStore((state) => state.randomSymbols);
  const countRightAnswer = useGlobalStore((state) => state.countRightAnswer);

  if (countRightAnswer === initialCrosswordClues.length) {
    return (
      <>
        <Header isBackArrow>Kreuzworträtsel</Header>

        <StyledColorDiv1 color={randomColors[1]} data-testid="color-div">
          {randomSymbols[1]}
        </StyledColorDiv1>
      </>
    );
  }

  return (
    <>
      <Header isBackArrow>Kreuzworträtsel</Header>

      <Wrapper>
        <CrosswordLayout onSolvedPuzzles={onSolvedPuzzles} />

        <Toast />
        <EntryChatGPT />
      </Wrapper>
    </>
  );
}
