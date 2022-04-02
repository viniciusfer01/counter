import { useState } from "react";
import Menu from "./components/Menu.js";
import Counter from "./components/Counter.js";
import "./App.css";

function App() {
  const [isCounting, setIsCounting] = useState(false);
  const [date, setDate] = useState("");

  const startCounting = (date) => {
    setIsCounting(true);
  };

  const setDateToCount = (prop) => {
    setDate(prop);
  };

  return (
    <div className="App">
      {isCounting ? (
        <Counter date={date} />
      ) : (
        <Menu startCounting={startCounting} setDate={setDateToCount} />
      )}
    </div>
  );
}

export default App;
