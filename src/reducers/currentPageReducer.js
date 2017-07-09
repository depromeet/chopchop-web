import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as PAGE_CHANGE from '../actions/currentPageAction';


const initialState = Map({
  pageName: ''
});


const Handler = handleActions({
  [PAGE_CHANGE.PAGE_CHANGE]: (state, { payload }) => state.set('pageName', payload)
}, initialState);

export default Handler;
