/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory, Link} from 'react-router';

import './Player.css';
import Loader from '../../components/Loader/Loader';
import '../../utils/soundcloud-api';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.getTracksByGenre,
      urlParamsForPlayer: '&liking=false&download=false&buying=false&sharing=false&show_comments=false&show_user=false&auto_play=true'
    };
  }

  componentWillMount() {
    const {location, params} = this.props;
    location.state == null && params.genreName !== location.state && browserHistory.push('/music-player/genres');
  }

  handleTrackClick = (trackUrl) => {
    document.getElementById('sc-widget').src = "https://w.soundcloud.com/player/?url=" + trackUrl + this.state.urlParamsForPlayer;
  };

  render() {
    const {getTracksByGenre, params} = this.props;
    const {urlParamsForPlayer} = this.state;
    const _self = this;

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
        <Link to="/music-player/genres"
              className="btn btn-link">
          &lt; Back to Genres Page
        </Link>
        <h1 className="text-center">Popular songs</h1>
        <br/>
        <ul className="tracks-container">
          {tracksItem}
        </ul>
        <iframe id="sc-widget"
                src={"https://w.soundcloud.com/player/?url=" + tracksItem[0].props.uri + urlParamsForPlayer}
                scrolling="no"
                frameborder="no"
                className="player-widget">
        </iframe>
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