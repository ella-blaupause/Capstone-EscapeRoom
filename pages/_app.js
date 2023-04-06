import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

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

function getRandomNumbers(arrayLength) {
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
const randomNumbers = getRandomNumbers(symbols.length);

export default function App({ Component, pageProps }) {
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

  function getRandomCode() {
    const randomNumbers = getRandomNumbers(symbols.length);

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

  return (
    <>
      <GlobalStyle />
      <Component
        getRandomCode={getRandomCode}
        colors={colors}
        randomColor={randomColor}
        randomSymbol={randomSymbol}
        {...pageProps}
      />
    </>
  );
}
