import { create } from "zustand";

const useCrosswordStore = create((set) => ({
  currentClueId: null,
  countRightAnswer: 0,
  entryCharacterLength: 0,

  pickCurrentClueId: (crosswordCluesId) =>
    set({ currentClueId: crosswordCluesId }),
  increaseCountRightAnswer: () =>
    set((state) => ({ countRightAnswer: state.countRightAnswer + 1 })),
  resetCountRightAnswer: () => set({ countRightAnswer: 0 }),
  countEntryCharacterLength: (event) =>
    set({ entryCharacterLength: event.target.value.length }),
  resetEntryCharacterLength: () => set({ entryCharacterLength: 0 }),
}));

export default useCrosswordStore;
