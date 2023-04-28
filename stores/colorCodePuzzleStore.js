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
  colorCounts: { first: 2, second: 2, third: 2 },

  resetRandomColors: () =>
    set({
      randomColors: [
        colors[getRandomColor()],
        colors[getRandomColor()],
        colors[getRandomColor()],
      ],
    }),
  resetRandomSymbols: () =>
    set({
      randomSymbols: [
        symbols[[randomNumbers[0]]],
        symbols[[randomNumbers[1]]],
        symbols[[randomNumbers[2]]],
      ],
    }),
  increaseFirstColorDiv: () =>
    set((state) => ({
      colorCounts: { first: state.colorCounts.first++, ...state.colorCounts },
    })),
  increaseSecondColorDiv: () =>
    set((state) => ({
      colorCounts: { second: state.colorCounts.second++, ...state.colorCounts },
    })),
  increaseThirdColorDiv: () =>
    set((state) => ({
      colorCounts: { third: state.colorCounts.third++, ...state.colorCounts },
    })),
  defaultColorCode: () => set({ first: 2, second: 2, third: 2 }),
}));

export default useColorCodePuzzleStore;
