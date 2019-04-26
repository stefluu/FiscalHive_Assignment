import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Splash from './Splash';
import Results from './Results/Results';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Splash}></Route>
            <Route exact path="/results" component={Results}></Route>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
