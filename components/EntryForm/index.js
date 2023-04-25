import styled from "styled-components";
import { initialCrosswordClues } from "../../utils/utils";

const StyledForm = styled.form`
  grid-column: 1 / span 2;
  grid-row: 2;
  margin: 10px 0;
  width: 260px;
`;

export default function EntryForm({
  onData,
  currentClueId,
  onChangeData,
  entryCharacterLength,
}) {
  let answerLength;
  if (currentClueId === null) {
    answerLength = 0;
  } else {
    const currentCrosswordClue = initialCrosswordClues.find(
      (clue) => clue.id === currentClueId
    );

    answerLength = currentCrosswordClue.answer.length;
  }

  return (
    <StyledForm onSubmit={onData}>
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
          onChange={(event) => onChangeData(event)}
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
