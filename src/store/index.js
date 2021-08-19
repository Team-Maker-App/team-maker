import create from "zustand";
import { devtools } from "zustand/middleware";
import { filterPlayers } from "../helpers";

export const matchStore = create(
  devtools(
    (set) => ({
      players: [
        "gonzalo",
        "ale",
        "oveja",
        "sera",
        "herni",
        "damian",
        "fer sin resaca",
        "lele",
        "burro",
        "mono",
        "place",
        "pablo",
        "agus ham",
        "german",
      ],
      location: "Anker 7",
      date: new Date(),
      setLocation: (location) => set(() => ({ location })),
      setPlayers: (player) => set(() => ({ players: filterPlayers(player) })),
      setDate: (date) => set(() => ({ date })),
    }),
    "matchStore"
  )
);
