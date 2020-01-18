import * as types from '../action-types';
import axios from 'axios';

export default {
  addList() {
    return function (dispatch, getState) {
      return axios.get('http://localhost:4000/api/index').then(res => {
        dispatch({
          type: types.ADD_LIST,
          payload: res
        })
      })
    }
  }
}