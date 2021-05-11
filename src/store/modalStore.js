import create from "zustand";
import { devtools } from "zustand/middleware";

export const modalStore = create(
  devtools(
    (set) => ({
      visible: false,
      content: null,
      setContent: (content) => set(() => ({ content })),
      openModal: () => set(() => ({ visible: true })),
      closeModal: () => set(() => ({ visible: false, content: null })),
    }),
    "modalStore"
  )
);

export default modalStore;
