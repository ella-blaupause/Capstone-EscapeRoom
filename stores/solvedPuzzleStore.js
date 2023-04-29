import { create as createStore } from "zustand";
import { initialSolvedPuzzles } from "../utils/utils";

const useSolvedPuzlleStore = createStore((set) => ({
  solvedPuzzles: initialSolvedPuzzles,
  increaseSolvedPuzzles: (currentSolvedPuzzleId) =>
    set((state) => ({
      solvedPuzzles: state.solvedPuzzles.map((solvedPuzzle) =>
        solvedPuzzle.id === currentSolvedPuzzleId
          ? { ...solvedPuzzle, isSolved: true }
          : solvedPuzzle
      ),
    })),
  resetSolvedPuzzle: () => set({ solvedPuzzles: initialSolvedPuzzles }),
}));

export default useSolvedPuzlleStore;
