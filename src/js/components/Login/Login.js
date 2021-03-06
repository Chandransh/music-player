import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import './Login.css';
import Header from '../../components/Header/Header';
import heroImageSrc from '../../../images/hero.jpg';

class Login extends Component {
  render() {
    return (
      <div className="login-container col-sm-12 center-block">
        <div className="col col-sm-12 col-md-6 text-center"
             style={{background: '#ff6040'}}>
          <div>
            <Header/>
            <h2>Your Favourite Music Player</h2>
            <h6>Listen to top songs from popular genres and create awesome playlists effortlessly.</h6>
            <Link to="/music-player/genres" className="btn btn-primary btn-lg">
              Let's Go
            </Link>
          </div>
        </div>
        <div className="col col-sm-12 col-md-6 text-center hidden-sm-down"
             style={{background: '#ffffff'}}>
          <div className="hero-image pull-right">
            <div style={{backgroundImage: 'url(' + heroImageSrc + ')'}}></div>
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