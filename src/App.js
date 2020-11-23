import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from "./components/Home";
import ObjectsQuiz from "./components/objectsQuiz";
import ArraysQuiz from "./components/arraysQuiz";

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
        </nav>
      </header>
      <Route render={(props) => {
        const { location } = props;
        return (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/arrays" component={ArraysQuiz} />
            <Route exact path="/objects" component={ObjectsQuiz} />
          </Switch>
        )}
      }
      />
        <footer>
          <div className="content-container">
           <span>Available on npmjs: <a href="https://www.npmjs.com/package/question-tree-core" target="_blank" rel="noreferrer">question-tree-core</a></span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
