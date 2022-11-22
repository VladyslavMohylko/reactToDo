import React from 'react';
import './App.css';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="container">
        <Header />
        <Main />
        <Tasks />
      </div>
    );
  }
}

export default App;
