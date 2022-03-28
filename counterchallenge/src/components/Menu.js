import { useState } from "react";
import "./Menu.css";

const Menu = (props) => {
  const [date, setdate] = useState("");

  const handleDateChange = (e) => {
    setdate(e.target.value);
  };

  const handleCountStart = () => {
    props.startCounting(date);
  };

  return (
    <>
      <h1>Contador</h1>
      <p>Informe uma data</p>
      <input type="date" placeholder="DD/MM/AAAA" onBlur={handleDateChange} />
      <div>
        <button onClick={handleCountStart}>Iniciar Contagem</button>
      </div>
    </>
  );
};

export default Menu;
