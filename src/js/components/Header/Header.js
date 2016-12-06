'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import './Header.css';
import logo from '../../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="text-center">
            <Link to="/" className="logo"></Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
