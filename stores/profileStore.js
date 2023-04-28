import { create } from "zustand";
import { avatars } from "../utils/utils";

const useProfileStore = create((set) => ({
  avatar: avatars[0],
  userName: null,

  chooseAvatar: (selectedAvatar) => set({ avatar: selectedAvatar }),
  chooseUserName: (data) => set({ userName: data }),
  resetUserName: () => set({ userName: null }),
}));

export default useProfileStore;
