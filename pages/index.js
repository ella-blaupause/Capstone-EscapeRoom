import { useEffect } from "react";
import Clue from "../components/Clue";
import ColorPuzzle from "../components/ColorPuzzle";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const colors = [
  "yellow",
  "green",
  "lightblue",
  "brown",
  "red",
  "gray",
  "orange",
  "blueviolet",
];

/* Math.floor(Math.random() * colors.length) */

export default function HomePage() {
  const [count, setCount] = useState({ first: 0, second: 0, third: 0 });
  const [randomColor, setRandomColor] = useLocalStorageState("randomColor", {
    defaultValue: "",
  });
  useEffect(
    () =>
      setRandomColor([
        colors[Math.floor(Math.random() * colors.length)],
        colors[Math.floor(Math.random() * colors.length)],
        colors[Math.floor(Math.random() * colors.length)],
      ]),
    []
  );
  function getRandomColor() {
    setRandomColor([
      colors[Math.floor(Math.random() * colors.length)],
      colors[Math.floor(Math.random() * colors.length)],
      colors[Math.floor(Math.random() * colors.length)],
    ]);
  }

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
        <button type="button" onClick={() => getRandomColor()}>
          Noch mal spielen
        </button>
      </>
    );
  }

  return (
    <div>
      <Clue randomColor={randomColor} />
      <ColorPuzzle
        colors={colors}
        onColorSwitch={handleColorSwitch}
        count={count}
      />
    </div>
  );
}
