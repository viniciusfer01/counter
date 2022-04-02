import "./Menu.css";

const Menu = (props) => {
  const handleDateChange = (e) => {
    props.setDate(e.target.value);
  };

  const handleCountStart = () => {
    props.startCounting();
  };

  return (
    <div className="counterMenu">
      <h1>Contador</h1>
      <p>Informe uma data</p>
      <input type="date" placeholder="DD/MM/AAAA" onChange={handleDateChange} />
      <div>
        <button onClick={handleCountStart}>Iniciar Contagem</button>
      </div>
    </div>
  );
};

export default Menu;
