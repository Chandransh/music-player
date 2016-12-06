import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import './Login.css';
import Header from '../../components/Header/Header';
import heroImageSrc from '../../../images/hero.jpg';

class Login extends Component {
  render() {
    return (
      <div className="login-container col-sm-12 center-block">
        <div className="col col-sm-6 text-center"
             style={{background: '#ff6040'}}>
          <div>
            <Header/>
            <h1>Poppy</h1>
            <h2>Your Favourite Music Player</h2>
            <h6>Listen to top songs from popular genres and create awesome playlists effortlessly.</h6>
            <button className="btn btn-primary btn-lg">
              Let's Go
            </button>
          </div>
        </div>
        <div className="col col-sm-6 text-center"
             style={{background: '#ffffff'}}>
          <div className="hero-image pull-right">
            <img src={heroImageSrc}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapActionToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);