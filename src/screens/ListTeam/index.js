import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { ReactComponent as Versus } from "../../versus.svg";
import { useHistory } from "react-router-dom";
import { matchStore } from "store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import app from '../../services/firebase';

// Components
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import CheckIcon from "../../components/Icons/CheckIcon";
import Feedback from "../../components/Feedback/Feedback";
import PlayersList from "./PlayersList";
import { shuffle } from "lodash";
import { AnimateSharedLayout, motion } from "framer-motion";
import { generateShareImage } from "./generateShareImage";
import ListHead from "./ListHead";

const ListTeam = () => {
  const db = getFirestore(app);
  const content = useRef();
  const history = useHistory();
  const {players, date, location, creator} = matchStore();
  const [names, setNames] = useState(players);

  const [shuffling, setShuffling] = useState(true);

  const half = Math.ceil(players?.length / 2);

  const firstHalf = names?.slice(0, half);
  const secondHalf = names?.slice(-half);

    useEffect(() => {
    if (players.length === 0) {
      history.push("/create");
    }
  }, [history, players.length]);

  useEffect(() => {
    if (shuffling) setTimeout(() => setNames(shuffle(names)), 500);
  }, [names, shuffling]);

  useEffect(() => {
    setTimeout(() => setShuffling(false), 1500);
  }, []);

  useEffect(() => {
    toast("Mezclando 🎲");
  }, []);

  const variants = {
    idle: { x: 0, rotate: [-0.5, 0.5, -0.4, 0.4, -0.2, 0.2, 0], transition: { type: "spring" } },
    shuffling: {
      x: [0.2, -0.2],
      rotate: [0.5, -0.5],
      transition: {
        flip: Infinity,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleShare = async () => {
    const create = await addDoc(collection(db, "matches"), {
      admin: creator,
      date: date,
      location: location,
      max_players: players.length,
      teams: {A: firstHalf, B: secondHalf}
    })

    if (create.id) {
      let matchURL = `/match/${create.id}`;
      generateShareImage(content.current, matchURL);
      history.push({ pathname:  matchURL})
    }
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="screenshot flex flex-col gap-5 p-4" ref={content}>
          <ListHead maxPlayers={players.length} location={location} date={date} />

          <AnimateSharedLayout>
            <motion.div
              initial="idle"
              animate={shuffling ? "shuffling" : "idle"}
              variants={variants}
              style={{ minHeight: "100px" }}
              className="relative flex justify-center mb-5 text-center gap-3"
            >
              <PlayersList players={firstHalf} color="#FFFFFF" />
              <div className="z-10 absolute bottom-3">
                <Versus width={45} height={45} />
              </div>
              <PlayersList players={secondHalf} color="#2C3590" />
            </motion.div>
          </AnimateSharedLayout>
          <Alert text="La posición de los jugadores no determina el orden en que atajan." />
        </div>
        <div className="flex justify-center items-center">
          <Button onClick={handleShare} disabled={shuffling}>
            <div className="flex gap-4 w-full justify-center items-center px-6">
              <span>Listo</span>
              <CheckIcon className="w-4 h-4" />
            </div>
          </Button>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

export default ListTeam;
