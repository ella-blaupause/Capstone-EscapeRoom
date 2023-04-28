import { create } from "zustand";
import { avatars } from "../utils/utils";

const useProfileStore = create((set) => ({
  avatar: avatars[0],

  chooseAvatar: (selectedAvatar) => set({ avatar: selectedAvatar }),
}));

export default useProfileStore;
