import React, { useState } from 'react';

function Index() {
  const [count, setCount] = useState(0);
  return (<>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>+</button>
  </>)
}

// class Index extends React.Component {
//   state = {
//     count: 0
//   }
//   render() {
//     return (<>
//       <p>{this.state.count}</p>
//       <button onClick={() => this.setState({
//         count: this.state.count + 1
//       })}>+</button>
//     </>)
//   }
// }

export default Index;