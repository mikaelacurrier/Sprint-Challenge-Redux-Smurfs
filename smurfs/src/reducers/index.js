import { 
  FETCHING_SMURFS, 
  FETCHING_SMURFS_SUCCESS, 
  FETCHING_SMURFS_FAIL,
  CREATE_SMURF,
  CREATE_SMURF_FAIL,
  CREATE_SMURF_SUCCESS
} from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   // updatingSmurf: false,
   // deletingSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS: 
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
    case FETCHING_SMURFS_SUCCESS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: action.payload,
      });
    case FETCHING_SMURFS_FAIL: {
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      })
    }
    case CREATE_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true
      })
    case CREATE_SMURF_SUCCESS:
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfs: action.payload
      })
    case CREATE_SMURF_FAIL:
      return Object.assign({}, state, {
        addingSmurf: false,
        error: action.payload
      })
    default:
      return state;
    }
  }
