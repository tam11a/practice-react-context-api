import React from "react";
import dateContext from "./DateProvider";

const Header = () => {
  const { date } = React.useContext(dateContext);
  return <div>{date.toDateString()}</div>;
};

export default Header;
