import { create } from "zustand";
import { initialPuzzlePieces } from "../utils/utils";

const usePuzzlePiecesStore = create((set) => ({
  puzzlePieces: initialPuzzlePieces,
  countPieces: 0,
  collectPuzzlePiece: (puzzlePieceId) =>
    set((state) => ({
      puzzlePieces: state.puzzlePieces.map((p) =>
        p.id === puzzlePieceId ? { ...p, isCollected: true } : p
      ),
    })),
  increaseCountPieces: () =>
    set((state) => ({ countPieces: state.countPieces + 1 })),
  newGamePuzzlePieces: () => set({ puzzlePieces: initialPuzzlePieces }),
  newGameCountPieces: () => set({ countPieces: 0 }),
}));

export default usePuzzlePiecesStore;
