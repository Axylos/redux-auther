import { combineEpics } from 'redux-observable';
import AuthEpic from './containers/Auth/epics.js';

export default combineEpics(
  AuthEpic,
);
