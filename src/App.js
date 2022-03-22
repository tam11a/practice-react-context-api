import React from "react";
import "./App.css";
import DatePicker from "sassy-datepicker";
import dateContext from "./DateProvider";
import Header from "./Header";

function App() {
  const { date, addDate, subDate, setDate, onChange } =
    React.useContext(dateContext);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div style={{ margin: "20px" }}>
          <button onClick={() => addDate()}>+</button>
          <button style={{ marginRight: "10px", marginLeft: "10px" }}>
            {date.toDateString()}
          </button>
          <button onClick={() => subDate()}>-</button>
        </div>
        <DatePicker onChange={onChange} selected={date} />
      </header>
    </div>
  );
}

export default App;
