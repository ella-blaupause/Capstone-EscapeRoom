import Link from "next/link";
import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";
import { useState } from "react";
import EntryForm from "../components/EntryForm";
import { initialCrosswordClues } from "../utils/utils";

const StyldedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 667px;
`;

export default function Crossword() {
  const [currentClueId, setCurrentClueId] = useState(null);
  const [crosswordClues, setCrosswordClues] = useState(initialCrosswordClues);

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
      alert("Wähle eine Frage aus!");
      return;
    }
    const currentCrosswordClue = crosswordClues.find(
      (clue) => clue.id === currentClueId
    );
    const correctAnswer = currentCrosswordClue.answer.toLowerCase();
    const enteredAnswer = data.answer.toLowerCase();

    if (enteredAnswer === correctAnswer) {
      setCrosswordClues((clues) =>
        clues.map((clue) =>
          clue.id === currentClueId
            ? { ...clue, isCorrectlyAnswered: true }
            : clue
        )
      );
    }
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
      </StyldedDiv>
    </>
  );
}
