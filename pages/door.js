import dynamic from "next/dynamic";
import useLocalStorageState from "use-local-storage-state";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import useColorCodePuzzleStore from "../stores/colorCodePuzzleStore";

const ColorPuzzle = dynamic(() => import("../components/ColorPuzzle"), {
  ssr: false,
});

export default function Door({ onNewGame, colors, onSolvedPuzzles }) {
  const [colorCounts, setcolorCounts] = useLocalStorageState("colorCounts", {
    defaultValue: { first: 2, second: 2, third: 2 },
  });
  const randomColors = useColorCodePuzzleStore((state) => state.randomColors);
  const randomSymbols = useColorCodePuzzleStore((state) => state.randomSymbols);

  function handleColorSwitch(props) {
    if (props === "first") {
      if (colorCounts.first >= colors.length - 1) {
        colorCounts.first = -1;
        setcolorCounts({ first: colorCounts.first, ...colorCounts });
      }
      colorCounts.first++;
      setcolorCounts({ first: colorCounts.first, ...colorCounts });
    } else if (props === "second") {
      if (colorCounts.second >= colors.length - 1) {
        colorCounts.second = -1;
        setcolorCounts({ second: colorCounts.second, ...colorCounts });
      }
      colorCounts.second++;
      setcolorCounts({ second: colorCounts.second, ...colorCounts });
    } else if (props === "third") {
      if (colorCounts.third >= colors.length - 1) {
        colorCounts.third = -1;
        setcolorCounts({ third: colorCounts.third, ...colorCounts });
      }
      colorCounts.third++;
      setcolorCounts({ third: colorCounts.third, ...colorCounts });
    } else {
      setcolorCounts({ first: 0, second: 0, third: 0 });
    }
    if (
      colors[colorCounts.first] === randomColors[2] &&
      colors[colorCounts.second] === randomColors[0] &&
      colors[colorCounts.third] === randomColors[1]
    ) {
      onSolvedPuzzles(4);
    }
  }

  if (
    colors[colorCounts.first] === randomColors[2] &&
    colors[colorCounts.second] === randomColors[0] &&
    colors[colorCounts.third] === randomColors[1]
  ) {
    return (
      <>
        <Header>Tür</Header>
        <h1>Freiheit</h1>

        <MyButton fontSize={"16px"} onNewGame={onNewGame}>
          Noch mal spielen
        </MyButton>
      </>
    );
  }

  return (
    <>
      <Header isBackArrow>Tür</Header>

      <ColorPuzzle
        colors={colors}
        onColorSwitch={handleColorSwitch}
        colorCounts={colorCounts}
        randomSymbols={randomSymbols}
      />
    </>
  );
}
