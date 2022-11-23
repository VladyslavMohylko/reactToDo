import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
      this.tasksHolder = {};
  }

  createTaskHandler = (event) => {
    console.log(event.target.value);

    const name = Date.now();
    const a = {
      description: event.target.value,
      complete: false,
    }

    this.tasksHolder[name] = {
      description: event.target.value,
      complete: false,
    };
    console.log(this.tasksHolder)
  }

  

  render() {
    return (
      <div className='container'>
          <div id="progress">
            <p>Progress:</p>
            <p id="complete-tasks"></p>
        </div>
        <div id="containerAddTask">
            <input onKeyUp={this.createTaskHandler} type="text" placeholder="press Enter to add new task" id="addTask" />
            <button id="clearAll">Clear All</button>
            <div id="searchMessage">HAHA YOU FOUND ME</div>
        </div>
      </div>
    );
  }
}

export default Main;
