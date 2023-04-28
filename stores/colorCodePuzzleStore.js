import { create } from "zustand";
import { colors, getRandomColor, randomNumbers, symbols } from "../utils/utils";

const useColorCodePuzzleStore = create((set) => ({
  randomColors: [
    colors[getRandomColor()],
    colors[getRandomColor()],
    colors[getRandomColor()],
  ],
  randomSymbols: [
    symbols[randomNumbers[0]],
    symbols[randomNumbers[1]],
    symbols[randomNumbers[2]],
  ],
  newGameRandomColors: () =>
    set({
      randomColors: [
        colors[getRandomColor()],
        colors[getRandomColor()],
        colors[getRandomColor()],
      ],
    }),
  newGameRandomSymbols: () =>
    set({
      randomSymbols: [
        symbols[[randomNumbers[0]]],
        symbols[[randomNumbers[1]]],
        symbols[[randomNumbers[2]]],
      ],
    }),
}));

export default useColorCodePuzzleStore;
