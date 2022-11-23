import React from 'react';
import './Task.css';

class Task extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <li className="list-element">
        <div className='dateBlock'>
          <div>COMPLETED DATE:</div>
          <div>NOT READY YET</div>
        </div>
        <input type='checkbox' className='check' />
        <input type='text' className='todo-text' />
        <button className='delete-btn'>X</button>
      </li>
    );
  }
}

export default Task;
