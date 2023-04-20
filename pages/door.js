import ColorPuzzle from "../components/ColorPuzzle";
import { useEffect, useState } from "react";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import Header from "../components/Header";
import MyButton from "../components/MyButton";

export default function Door({
  onNewGame,
  colors,
  randomColors,
  randomSymbols,
}) {
  const [colorCounts, setcolorCounts] = useLocalStorageState("colorCounts", {
    defaultValue: { first: 2, second: 2, third: 2 },
  });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

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
  }

  if (
    colors[colorCounts.first] === randomColors[2] &&
    colors[colorCounts.second] === randomColors[0] &&
    colors[colorCounts.third] === randomColors[1]
  ) {
    return (
      <>
        <h1>Freiheit</h1>
        <Link href={"/room"}>
          <MyButton fontSize={"16px"} onClick={() => onNewGame()}>
            Noch mal spielen
          </MyButton>
        </Link>
      </>
    );
  }

  return (
    <>
      <Header isBackArrow>Tür</Header>

      {isClient && (
        <ColorPuzzle
          colors={colors}
          onColorSwitch={handleColorSwitch}
          colorCounts={colorCounts}
          randomSymbols={randomSymbols}
        />
      )}
    </>
  );
}
