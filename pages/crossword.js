import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";
import { useState } from "react";
import { initialCrosswordClues } from "../utils/utils";
import Toast from "../components/Toast";
import Header from "../components/Header";
import EntryChatGPT from "../components/EntryChatGPT";
import useColorCodePuzzleStore from "../stores/colorCodePuzzleStore";
import useCrosswordStore from "../stores/crosswordStore";

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
  //CrosswordStore

  const [crosswordClues, setCrosswordClues] = useState(initialCrosswordClues);
  const [countSubmits, setCountSubmits] = useState(0);
  const [entryCharacterLength, setEntryCharacterLength] = useState(0);
  const [countRightAnswer, setCountRightAnswer] = useState(0);

  const [toasts, setToasts] = useState([]);

  function handleData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    checkAnswer(data);
    setCountSubmits(countSubmits + 1);

    event.target.reset();
    setEntryCharacterLength(0);
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
      setCrosswordClues((clues) =>
        clues.map((clue) =>
          clue.id === currentClueId
            ? { ...clue, isCorrectlyAnswered: true }
            : clue
        )
      );
      setCountRightAnswer(countRightAnswer + 1);
      console.log(countRightAnswer);
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
    setEntryCharacterLength(event.target.value.length);
  }

  console.log();

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

        <Toast
          countSubmits={countSubmits}
          toasts={toasts}
          onDeleteToast={handleDeleteToast}
        />
        <EntryChatGPT />
      </Wrapper>
    </>
  );
}
