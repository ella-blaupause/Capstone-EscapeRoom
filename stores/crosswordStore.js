import { create } from "zustand";
import { initialCrosswordClues } from "../utils/utils";

const useCrosswordStore = create((set) => ({
  currentClueId: null,
  countRightAnswer: 0,
  entryCharacterLength: 0,
  crosswordClues: initialCrosswordClues,

  pickCurrentClueId: (crosswordCluesId) =>
    set({ currentClueId: crosswordCluesId }),
  increaseCountRightAnswer: () =>
    set((state) => ({ countRightAnswer: state.countRightAnswer + 1 })),
  resetCountRightAnswer: () => set({ countRightAnswer: 0 }),
  countEntryCharacterLength: (event) =>
    set({ entryCharacterLength: event.target.value.length }),
  resetEntryCharacterLength: () => set({ entryCharacterLength: 0 }),
  correctlyAnsweredCrosswordClue: () =>
    set((state) => ({
      crosswordClues: state.crosswordClues.map((clue) =>
        clue.id === state.currentClueId
          ? { ...clue, isCorrectlyAnswered: true }
          : clue
      ),
    })),
}));

export default useCrosswordStore;
