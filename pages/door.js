import ColorPuzzle from "../components/ColorPuzzle";
import { useEffect, useState } from "react";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";

export default function Door({ onNewGame, colors, randomColor, randomSymbol }) {
  const [count, setCount] = useLocalStorageState("count", {
    defaultValue: { first: 2, second: 2, third: 2 },
  });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleColorSwitch(props) {
    if (props === "first") {
      if (count.first >= colors.length - 1) {
        count.first = -1;
        setCount({ first: count.first, ...count });
      }
      count.first++;
      setCount({ first: count.first, ...count });
    } else if (props === "second") {
      if (count.second >= colors.length - 1) {
        count.second = -1;
        setCount({ second: count.second, ...count });
      }
      count.second++;
      setCount({ second: count.second, ...count });
    } else if (props === "third") {
      if (count.third >= colors.length - 1) {
        count.third = -1;
        setCount({ third: count.third, ...count });
      }
      count.third++;
      setCount({ third: count.third, ...count });
    } else {
      setCount({ first: 0, second: 0, third: 0 });
    }
  }

  if (
    colors[count.first] === randomColor[2] &&
    colors[count.second] === randomColor[0] &&
    colors[count.third] === randomColor[1]
  ) {
    return (
      <>
        <h1>Freiheit</h1>
        <Link href={"/"}>
          <button type="button" onClick={() => onNewGame()}>
            Noch mal spielen
          </button>
        </Link>
      </>
    );
  }

  return (
    <>
      {isClient && (
        <>
          <Link href={"/"}>
            <button>⬅️</button>
          </Link>

          <ColorPuzzle
            colors={colors}
            onColorSwitch={handleColorSwitch}
            count={count}
            randomSymbol={randomSymbol}
          />
        </>
      )}
    </>
  );
}
