import { useState } from "react";
import Toast from "../Toast";
import SvgChatGPT from "../../utils/icons";

let toastProperties;

export default function EntryChatGPT() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  const [toasts, setToasts] = useState([]);
  const [countSubmits, setCountSubmits] = useState(0);

  async function onSubmit(event) {
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
      console.log(data.result);
      setQuestionInput("");
    } catch (error) {
      toastProperties = {
        id: 1,
        title: "Frage eingeben",
        emoji: "! ",
        ariaLabel: "",
        borderColor: "grey",
      };
      setCountSubmits(countSubmits + 1);
      return setToasts([toastProperties]);
    }
  }
  function handleDeleteToast() {
    setToasts([]);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>
            <SvgChatGPT />
          </legend>

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
            onChange={(event) => setQuestionInput(event.target.value)}
          />
          <button type="submit">Frage absenden</button>
        </fieldset>
      </form>
      <p>Antwort: {result}</p>
      <Toast
        countSubmits={countSubmits}
        toasts={toasts}
        onDeleteToast={handleDeleteToast}
      />
    </>
  );
}
