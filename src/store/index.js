import create from "zustand";
import { devtools } from "zustand/middleware";
import { filterPlayers } from "../helpers";

export const matchStore = create(
  devtools(
    (set) => ({
      players: [],
      location: "",
      date: new Date(),
      creator: "",
      max_players: 0,
      setLocation: (location) => set(() => ({ location })),
      setPlayers: (player) => set(() => ({ players: filterPlayers(player) })),
      setDate: (date) => set(() => ({ date })),
      setCreator: (creator) => set(() => ({ creator })),
      setMaxPlayers: (max_players) => set(() => ({max_players}))
    }),
    "matchStore"
  )
);
