import { create } from "zustand";

const useCrosswordStore = create((set) => ({
  currentClueId: null,
  pickCurrentClueId: (crosswordCluesId) =>
    set({ currentClueId: crosswordCluesId }),
}));

export default useCrosswordStore;
