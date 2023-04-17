import Link from "next/link";
import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";
import { useEffect, useState } from "react";
import EntryForm from "../components/EntryForm";
import { initialCrosswordClues } from "../utils/utils";
import Toast from "../components/Toast";

const StyldedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 667px;
`;

let toastProperties;

export default function Crossword() {
  const [currentClueId, setCurrentClueId] = useState(null);
  const [crosswordClues, setCrosswordClues] = useState(initialCrosswordClues);
  const [toasts, setToasts] = useState([]);
  const [countSubmits, setCountSubmits] = useState(0);
  const [entryCharacterLength, setEntryCharacterLength] = useState(0);

  function handleData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    checkAnswer(data);
    setCountSubmits(countSubmits + 1);

    event.target.reset();
    setEntryCharacterLength(0);
  }

  function getCurrentClueId(crosswordCluesId) {
    setCurrentClueId(crosswordCluesId);
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

    if (enteredAnswer === correctAnswer) {
      toastProperties = {
        id: 2,
        title: "Richtig",
        emoji: "✓",
        ariaLabel: "Hacken",
        borderColor: "green",
      };
      setCrosswordClues((clues) =>
        clues.map((clue) =>
          clue.id === currentClueId
            ? { ...clue, isCorrectlyAnswered: true }
            : clue
        )
      );
      setToasts([toastProperties]);
    } else {
      toastProperties = {
        id: 3,
        title: "Falsch",
        emoji: "✘",
        ariaLabel: "Kreuz",
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

  return (
    <>
      <Link href={"/"}>
        <span>⬅️</span>
      </Link>
      <StyldedDiv>
        <h2>Kreuzworträtsel</h2>
        <CrosswordLayout
          onCurrentClueId={getCurrentClueId}
          crosswordClues={crosswordClues}
        />
        <EntryForm
          onData={handleData}
          onChangeData={handleChangeData}
          currentClueId={currentClueId}
          entryCharacterLength={entryCharacterLength}
        />
        <Toast
          countSubmits={countSubmits}
          toasts={toasts}
          onDeleteToast={handleDeleteToast}
        />
      </StyldedDiv>
    </>
  );
}
