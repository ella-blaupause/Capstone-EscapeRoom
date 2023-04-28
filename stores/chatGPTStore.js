import { create } from "zustand";

const useChatGPTStore = create((set) => ({
  questionInput: "",
  isAnswered: false,

  cacheQuestionInput: (event) => set({ questionInput: event.target.value }),
  setIsAnsweredToTrue: () => set({ isAnswered: true }),
  resetIsAnswered: () => set({ isAnswered: false }),
}));

export default useChatGPTStore;
