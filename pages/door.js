import dynamic from "next/dynamic";
import useLocalStorageState from "use-local-storage-state";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import useColorCodePuzzleStore from "../stores/colorCodePuzzleStore";

const ColorPuzzle = dynamic(() => import("../components/ColorPuzzle"), {
  ssr: false,
});

export default function Door({ colors, onSolvedPuzzles }) {
  const colorCounts = useColorCodePuzzleStore((state) => state.colorCounts);

  const randomColors = useColorCodePuzzleStore((state) => state.randomColors);
  const randomSymbols = useColorCodePuzzleStore((state) => state.randomSymbols);

  if (
    colors[colorCounts.first] === randomColors[2] &&
    colors[colorCounts.second] === randomColors[0] &&
    colors[colorCounts.third] === randomColors[1]
  ) {
    return (
      <>
        <Header>Tür</Header>
        <h1>Freiheit</h1>

        <MyButton fontSize={"16px"}>Noch mal spielen</MyButton>
      </>
    );
  }

  return (
    <>
      <Header isBackArrow>Tür</Header>

      <ColorPuzzle colors={colors} onSolvedPuzzles={onSolvedPuzzles} />
    </>
  );
}
