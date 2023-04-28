import { create } from "zustand";

const useToastStore = create((set) => ({
  countSubmits: 0,
  increaseCountSubmits: () =>
    set((state) => ({ countSubmits: state.countSubmits + 1 })),
}));

export default useToastStore;
