import "./Menu.css";

const Menu = (props) => {
  const handleDateChange = (e) => {
    const date = new Date(e.target.value).getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const diff = date - now; //How many milliseconds until the date
      if (diff > 0) {
        props.setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        props.setHours(
          Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        props.setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
        props.setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
      }
    }, 1000);
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
