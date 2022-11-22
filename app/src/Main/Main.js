import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className='container'>
          <div id="progress">
            <p>Progress:</p>
            <p id="complete-tasks"></p>
        </div>
        <div id="containerAddTask">
            <input type="text" placeholder="press Enter to add new task" id="addTask" />
            <button id="clearAll">Clear All</button>
            <div id="searchMessage">HAHA YOU FOUND ME</div>
        </div>
      </div>
    );
  }
}

export default Main;
