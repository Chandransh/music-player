/**
 * Created by chandransh on 9/12/16.
 */
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

const initialState = {
  data: [],
  loaded: false
};

export default function getTracksByGenre(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SUCCESS:
    case LOAD_FAILURE: {
      return {
        ...state,
        loaded: true,
        data: action.data
      };
    }
    default:
      return state;
  }
}

export function loadSuccess(response) {
  return {
    type: LOAD_SUCCESS,
    data: response.collection
  }
}

export function loadFailure(error) {
    console.log('Failed to fetch tracks. ' + error);
    return {
      type: LOAD_FAILURE,
      data: []
    }
}