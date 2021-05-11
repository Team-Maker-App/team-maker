import create from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create(
  devtools(
    (set) => ({
      username: "admin",
    }),
    "userStore"
  )
);

export default userStore;
