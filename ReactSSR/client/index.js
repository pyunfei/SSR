import React from 'react'
import ReactDOM from 'react-dom'
import Index from '../src/index';
import Count from '../src/count';

const Container = () => {
  return (<>
    <Index />
    <Count />
  </>)
}

ReactDOM.hydrate(<Container />, document.getElementById('root'))
