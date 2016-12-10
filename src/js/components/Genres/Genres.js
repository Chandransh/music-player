/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import fetch from 'isomorphic-fetch';

import './Genres.css';
import * as GetTracksByGenre from '../../reducers/getTracksByGenre';

class Genres extends Component {
  loadTracks = (genre) => {
    const clientId = 'fDoItMDbsbZz8dY16ZzARCZmzgHBPotA';

    fetch(`https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3A${genre}&client_id=${clientId}&limit=20&offset=0&linked_partitioning=1&app_version=1481210409`)
    .then((responseObj) => {
      let headerContentType = responseObj.headers.get('content-type');
      if (headerContentType !== null && headerContentType.indexOf('application/json') >= 0) {
        return responseObj.json();
      }
    })
    .then((response) => {
      return this.props.GetTracksByGenre.loadSuccess(response);
    })
    .catch((error) => {
      return this.props.GetTracksByGenre.loadFailure(error);
    });
  };

  render() {
    return (
      <div className="genres-container col-sm-12 center-block">
        <div className="col-sm-12 center-block"
             style={{background: '#ffffff'}}>
          <h1 className="text-center">Select a genre to continue</h1>
          <ul className="row">
            <li onClick={this.loadTracks.bind(null,'pop')}>
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
  getTracksByGenre: state.getTracksByGenre
});

const mapActionToProps = (dispatch) => ({
  GetTracksByGenre: bindActionCreators(GetTracksByGenre, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Genres);