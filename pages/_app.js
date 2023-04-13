import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import {
  colors,
  getRandomColor,
  getRandomNumbers,
  initialPuzzlePieces,
  symbols,
} from "../utils/utils";

const randomNumbers = getRandomNumbers(symbols.length);

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useLocalStorageState("isOn", { defaultValue: true });

  const [randomColor, setRandomColor] = useLocalStorageState("randomColor", {
    defaultValue: [
      colors[getRandomColor()],
      colors[getRandomColor()],
      colors[getRandomColor()],
    ],
  });

  const [randomSymbol, setRandomSymbol] = useLocalStorageState("randomSymbol", {
    defaultValue: [
      symbols[randomNumbers[0]],
      symbols[randomNumbers[1]],
      symbols[randomNumbers[2]],
    ],
  });

  const [puzzlePieces, setPuzzlePieces] = useLocalStorageState("puzzlePieces", {
    defaultValue: initialPuzzlePieces,
  });
  const [countPieces, setCountPieces] = useLocalStorageState("countPieces", {
    defaultValue: 0,
  });
  function handleCollect(puzzlePieceId) {
    if (puzzlePieces[puzzlePieceId].isCountable === true) {
      setCountPieces(countPieces + 1);
      setPuzzlePieces(
        puzzlePieces.map((puzzlePiece) => {
          return puzzlePiece.id === puzzlePieceId
            ? { ...puzzlePiece, isCollected: true, isCountable: false }
            : puzzlePiece;
        })
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
