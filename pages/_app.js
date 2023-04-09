import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";
import {
  colors,
  getRandomColor,
  getRandomNumbers,
  symbols,
} from "../utils/utils";

const randomNumbers = getRandomNumbers(symbols.length);

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
