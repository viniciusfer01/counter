import { useState } from "react";
import Menu from "./components/Menu.js";
import Counter from "./components/Counter.js";
import "./App.css";

function App() {
  const [isCounting, setIsCounting] = useState(false);

  const startCounting = (date) => {
    setIsCounting(true);
  };

  return (
    <div className="App">
      {isCounting ? <Counter /> : <Menu startCounting={startCounting} />}
    </div>
  );
}

export default App;
