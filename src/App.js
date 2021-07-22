import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import PolularMovie from './components/PolularMovie';
import TopRatedMovie from './components/TopRatedMovie';
import UpcomingMovie from './components/UpcomingMovie';
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
            <PolularMovie />
          </Route>
          <Route exact path="/popular">
            <PolularMovie />
          </Route>
          <Route exact path="/top-rated">
            <TopRatedMovie />
          </Route>
          <Route exact path="/upcoming">
            <UpcomingMovie />
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
