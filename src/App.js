import logo from './logo.svg';
import Menu from './Menu';
import TrivialGame from './TrivialGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Trivial Pursuit</h1>
        <Menu />
      </header>
      <main>
        <TrivialGame />
      </main>
    </div>
  );
}

export default App;
