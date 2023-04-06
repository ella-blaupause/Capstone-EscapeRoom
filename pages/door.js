import { useEffect } from "react";
import Clue from "../components/Clue";
import ColorPuzzle from "../components/ColorPuzzle";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import Link from "next/link";

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

const symbols = ["△", "☆", "◇", "❀", "☀︎", "✧"];

function generateRandomNumbers(arrayLength) {
  const numbers = [];

  // Generiert drei zufällige Zahlen, die nur einmal vorkommen
  while (numbers.length < 3) {
    const random = Math.floor(Math.random() * arrayLength);
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers;
}
const randomNumbers = generateRandomNumbers(symbols.length);

export default function Door() {
  const [count, setCount] = useState({ first: 2, second: 2, third: 2 });
  const [randomColor, setRandomColor] = useLocalStorageState("randomColor", {
    defaultValue: [
      colors[[Math.floor(Math.random() * symbols.length)]],
      colors[[Math.floor(Math.random() * symbols.length)]],
      colors[[Math.floor(Math.random() * symbols.length)]],
    ],
  });

  const [randomSymbol, setRandomSymbol] = useLocalStorageState("randomSymbol", {
    defaultValue: [
      symbols[randomNumbers[0]],
      symbols[randomNumbers[1]],
      symbols[randomNumbers[2]],
    ],
  });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  function getRandomCode() {
    const randomNumbers = generateRandomNumbers(symbols.length);

    setRandomSymbol([
      symbols[[randomNumbers[0]]],
      symbols[[randomNumbers[1]]],
      symbols[[randomNumbers[2]]],
    ]);
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
    colors[count.first] === randomColor[2] && // 0->△
    colors[count.second] === randomColor[0] && // 1->☆
    colors[count.third] === randomColor[1] //2->◇
  ) {
    return (
      <>
        <h1>Freiheit</h1>
        <Link href={"/"}>
          <button type="button" onClick={() => getRandomCode()}>
            Noch mal spielen
          </button>
        </Link>
      </>
    );
  }

  if (randomColor) {
  }

  return (
    <>
      {isClient && (
        <>
          <Link href={"/"}>
            <button>⬅️</button>
          </Link>
          <div>
            <Clue randomColor={randomColor} randomSymbol={randomSymbol} />
            <ColorPuzzle
              colors={colors}
              onColorSwitch={handleColorSwitch}
              count={count}
              randomSymbol={randomSymbol}
            />
          </div>
        </>
      )}
    </>
  );
}
