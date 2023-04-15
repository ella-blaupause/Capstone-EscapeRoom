import create from "zustand";
import {
  colors,
  getRandomColor,
  initialPuzzlePieces,
  symbols,
} from "../utils/utils";

const randomNumbers = getRandomNumbers(symbols.length);
export default useStore = create((set) => ({
  isOn: true,
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
  puzzlePieces: initialPuzzlePieces,
  countPieces: 0,
  switchLigth: () => set((state) => ({ isOn: !state.isOn })),
  handleCollect: (puzzlePieceId) =>
    set((state) => ({
      countPieces: state.countPieces + 1,
    })),
}));
