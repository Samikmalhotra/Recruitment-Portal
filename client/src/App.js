import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import QuizDetail from './views/QuizDetail';
import QuizPortal from './views/QuizPortal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/quizDetails" component={QuizDetail} />
          <Route path="/quizPortal" component={QuizPortal} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
