import "./Timer.css";

const Timer = (props) => {
  return (
    <div className="timer">
      <div className="number">
        <p className="timeNumber">{props.days}</p>
        <p className="timeUnit">Dias</p>
      </div>
      <div className="number">
        <p className="timeNumber">{props.hours}</p>
        <p className="timeUnit">Horas</p>
      </div>
      <div className="number">
        <p className="timeNumber">{props.minutes}</p>
        <p className="timeUnit">Minutos</p>
      </div>
      <div className="number">
        <p className="timeNumber">{props.seconds}</p>
        <p className="timeUnit">Segundos</p>
      </div>
    </div>
  );
};

export default Timer;
