import { useState } from "react";
import Toast from "../Toast";
import SvgChatGPT from "../../utils/icons";
import styled from "styled-components";
import useGlobalStore from "../../store";

const StyledFormChatGPT = styled.form`
  width: 260px;
`;

let toastProperties;

export default function EntryChatGPT() {
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);
  const createToasts = useGlobalStore((state) => state.createToasts);
  const increaseCountSubmits = useGlobalStore(
    (state) => state.increaseCountSubmits
  );
  const questionInput = useGlobalStore((state) => state.questionInput);
  const cacheQuestionInput = useGlobalStore(
    (state) => state.cacheQuestionInput
  );
  const [result, setResult] = useState();
  const isAnswered = useGlobalStore((state) => state.isAnswered);
  const setIsAnswered = useGlobalStore((state) => state.setIsAnswered);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setIsAnswered(true);
    } catch (error) {
      toastProperties = {
        id: 1,
        title: "Frage eingeben",
        emoji: "! ",
        ariaLabel: "",
        borderColor: "grey",
      };
      increaseCountSubmits();
      return createToasts(toastProperties);
    }
  }

  return (
    <>
      <StyledFormChatGPT onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <SvgChatGPT isDarkMode={isDarkMode} />
          </legend>
          <>
            {isAnswered ? (
              <>
                <p>Deine Frage: {questionInput}</p>
                <p>Antwort: {result}</p>
              </>
            ) : (
              <>
                <label htmlFor="question">
                  Du brauchst Hilfe? Vielleicht bringt dich ChatGPT weiter!
                </label>
                <br />
                <input
                  type="text"
                  name="question"
                  id="question"
                  placeholder="Gib deine Frage ein ..."
                  value={questionInput}
                  onChange={(event) => cacheQuestionInput(event)}
                />
                <button type="submit">Frage absenden</button>
              </>
            )}
          </>
        </fieldset>
      </StyledFormChatGPT>

      <Toast />
    </>
  );
}
