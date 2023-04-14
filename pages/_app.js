import GlobalStyle from "../styles";
import {
  colors,
  getRandomColor,
  getRandomNumbers,
  initialPuzzlePieces,
  symbols,
} from "../utils/utils";
import { useState } from "react";

const randomNumbers = getRandomNumbers(symbols.length);

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(true);

  const [randomColor, setRandomColor] = useState([
    colors[getRandomColor()],
    colors[getRandomColor()],
    colors[getRandomColor()],
  ]);

  const [randomSymbol, setRandomSymbol] = useState([
    symbols[randomNumbers[0]],
    symbols[randomNumbers[1]],
    symbols[randomNumbers[2]],
  ]);

  const [puzzlePieces, setPuzzlePieces] = useState(initialPuzzlePieces);
  const [countPieces, setCountPieces] = useState(0);

  function handleCollect(puzzlePieceId) {
    const piece = puzzlePieces.find((piece) => piece.id === puzzlePieceId);
    if (piece && piece.isCountable) {
      setCountPieces(countPieces + 1);
      setPuzzlePieces((pieces) =>
        pieces.map((p) =>
          p.id === puzzlePieceId
            ? { ...piece, isCollected: true, isCountable: false }
            : p
        )
      );
    }
  }

  function handleNewGame() {
    //generiert einen neuen Color Code
    const randomNumbers = getRandomNumbers(symbols.length);

    setRandomSymbol([
      symbols[[randomNumbers[0]]],
      symbols[[randomNumbers[1]]],
      symbols[[randomNumbers[2]]],
    ]);
    setRandomColor([
      colors[getRandomColor()],
      colors[getRandomColor()],
      colors[getRandomColor()],
    ]);

    //Licht beim neuen Spiel wieder an machen
    setIsOn(true);

    //Puzzleteile beim neuen Spiel wieder sichtbar machen und counter auf null setzen
    setPuzzlePieces(initialPuzzlePieces);
    setCountPieces(0);
  }

  function handleToggleOnOff() {
    setIsOn(!isOn);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        onNewGame={handleNewGame}
        colors={colors}
        randomColor={randomColor}
        randomSymbol={randomSymbol}
        onToggleOnOff={handleToggleOnOff}
        onCollect={handleCollect}
        puzzlePieces={puzzlePieces}
        countPieces={countPieces}
        isOn={isOn}
        {...pageProps}
      />
    </>
  );
}
