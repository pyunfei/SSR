import * as types from '../action-types.js'
const initialState = { list: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIST:
      return { list: action.payload }
    default:
      return state
  }
}