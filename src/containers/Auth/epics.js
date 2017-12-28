import * as actionTypes from './actions/auth.types';
import * as actions from './actions/auth.actions';
import { combineEpics } from 'redux-observable';
import { ofType, map } from 'rxjs';
import { getFoo } from './service'; 
import { fromPromise, Observable } from 'rxjs/Observable';


const checkAuth = action$ => {
  return action$.ofType(actionTypes.AUTH_VALIDATE)
    .mergeMap((action) => {
      return getFoo()
        .then(resp => actions.confirmAuth())
        .catch(e => {
          return actions.rejectAuth();
        })
    });
}

export default combineEpics(
  checkAuth
);
