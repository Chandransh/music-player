/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import './Genres.css';

class Genres extends Component {
  render() {
    return (
      <div className="genres-container col-sm-12 center-block">
        <div className="col-sm-12 center-block"
             style={{background: '#ffffff'}}>
          <h1 className="text-center">Select a genre to continue</h1>
          <ul className="row">
            <li>
              <Link to={{pathname: "/music-player/pop/play", state: "pop"}}
                    className="genre-btn col-sm-2">
                Pop
              </Link>
            </li>
          </ul>
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
)(Genres);