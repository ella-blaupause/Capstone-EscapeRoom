import useLocalStorageState from "use-local-storage-state";
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
  const [isOn, setIsOn] = useLocalStorageState("isOn", { defaultValue: true });

  const [randomColors, setRandomColors] = useState([
    colors[getRandomColor()],
    colors[getRandomColor()],
    colors[getRandomColor()],
  ]);

  const [randomSymbols, setRandomSymbols] = useState([
    symbols[randomNumbers[0]],
    symbols[randomNumbers[1]],
    symbols[randomNumbers[2]],
  ]);

  const [puzzlePieces, setPuzzlePieces] = useLocalStorageState("puzzlePiece", {
    defaultValue: initialPuzzlePieces,
  });

  const [countPieces, setCountPieces] = useLocalStorageState("countPieces", {
    defaultValue: 0,
  });

  function handleCollect(puzzlePieceId) {
    const piece = puzzlePieces.find((piece) => piece.id === puzzlePieceId);
    if (!piece.isCollected) {
      setCountPieces(countPieces + 1);
      setPuzzlePieces((pieces) =>
        pieces.map((p) =>
          p.id === puzzlePieceId ? { ...piece, isCollected: true } : p
        )
      );
    }
  }

  function handleNewGame() {
    //generiert einen neuen Color Code
    const randomNumbers = getRandomNumbers(symbols.length);

    setRandomSymbols([
      symbols[[randomNumbers[0]]],
      symbols[[randomNumbers[1]]],
      symbols[[randomNumbers[2]]],
    ]);
    setRandomColors([
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
        randomColors={randomColors}
        randomSymbols={randomSymbols}
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
