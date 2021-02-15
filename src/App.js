import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from "./components/Home";
import ObjectsQuiz from "./components/objectsQuiz";
import ArraysQuiz from "./components/arraysQuiz";
import MapsQuiz from "./components/mapsQuiz";
import SetsQuiz from "./components/setsQuiz";
import SymbolsQuiz from "./components/symbolsQuiz";
import FundamentalsQuiz from "./components/fundamentalsQuiz";
import OthersQuiz from "./components/othersQuiz";
import StringsQuiz from "./components/StringsQuiz";

/*--Styles--*/
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header" style={{height:'12rem', minHeight:"auto"}}>
        <h1 style={{marginBottom:'.5rem'}}>EcmaScript Quizzes</h1>
        <p style={{marginTop:'.5rem'}}>Reinforce your basic JS knowledge</p>
        <nav>
          <NavLink exact to="/" activeClassName="active">Overview</NavLink>
          <NavLink exact to="/arrays" activeClassName="active">Arrays</NavLink>
          <NavLink exact to="/objects" activeClassName="active">Objects</NavLink>
          <NavLink exact to="/strings" activeClassName="active">Strings</NavLink>
          <NavLink exact to="/maps" activeClassName="active">Maps</NavLink>
          <NavLink exact to="/sets" activeClassName="active">Sets</NavLink>
          <NavLink exact to="/other" activeClassName="active">Other</NavLink>
        </nav>
      </header>
      <Route render={(props) => {
        const { location } = props;
        return (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/arrays" component={ArraysQuiz} />
            <Route exact path="/objects" component={ObjectsQuiz} />
            <Route exact path="/strings" component={StringsQuiz} />
            <Route exact path="/maps" component={MapsQuiz} />
            <Route exact path="/sets" component={SetsQuiz} />
            <Route exact path="/symbols" component={SymbolsQuiz} />
            <Route exact path="/fundamentals" component={FundamentalsQuiz} />
            <Route exact path="/other" component={OthersQuiz} />
          </Switch>
        )}
      }
      />
        <footer>
          <div className="content-container">
           <span>Powered by: <a href="https://www.npmjs.com/package/question-tree-core" target="_blank" rel="noreferrer">question-tree-core</a></span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
