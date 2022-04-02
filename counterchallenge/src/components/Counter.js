import Timer from "./Timer";
import "./Counter.css";

const Counter = (props) => {
  const backToMenuHandler = () => {
    props.startCounting();
  };

  return (
    <>
      <nav>
        <h1>Contador</h1>
        <button onClick={backToMenuHandler}>Reiniciar</button>
      </nav>
      <div className="counterContent">
        <h2>Faltam</h2>
        <Timer
          days={props.days}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
        />
      </div>
    </>
  );
};

export default Counter;
