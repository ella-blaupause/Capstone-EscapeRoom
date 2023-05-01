import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import useGlobalStore from "../store";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const solvedPuzzles = useGlobalStore((state) => state.solvedPuzzles);
  const increaseSolvedPuzzles = useGlobalStore(
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
      <SessionProvider session={pageProps.session}>
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <Component
              solvedPuzzles={solvedPuzzles}
              onSolvedPuzzles={handleSolvedPuzzles}
              isSolvedPuzzleSum={isSolvedPuzzleSum}
              {...pageProps}
            />
          </Layout>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
