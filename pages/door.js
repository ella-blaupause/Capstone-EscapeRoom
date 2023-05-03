import dynamic from "next/dynamic";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { colors } from "../utils/utils";
import useGlobalStore from "../store";

const ColorPuzzle = dynamic(() => import("../components/ColorPuzzle"), {
  ssr: false,
});

export default function Door({ onSolvedPuzzles }) {
  const colorCounts = useGlobalStore((state) => state.colorCounts);
  const randomColors = useGlobalStore((state) => state.randomColors);

  if (
    colors[colorCounts.firstDiv % colors.length] === randomColors[2] &&
    colors[colorCounts.secondDiv % colors.length] === randomColors[0] &&
    colors[colorCounts.thirdDiv % colors.length] === randomColors[1]
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

      <ColorPuzzle onSolvedPuzzles={onSolvedPuzzles} />
    </>
  );
}
