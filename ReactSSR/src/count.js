import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/count'

function Index(props) {
  const [count, setCount] = useState(0);
  console.log(this)
  return (<>
    <p>{props.number}</p>
    <button onClick={props.increment}>+</button>
  </>)
}

// class Index extends React.Component {
//   // state = {
//   //   number: 0
//   // }
//   render() {
//     return (<>
//       <p>{this.props.number}</p>
//       <button onClick={this.props.increment}>+</button>
//     </>)
//   }
// }

export default connect(
  state => state.count,
  actions
)(Index);