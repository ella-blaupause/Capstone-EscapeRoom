import { create } from "zustand";

const useChatGPTStore = create((set) => ({
  questionInput: "",
  isAnswered: false,

  cacheQuestionInput: (event) => set({ questionInput: event.target.value }),
  setIsAnswered: (bool) => set({ isAnswered: bool }),
}));

export default useChatGPTStore;
