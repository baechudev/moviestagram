import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Hots from './components/Hots';
import News from './components/News';
import Recs from './components/Recs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hots">
            <Hots />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/recs">
            <Recs />
          </Route>
        </Switch>
      </div>
      {/* <footer className="App-footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
