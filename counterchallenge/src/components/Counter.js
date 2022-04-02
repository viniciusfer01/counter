import Timer from "./Timer";
import "./Counter.css";

const Counter = (props) => {
  const handleDate = () => {
    console.log(props.date);
  };

  return (
    <>
      <nav>
        <h1>Contador</h1>
        <button onClick={handleDate}>Reiniciar</button>
      </nav>
      <div className="counterContent">
        <h2>Faltam</h2>
        <Timer />
      </div>
    </>
  );
};

export default Counter;
