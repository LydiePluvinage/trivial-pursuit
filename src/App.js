import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrivialGame from './components/TrivialGame';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Router>
          <Switch>
            <Route path="/category/:category">
              <TrivialGame />
            </Route>
            <Route path="/">
              <Categories />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
