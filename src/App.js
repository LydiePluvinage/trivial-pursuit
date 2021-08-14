import TrivialGame from './components/TrivialGame';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TrivialGame />
      </main>
    </div>
  );
}

export default App;
