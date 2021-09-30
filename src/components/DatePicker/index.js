import ReactDatePicker from "react-datepicker";
import { setDefaultLocale, registerLocale } from "react-datepicker";
import { matchStore } from "../../store";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import es from "date-fns/locale/es";
registerLocale("es", es);
setDefaultLocale("es");

const DatePicker = () => {
  const { date, setDate } = matchStore();

  return (
    <ReactDatePicker
      showTimeSelect
      selected={date}
      onChange={(date) => setDate(date)}
      timeClassName={() => "text-primary"}
      locale="es"
      timeInputLabel="Time:"
      dateFormat="dd/MM/yyyy HH:mm"
      className="rounded-md h-full p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
    />
  );
};

export default DatePicker;
