import "./App.css";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <Logo />
        </div>
        <h1>Pavel Moulis</h1>
        <h2>↳ Fullstack Developer </h2>
      </header>
      <footer>
        <ul>
          <li>
            <a className="mail" href="mailto:hello@pavel.dk">
              M
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
