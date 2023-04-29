import { create } from "zustand";
import {
  avatars,
  colors,
  getRandomColor,
  initialCrosswordClues,
  initialPuzzlePieces,
  initialSolvedPuzzles,
  randomNumbers,
  symbols,
} from "../utils/utils";

const useGlobalStore = create((set) => ({
  isOn: true,
  currentClueId: null,
  countRightAnswer: 0,
  entryCharacterLength: 0,
  crosswordClues: initialCrosswordClues,
  countClickGrid: 0,
  isActive: false,
  randomColors: [
    colors[getRandomColor()],
    colors[getRandomColor()],
    colors[getRandomColor()],
  ],
  randomSymbols: [
    symbols[randomNumbers[0]],
    symbols[randomNumbers[1]],
    symbols[randomNumbers[2]],
  ],
  colorCounts: { firstDiv: 2, secondDiv: 2, thirdDiv: 2 },
  questionInput: "",
  isAnswered: false,
  avatar: avatars[0],
  userName: null,
  puzzlePieces: initialPuzzlePieces,
  countPieces: 0,
  solvedPuzzles: initialSolvedPuzzles,
  countSubmits: 0,
  toasts: [],

  switchLight: () => set((state) => ({ isOn: !state.isOn })),
  turnLight: () => set({ isOn: true }),
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
  resetCrosswordClues: () => set({ crosswordClues: initialCrosswordClues }),
  increaseCountClickGrid: () =>
    set((state) => ({ countClickGrid: state.countClickGrid + 1 })),
  toggleIsActive: () => set((state) => ({ isActive: !state.isActive })),
  resetRandomColors: () =>
    set({
      randomColors: [
        colors[getRandomColor()],
        colors[getRandomColor()],
        colors[getRandomColor()],
      ],
    }),
  resetRandomSymbols: () =>
    set({
      randomSymbols: [
        symbols[[randomNumbers[0]]],
        symbols[[randomNumbers[1]]],
        symbols[[randomNumbers[2]]],
      ],
    }),
  increaseFirstColorDiv: () =>
    set((state) => ({
      colorCounts: {
        firstDiv: state.colorCounts.firstDiv++,
        ...state.colorCounts,
      },
    })),
  increaseSecondColorDiv: () =>
    set((state) => ({
      colorCounts: {
        secondDiv: state.colorCounts.secondDiv++,
        ...state.colorCounts,
      },
    })),
  increaseThirdColorDiv: () =>
    set((state) => ({
      colorCounts: {
        thirdDiv: state.colorCounts.thirdDiv++,
        ...state.colorCounts,
      },
    })),
  defaultColorCode: () => set({ firstDiv: 2, secondDiv: 2, thirdDiv: 2 }),
  cacheQuestionInput: (event) => set({ questionInput: event.target.value }),
  setIsAnswered: (bool) => set({ isAnswered: bool }),
  chooseAvatar: (selectedAvatar) => set({ avatar: selectedAvatar }),
  chooseUserName: (data) => set({ userName: data }),
  resetUserName: () => set({ userName: null }),
  collectPuzzlePiece: (puzzlePieceId) =>
    set((state) => ({
      puzzlePieces: state.puzzlePieces.map((p) =>
        p.id === puzzlePieceId ? { ...p, isCollected: true } : p
      ),
    })),
  increaseCountPieces: () =>
    set((state) => ({ countPieces: state.countPieces + 1 })),
  resetPuzzlePieces: () => set({ puzzlePieces: initialPuzzlePieces }),
  resetCountPieces: () => set({ countPieces: 0 }),
  increaseSolvedPuzzles: (currentSolvedPuzzleId) =>
    set((state) => ({
      solvedPuzzles: state.solvedPuzzles.map((solvedPuzzle) =>
        solvedPuzzle.id === currentSolvedPuzzleId
          ? { ...solvedPuzzle, isSolved: true }
          : solvedPuzzle
      ),
    })),
  resetSolvedPuzzle: () => set({ solvedPuzzles: initialSolvedPuzzles }),
  increaseCountSubmits: () =>
    set((state) => ({ countSubmits: state.countSubmits + 1 })),
  createToasts: (toastProperties) => set({ toasts: [toastProperties] }),
  deleteToasts: () => set({ toasts: [] }),
}));

export default useGlobalStore;
