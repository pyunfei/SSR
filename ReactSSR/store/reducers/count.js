import * as types from '../action-types.js'
const initialState = { number: 0 };
export default function (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { number: state.number + 1 }
    default:
      return state
  }
}