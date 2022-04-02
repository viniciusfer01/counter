import { useState } from "react";
import Menu from "./components/Menu.js";
import Counter from "./components/Counter.js";
import "./App.css";

function App() {
  const [isCounting, setIsCounting] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startCounting = (date) => {
    setIsCounting((prev) => {
      return !prev;
    });
  };

  const setDaysToCount = (prop) => {
    setDays(prop);
  };

  const setHoursToCount = (prop) => {
    setHours(prop);
  };

  const setMinutesToCount = (prop) => {
    setMinutes(prop);
  };

  const setSecondsToCount = (prop) => {
    setSeconds(prop);
  };

  return (
    <div className="App">
      {isCounting ? (
        <Counter
          startCounting={startCounting}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      ) : (
        <Menu
          startCounting={startCounting}
          setDays={setDaysToCount}
          setHours={setHoursToCount}
          setMinutes={setMinutesToCount}
          setSeconds={setSecondsToCount}
        />
      )}
    </div>
  );
}

export default App;
