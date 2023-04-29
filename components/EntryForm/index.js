import styled from "styled-components";
import { initialCrosswordClues } from "../../utils/utils";
import useGlobalStore from "../../store";

const StyledForm = styled.form`
  grid-column: 1 / span 2;
  grid-row: 2;
  margin: 10px 0;
  width: 260px;
`;
let answerLength;
let toastProperties;

export default function EntryForm({ onSolvedPuzzles }) {
  const currentClueId = useGlobalStore((state) => state.currentClueId);
  const entryCharacterLength = useGlobalStore(
    (state) => state.entryCharacterLength
  );
  const increaseCountRightAnswer = useGlobalStore(
    (state) => state.increaseCountRightAnswer
  );
  const resetEntryCharacterLength = useGlobalStore(
    (state) => state.resetEntryCharacterLength
  );
  const crosswordClues = useGlobalStore((state) => state.crosswordClues);
  const correctlyAnsweredCrosswordClue = useGlobalStore(
    (state) => state.correctlyAnsweredCrosswordClue
  );
  const countEntryCharacterLength = useGlobalStore(
    (state) => state.countEntryCharacterLength
  );
  const createToasts = useGlobalStore((state) => state.createToasts);
  const increaseCountSubmits = useGlobalStore(
    (state) => state.increaseCountSubmits
  );
  const countRightAnswer = useGlobalStore((state) => state.countRightAnswer);

  if (currentClueId === null) {
    answerLength = 0;
  } else {
    const currentCrosswordClue = initialCrosswordClues.find(
      (clue) => clue.id === currentClueId
    );

    answerLength = currentCrosswordClue.answer.length;
  }
  function handleSubmit(event) {
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
      return createToasts(toastProperties);
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

      createToasts(toastProperties);
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
      createToasts(toastProperties);
    }
  }
  function handleChangeData(event) {
    countEntryCharacterLength(event);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <legend>Hinweis:</legend>

        <label htmlFor="answer">
          {currentClueId
            ? `${currentClueId}. ` +
              initialCrosswordClues[currentClueId - 1].question
            : "Wähle eine Frage aus"}
        </label>
        <br />
        <input
          id="answer"
          type="text"
          name="answer"
          placeholder="Antwort eingeben"
          onChange={(event) => handleChangeData(event)}
        />
        <button type="submit">ok</button>
        <br />
        <small>
          ({entryCharacterLength} von {answerLength})
        </small>
      </fieldset>
    </StyledForm>
  );
}
