import React, { Component } from 'react';
import './Header.css';
import SideDish from './SideDish';
import Main from './Main';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <SideDish></SideDish>
        <Main></Main>
      </div>
    );
  }
}

export default Header;