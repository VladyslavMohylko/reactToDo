import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="container">
        <h1 id='header'>TO DO LIST </h1>
      </div>
    );
  }
}

export default Header;
