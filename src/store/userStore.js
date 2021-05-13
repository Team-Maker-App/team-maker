import create from "zustand";
import { devtools } from "zustand/middleware";
import { getUserByUID } from "../helpers/firebase";

export const userStore = create(
  devtools(
    (set) => ({
      username: null,
      uid: null,
      singInUser: async ({ uid }) => {
        const { username, name } = await getUserByUID(uid);
        set(() => ({ username, name }));
      },
    }),
    "userStore"
  )
);

export default userStore;
