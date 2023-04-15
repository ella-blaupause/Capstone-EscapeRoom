import styled from "styled-components";
import { crosswordClues } from "../../utils/utils";

const StyledTable = styled.table`
  border-collapse: collapse;
  grid-column: 1;
  grid-row: 1;
`;

//Styled vor Tr  und Td weggelassen, wegen besserer Lesbarkeit
const Tr = styled.tr`
  text-align: center;
`;

const Td = styled.td`
  width: 20px;
  height: 20px;
  display: table-cell;
  border: solid black;
  background-color: ${({ isBlack }) => (isBlack ? "black" : null)};
`;

const StyledOl = styled.ol`
  grid-column: 2;
  grid-row: 1;
`;
const StyledForm = styled.form`
  grid-column: 1 / span 2;
  grid-row: 2;
`;

export default function CrosswordLayout() {
  const [currentClueId, setCurrentClueId] = useState(null);
  const [crosswordClues, setCrosswordClues] = useState(initialCrosswordClues);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    checkAnswer(data);
  }
  function handleClick(crosswordCluesId) {
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
      console.log("richtig");
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
      <StyledTable>
        <tbody>
          <Tr>
            <Td isBlack></Td>
            <Td>
              <sup>1</sup>
              {crosswordClues[0].isCorrectlyAnswered ? "M" : null}
            </Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td>
              <sup>2</sup>
              {crosswordClues[0].isCorrectlyAnswered ||
              crosswordClues[1].isCorrectlyAnswered
                ? "U"
                : null}
            </Td>
            <Td>{crosswordClues[1].isCorrectlyAnswered ? "H" : null}</Td>
            <Td>{crosswordClues[1].isCorrectlyAnswered ? "R" : null}</Td>
            <Td isBlack></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td>{crosswordClues[0].isCorrectlyAnswered ? "S" : null}</Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td>
              <sup>4</sup>
              {crosswordClues[3].isCorrectlyAnswered ? "O" : null}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <sup>3</sup>
              {crosswordClues[2].isCorrectlyAnswered ? "T" : null}
            </Td>
            <Td>
              {crosswordClues[0].isCorrectlyAnswered ||
              crosswordClues[2].isCorrectlyAnswered
                ? "I"
                : null}
            </Td>
            <Td>{crosswordClues[2].isCorrectlyAnswered ? "S" : null}</Td>
            <Td>{crosswordClues[2].isCorrectlyAnswered ? "C" : null}</Td>
            <Td>
              {crosswordClues[2].isCorrectlyAnswered ||
              crosswordClues[3].isCorrectlyAnswered
                ? "H"
                : null}
            </Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td>{crosswordClues[0].isCorrectlyAnswered ? "K" : null}</Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td>{crosswordClues[3].isCorrectlyAnswered ? "R" : null}</Td>
          </Tr>
        </tbody>
      </StyledTable>
      <StyledOl>
        {crosswordClues.map((crosswordClue) => (
          <li
            key={crosswordClue.id}
            onClick={() => handleClick(crosswordClue.id)}
          >
            {crosswordClue.question}
          </li>
        ))}
      </StyledOl>
      <StyledForm onSubmit={handleSubmit}>
        <legend>Hinweis:</legend>
        <label htmlFor="answer">
          {currentClueId
            ? crosswordClues[currentClueId - 1].question
            : "Wähle eine Frage aus"}
        </label>
        <br />
        <input id="answer" type="text" name="answer" />
      </StyledForm>{" "}
    </>
  );
}
