import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";
import { useState } from "react";
import { initialCrosswordClues } from "../utils/utils";
import Toast from "../components/Toast";
import Header from "../components/Header";
import EntryChatGPT from "../components/EntryChatGPT";
import useColorCodePuzzleStore from "../stores/colorCodePuzzleStore";
import useCrosswordStore from "../stores/crosswordStore";
import useToastStore from "../stores/toastStore";

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

let toastProperties;

export default function Crossword({ onSolvedPuzzles }) {
  const randomColors = useColorCodePuzzleStore((state) => state.randomColors);
  const randomSymbols = useColorCodePuzzleStore((state) => state.randomSymbols);

  const currentClueId = useCrosswordStore((state) => state.currentClueId);
  const countRightAnswer = useCrosswordStore((state) => state.countRightAnswer);
  const increaseCountRightAnswer = useCrosswordStore(
    (state) => state.increaseCountRightAnswer
  );
  const entryCharacterLength = useCrosswordStore(
    (state) => state.entryCharacterLength
  );
  const countEntryCharacterLength = useCrosswordStore(
    (state) => state.countEntryCharacterLength
  );
  const resetEntryCharacterLength = useCrosswordStore(
    (state) => state.resetEntryCharacterLength
  );

  const crosswordClues = useCrosswordStore((state) => state.crosswordClues);
  const correctlyAnsweredCrosswordClue = useCrosswordStore(
    (state) => state.correctlyAnsweredCrosswordClue
  );

  const [toasts, setToasts] = useState([]);
  const increaseCountSubmits = useToastStore(
    (state) => state.increaseCountSubmits
  );

  function handleData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    checkAnswer(data);
    increaseCountSubmits();

    event.target.reset();
    resetEntryCharacterLength();
  }

  //Überprüft Antwort und gibt Toastmassege
  function checkAnswer(data) {
    if (currentClueId === null) {
      toastProperties = {
        id: 1,
        title: "Frage auswählen",
        emoji: "?",
        ariaLabel: "",
        borderColor: "grey",
      };
      return setToasts([toastProperties]);
    }

    const currentCrosswordClue = crosswordClues.find(
      (clue) => clue.id === currentClueId
    );
    const correctAnswer = currentCrosswordClue.answer.toLowerCase();
    const enteredAnswer = data.answer.toLowerCase();

    if (
      enteredAnswer === correctAnswer &&
      crosswordClues[currentClueId - 1].isCorrectlyAnswered === false
    ) {
      toastProperties = {
        id: 2,
        title: "Richtig",
        emoji: "✓",
        ariaLabel: "Richtig Haken",
        borderColor: "green",
      };
      correctlyAnsweredCrosswordClue();
      increaseCountRightAnswer();

      setToasts([toastProperties]);
      if (countRightAnswer + 1 === initialCrosswordClues.length) {
        onSolvedPuzzles(3);
      }
    } else if (enteredAnswer !== correctAnswer) {
      toastProperties = {
        id: 3,
        title: "Falsch",
        emoji: "✘",
        ariaLabel: "Falsch Kreuz",
        borderColor: "red",
      };
      setToasts([toastProperties]);
    }
  }

  function handleDeleteToast() {
    setToasts([]);
  }

  function handleChangeData(event) {
    countEntryCharacterLength(event);
  }

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
        <CrosswordLayout
          crosswordClues={crosswordClues}
          onData={handleData}
          onChangeData={handleChangeData}
          entryCharacterLength={entryCharacterLength}
        />

        <Toast toasts={toasts} onDeleteToast={handleDeleteToast} />
        <EntryChatGPT />
      </Wrapper>
    </>
  );
}
