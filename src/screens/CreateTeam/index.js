import { useState } from "react";
import { useHistory } from "react-router";
import { matchStore } from "../../store";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//Components
import Layout from "../../components/Layout";
import DatePicker from "../../components/DatePicker";
import Feedback from "../../components/Feedback/Feedback";
import { shuffle } from "lodash";
import Button from "../../components/Button";

const CreateTeam = () => {
  const { location, setLocation, players, setPlayers } = matchStore();
  const [persistLocation, setPersistLocation] = useLocalStorage("match-location", location);
  const [value, setValue] = useState("");
  const history = useHistory();

  const handlePaste = () => {
    navigator?.clipboard?.readText().then((clipText) => {
      handlePlayers(clipText);
    });
  };

  const CreateTeams = () => {
    const randomPlayers = shuffle(players);
    setPlayers(randomPlayers);
    setLocation(persistLocation);
    if (players) history.push({ pathname: "/list" });
  };

  const handlePlayers = (players) => {
    setPlayers(players);
    setValue(players);
  };

  return (
    <Layout>
      <div className="flex flex-col p-5 gap-5 max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col flex-auto w-full relative" style={{ maxHeight: "400px" }}>
          <textarea
            className="p-4 w-full flex-1 rounded-md resize-none"
            onChange={(e) => handlePlayers(e.target.value)}
            value={value}
            placeholder={`1. Pedro\n2. Flor\n3. Juan \n4. Sylvie\n5. Chloe ...`}
          />
          <div className="flex gap-x-2 absolute bottom-5 right-5">
            <Button variant="secondary">{players.length}</Button>
            <Button onClick={() => handlePaste()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </Button>
          </div>
        </div>
        <p className="text-white font-sans">Datos del partido</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            className="w-full rounded-md h-full p-2 block shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            placeholder="Lugar"
            onChange={(e) => setPersistLocation(e.target.value)}
            value={persistLocation}
          />
          <DatePicker />
        </div>

        <div className="flex justify-center w-full">
          <Button disabled={players.length > 1 ? false : true} type="submit" onClick={() => CreateTeams()}>
            Crear equipos
          </Button>
        </div>
      </div>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

export default CreateTeam;
