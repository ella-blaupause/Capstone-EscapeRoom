import { create } from "zustand";

const useToastStore = create((set) => ({
  countSubmits: 0,
  toasts: [],
  increaseCountSubmits: () =>
    set((state) => ({ countSubmits: state.countSubmits + 1 })),
  createToasts: (toastProperties) => set({ toasts: [toastProperties] }),
  deleteToasts: () => set({ toasts: [] }),
}));

export default useToastStore;
