import { useState } from "react";
import Toast from "../Toast";

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
      // Consider implementing your own error handling logic here

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
    <div>
      <h3>Brauchst du Hilfe? Frag ChatGPT:</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="animal"
          placeholder="Gib deine Frage ein ..."
          value={questionInput}
          onChange={(event) => setQuestionInput(event.target.value)}
        />
        <button type="submit">Frage absenden</button>
      </form>
      <p>{result}</p>
      <Toast
        countSubmits={countSubmits}
        toasts={toasts}
        onDeleteToast={handleDeleteToast}
      />
    </div>
  );
}
