import React from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import ContentUnderstanding from '../ContentUnderstanding/ContentUnderstanding';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4> */}
        {/* <Header /> */}
        <Router>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/ContentUnderstanding" component={ContentUnderstanding} />
            
        </Router>
      </header>
    </div>
  );
}

export default App;
