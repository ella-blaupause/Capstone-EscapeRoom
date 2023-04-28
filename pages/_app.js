import GlobalStyle from "../styles";
import {
  colors,
  getRandomColor,
  getRandomNumbers,
  initialSolvedPuzzles,
  symbols,
} from "../utils/utils";
import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import useLightStore from "../stores/lightStore";
import usePuzzlePiecesStore from "../stores/puzzlePiecesStore";

const randomNumbers = getRandomNumbers(symbols.length);

export default function App({ Component, pageProps }) {
  const switchLight = useLightStore((state) => state.switchLight);
  const turnLight = useLightStore((state) => state.turnLight);
  const puzzlePieces = usePuzzlePiecesStore((state) => state.puzzlePieces);
  const countPieces = usePuzzlePiecesStore((state) => state.countPieces);
  const collectPuzzlePiece = usePuzzlePiecesStore(
    (state) => state.collectPuzzlePiece
  );
  const increaseCountPieces = usePuzzlePiecesStore(
    (state) => state.increaseCountPieces
  );
  const newGamePuzzlePieces = usePuzzlePiecesStore(
    (state) => state.newGamePuzzlePieces
  );
  const newGameCountPieces = usePuzzlePiecesStore(
    (state) => state.newGameCountPieces
  );

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

  const router = useRouter();

  function handleCollect(puzzlePieceId) {
    const piece = puzzlePieces.find((piece) => piece.id === puzzlePieceId);

    if (!piece.isCollected) {
      increaseCountPieces();
      collectPuzzlePiece(puzzlePieceId);
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

    turnLight();

    newGamePuzzlePieces();
    newGameCountPieces();
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
          solvedPuzzles={solvedPuzzles}
          onSolvedPuzzles={handleSolvedPuzzles}
          isSolvedPuzzleSum={isSolvedPuzzleSum}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
