import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrivialGame from './components/TrivialGame';
import Header from './components/Header';
import './App.css';
import GameSelection from './components/GameSelection';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Router>
          <Switch>
            <Route path="/trivial-pursuit/category/:category/difficulty/:difficulty">
              <TrivialGame />
            </Route>
            <Route path="/trivial-pursuit/category/:category">
              <TrivialGame />
            </Route>
            <Route path="/trivial-pursuit">
              <GameSelection />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
