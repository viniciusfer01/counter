import "./Menu.css";

const Menu = () => {
  return (
    <>
      <h1>Contador</h1>
      <p>Informe uma data</p>
      <input type="date" placeholder="DD/MM/AAAA" />
      <div>
        <button>Iniciar Contagem</button>
      </div>
    </>
  );
};

export default Menu;
