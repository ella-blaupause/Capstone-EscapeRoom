import { create } from "zustand";

const useLightStore = create((set) => ({
  isOn: true,
  switchLight: () => set((state) => ({ isOn: !state.isOn })),
  turnLight: () => set({ isOn: true }),
}));

export default useLightStore;
