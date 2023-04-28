import { create } from "zustand";
import { colors, getRandomColor, symbols } from "../utils/utils";

const useColorCodePuzzleStore = create((state) => ({
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
}));

export default useColorCodePuzzleStore;
