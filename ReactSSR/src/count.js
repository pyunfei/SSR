import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/count'

// function Index() {
//   const [count, setCount] = useState(0);
//   console.log(this)
//   return (<>
//     <p>{count}</p>
//     <button onClick={() => setCount(count + 1)}>+</button>
//   </>)
// }

class Index extends React.Component {
  // state = {
  //   number: 0
  // }
  render() {
    return (<>
      <p>{this.props.number}</p>
      <button onClick={this.props.increment}>+</button>
    </>)
  }
}

export default connect(
  state => state.count,
  actions
)(Index);