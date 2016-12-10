/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import './Player.css';
import Loader from '../../components/Loader/Loader';
import '../../utils/soundcloud-api';

class Player extends Component {
  componentWillMount() {
    const {location, params} = this.props;
    location.state == null && params.genreName !== location.state && browserHistory.push('/music-player/genres');
  }

  handleTrackClick = (track) => {
    console.log('this track clicked:' + track)
  };

  render() {
    const {getTracksByGenre, params} = this.props;
    const _self = this;

    let urlParamsForPlayer = '&buying=false&liking=false&download=false&buying=false&sharing=false&show_comments=false&show_user=false';

    let tracksItem = getTracksByGenre.data.length > 0 && getTracksByGenre.data.map(function(trackObj,i) {
      let track = trackObj.track;
      return <li className="clearfix"
                 key={i} uri={track.uri}
                 onClick={_self.handleTrackClick.bind(null, track.uri)}>
        <div>
          <img src={track.artwork_url}
               alt={track.artwork_url}/>
          <p title={track.title || "Not Available"}
             className="track-title">
            <strong>{track.title || "Not Available"}</strong>
          </p>
          <p className="artist-name">by {track.publisher_metadata && track.publisher_metadata.artist || "Not Available"}</p>
          <p>
            <small>Album: {track.publisher_metadata && track.publisher_metadata.release_title || "Not Available"}</small>
          </p>
          <p className="user-info">
            <small>
              <em>Uploaded by {track.user && track.user.full_name || "Not Available"}</em>
            </small>
          </p>
        </div>
      </li>;
    });

    return (
      (tracksItem.length > 0) ? <div className="col-sm-12 center-block"
           style={{background: '#ffffff'}}>
        <br/>
        <h1 className="text-center">Popular songs in {params.genreName}</h1>
        <br/>
        <iframe id="sc-widget"
                src={"https://w.soundcloud.com/player/?url=" + tracksItem[0].props.uri + urlParamsForPlayer}
                scrolling="no"
                frameborder="no"
                className="player-widget">
        </iframe>
        <ul className="tracks-container">
          {tracksItem}
        </ul>
      </div> : <Loader/>
    );
  }
}

const mapStateToProps = (state) => ({
  getTracksByGenre: state.getTracksByGenre
});

const mapActionToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Player);