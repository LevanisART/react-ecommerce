import DirectoryActionTypes from './directory.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }

    case DirectoryActionTypes.FETCH_COLLECTIONS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    default:
      return state;
    case DirectoryActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
  }
};

export default directoryReducer;
