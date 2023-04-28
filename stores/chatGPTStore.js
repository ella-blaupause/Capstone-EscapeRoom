import { create } from "zustand";

const useChatGPTStore = create((set) => ({
  questionInput: "",

  cacheQuestionInput: (event) => set({ questionInput: event.target.value }),
}));

export default useChatGPTStore;
