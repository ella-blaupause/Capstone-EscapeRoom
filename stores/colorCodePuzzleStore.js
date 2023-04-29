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
  colorCounts: { firstDiv: 2, secondDiv: 2, thirdDiv: 2 },

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
      colorCounts: {
        firstDiv: state.colorCounts.firstDiv++,
        ...state.colorCounts,
      },
    })),
  increaseSecondColorDiv: () =>
    set((state) => ({
      colorCounts: {
        secondDiv: state.colorCounts.secondDiv++,
        ...state.colorCounts,
      },
    })),
  increaseThirdColorDiv: () =>
    set((state) => ({
      colorCounts: {
        thirdDiv: state.colorCounts.thirdDiv++,
        ...state.colorCounts,
      },
    })),
  defaultColorCode: () => set({ firstDiv: 2, secondDiv: 2, thirdDiv: 2 }),
}));

export default useColorCodePuzzleStore;
