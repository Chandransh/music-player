'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="text-center">
            <Link to="/" className="logo"></Link>
            <h1>Poppy</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
