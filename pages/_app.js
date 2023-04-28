import GlobalStyle from "../styles";
import { colors, initialSolvedPuzzles } from "../utils/utils";
import { useState } from "react";
import Layout from "../components/Layout";

import useLightStore from "../stores/lightStore";
import usePuzzlePiecesStore from "../stores/puzzlePiecesStore";

export default function App({ Component, pageProps }) {
  const switchLight = useLightStore((state) => state.switchLight);
  const puzzlePieces = usePuzzlePiecesStore((state) => state.puzzlePieces);
  const countPieces = usePuzzlePiecesStore((state) => state.countPieces);
  const collectPuzzlePiece = usePuzzlePiecesStore(
    (state) => state.collectPuzzlePiece
  );
  const increaseCountPieces = usePuzzlePiecesStore(
    (state) => state.increaseCountPieces
  );

  const [solvedPuzzles, setSolvedPuzzles] = useState(initialSolvedPuzzles);

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
          colors={colors}
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
