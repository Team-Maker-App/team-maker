import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ShirtIcon from "../../components/Icons/ShirtIcon";
import { trucanteString } from "../../helpers";

const PlayersList = ({ players = [], color }) => {
  console.log("🚀 ~ PlayersList ~ players", players);
  return (
    <div className="relative w-1/2 bg-white rounded-md p-2">
      <ShirtIcon color={color} />
      <ul className="divide-y divide-gray-200">
        {players?.map((player) => (
          <motion.li
            layout
            key={player}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="py-1 flex font-display text-lg p-1 my-2 capitalize justify-center"
          >
            {trucanteString(player, 15)}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
  color: PropTypes.any.isRequired,
};

export default PlayersList;
