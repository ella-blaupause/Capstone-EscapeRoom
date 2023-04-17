import Link from "next/link";
import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";
import { useState } from "react";
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

  function handleData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    checkAnswer(data);
  }
  function getCurrentClueId(crosswordCluesId) {
    setCurrentClueId(crosswordCluesId);
  }

  function checkAnswer(data) {
    if (currentClueId === null) {
      toastProperties = {
        id: 3,
        title: "Frage auswählen",
        emoji: "?",
        borderColor: "grey",
      };
      return setToasts([toastProperties]);
    }
    const currentCrosswordClue = crosswordClues.find(
      (clue) => clue.id === currentClueId
    );
    const correctAnswer = currentCrosswordClue.answer.toLowerCase();
    console.log(correctAnswer.length);
    const enteredAnswer = data.answer.toLowerCase();

    if (enteredAnswer === correctAnswer) {
      toastProperties = {
        id: 1,
        title: "Richtig",
        emoji: "✓",
        borderColor: "green",
      };
      setCrosswordClues((clues) =>
        clues.map((clue) =>
          clue.id === currentClueId
            ? { ...clue, isCorrectlyAnswered: true }
            : clue
        )
      );
      return setToasts([toastProperties]);
    } else {
      toastProperties = {
        id: 2,
        title: "Falsch",
        emoji: "✘",
        borderColor: "red",
      };
      return setToasts([toastProperties]);
    }
  }
  function handleDeleteToast() {
    setToasts([]);
  }

  return (
    <>
      <Link href={"/"}>
        <button>⬅️</button>
      </Link>
      <StyldedDiv>
        <h2>Kreuzworträtsel</h2>
        <CrosswordLayout
          onCurrentClueId={getCurrentClueId}
          crosswordClues={crosswordClues}
        />
        <EntryForm onData={handleData} currentClueId={currentClueId} />
        <Toast toasts={toasts} onDeleteToast={handleDeleteToast}></Toast>
      </StyldedDiv>
    </>
  );
}
