import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAIL = 'FETCHING_SMURFS_FAIL';

export const CREATE_SMURF = "CREATE_SMURF";
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS";
export const CREATE_SMURF_FAIL = "CREATE_SMURF_FAIL";


export function getSmurfs() {
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_SMURFS_FAIL, payload: error})
      })
  }
}
export function addSmurf(smurf) {
  return function(dispatch) {
    dispatch({ type: CREATE_SMURF });
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: CREATE_SMURF_FAIL, payload: error })
      })
  }
}
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
