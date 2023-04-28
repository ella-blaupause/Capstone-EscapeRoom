import GlobalStyle from "../styles";
import { colors } from "../utils/utils";
import Layout from "../components/Layout";
import useSolvedPuzlleStore from "../stores/solvedPuzzleStore";

export default function App({ Component, pageProps }) {
  const solvedPuzzles = useSolvedPuzlleStore((state) => state.solvedPuzzles);
  const increaseSolvedPuzzles = useSolvedPuzlleStore(
    (state) => state.increaseSolvedPuzzles
  );

  function handleSolvedPuzzles(currentSolvedPuzzleId) {
    increaseSolvedPuzzles(currentSolvedPuzzleId);
  }
  const isSolvedPuzzleSum = solvedPuzzles.filter(
    (solvedPuzzle) => solvedPuzzle.isSolved && solvedPuzzle.id
  ).length;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          solvedPuzzles={solvedPuzzles}
          onSolvedPuzzles={handleSolvedPuzzles}
          isSolvedPuzzleSum={isSolvedPuzzleSum}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
