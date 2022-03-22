import React from "react";
import moment from "moment";

const dateContext = React.createContext();

export const DateProvider = ({ children }) => {
  const [date, setDate] = React.useState(moment().toDate());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const addDate = () => {
    setDate(moment(moment(date).add(1, "days")).toDate());
  };

  const subDate = () => {
    setDate(moment(moment(date).subtract(1, "days")).toDate());
  };
  return (
    <dateContext.Provider value={{ date, addDate, subDate, setDate, onChange }}>
      {children}
    </dateContext.Provider>
  );
};

export default dateContext;
