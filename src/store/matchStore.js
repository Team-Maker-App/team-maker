import create from "zustand";
import { devtools } from "zustand/middleware";
import { filterPlayers } from "../helpers";

const matchStore = create(
  devtools(
    (set) => ({
      players: [],
      location: "",
      date: new Date(),
      setLocation: (location) => set(() => ({ location })),
      setPlayers: (player) => set(() => ({ players: filterPlayers(player) })),
      setDate: (date) => set(() => ({ date })),
    }),
    "matchStore"
  )
);

export default matchStore;
