import React from 'react';
import Task from '../Task/Task';
import './Tasks.css';

class Tasks extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="container">
        <ul>
          <Task />
        </ul>
      </div>
    );
  }
}

export default Tasks;
