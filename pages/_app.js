import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import {
  colors,
  getRandomColor,
  getRandomNumbers,
  initialPuzzlePieces,
  initialSolvedPuzzles,
  symbols,
} from "../utils/utils";
import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import useLightStore from "../store";

const randomNumbers = getRandomNumbers(symbols.length);

export default function App({ Component, pageProps }) {
  const switchLight = useLightStore((state) => state.switchLight);
  const turnLight = useLightStore((state) => state.turnLight);
  const [solvedPuzzles, setSolvedPuzzles] = useState(initialSolvedPuzzles);

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

  const router = useRouter();

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

    if (countPieces + 1 === puzzlePieces.length) {
      handleSolvedPuzzles(2);
    }
  }

  function handleNewGame() {
    router.push("/room");
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
    turnLight();

    //Puzzleteile beim neuen Spiel wieder sichtbar machen und counter auf null setzen
    setPuzzlePieces(initialPuzzlePieces);
    setCountPieces(0);
  }

  function handleToggleOnOff() {
    switchLight();
    handleSolvedPuzzles(1);
  }

  function handleSolvedPuzzles(currentSolvedPuzzleId) {
    setSolvedPuzzles(
      solvedPuzzles.map((solvedPuzzle) =>
        solvedPuzzle.id === currentSolvedPuzzleId
          ? { ...solvedPuzzle, isSolved: true }
          : solvedPuzzle
      )
    );
  }
  const isSolvedPuzzleSum = solvedPuzzles.filter(
    (solvedPuzzle) => solvedPuzzle.isSolved && solvedPuzzle.id
  ).length;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          onNewGame={handleNewGame}
          colors={colors}
          randomColors={randomColors}
          randomSymbols={randomSymbols}
          onToggleOnOff={handleToggleOnOff}
          onCollect={handleCollect}
          puzzlePieces={puzzlePieces}
          countPieces={countPieces}
          solvedPuzzles={solvedPuzzles}
          onSolvedPuzzles={handleSolvedPuzzles}
          isSolvedPuzzleSum={isSolvedPuzzleSum}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
