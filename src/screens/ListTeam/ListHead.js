import PropTypes from "prop-types";
import { format } from "date-fns";
import { es } from "date-fns/esm/locale";

const ListHead = ({ players, date, location }) => {
  return (
    <div className="col-span-1 flex shadow-sm rounded-md w-full mx-auto">
      <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
        <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <p className="text-gray-900 font-medium hover:text-gray-600">{location}</p>
          <p className="text-gray-500 capitalize">{format(date, "EEEE dd/MM - p", { locale: es })} hs </p>
          <p className="text-gray-500">{players?.length} Jugadores</p>
        </div>
      </div>
    </div>
  );
};

ListHead.propTypes = {
  players: PropTypes.array,
  location: PropTypes.string,
  date: PropTypes.any,
};

export default ListHead;
