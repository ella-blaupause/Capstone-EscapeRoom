import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

const colors = [
  "yellow",
  "green",
  "lightblue",
  "hotpink",
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

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useLocalStorageState("isOn", { defaultValue: true });

  const [randomColor, setRandomColor] = useLocalStorageState("randomColor", {
    defaultValue: [
      colors[getRandomColor()],
      colors[getRandomColor()],
      colors[getRandomColor()],
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
      colors[getRandomColor()],
      colors[getRandomColor()],
      colors[getRandomColor()],
    ]);

    //Licht beim neuen Spiel wieder an machen
    setIsOn(true);
  }

  function handleToggleOnOff() {
    setIsOn(!isOn);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        getRandomCode={getRandomCode}
        colors={colors}
        randomColor={randomColor}
        randomSymbol={randomSymbol}
        onToggleOnOff={handleToggleOnOff}
        isOn={isOn}
        {...pageProps}
      />
    </>
  );
}
