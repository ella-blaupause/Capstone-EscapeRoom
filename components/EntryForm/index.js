import styled from "styled-components";
import { initialCrosswordClues } from "../../utils/utils";

const StyledForm = styled.form`
  grid-column: 1 / span 2;
  grid-row: 2;
`;

export default function EntryForm({ onData, currentClueId }) {
  return (
    <StyledForm onSubmit={onData}>
      <legend>Hinweis:</legend>
      <label htmlFor="answer">
        {currentClueId
          ? initialCrosswordClues[currentClueId - 1].question
          : "Wähle eine Frage aus"}
      </label>
      <br />
      <input
        id="answer"
        type="text"
        name="answer"
        placeholder="Antwort eingeben"
      />
    </StyledForm>
  );
}
