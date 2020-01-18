import React from 'react';
import { Route } from 'react-router-dom';
import Index from './src/index';
import Count from './src/count';

export default (<>
  <Route path="/" exact component={Index} />
  <Route path="/count" component={Count} />
</>)

// export default [
//   {
//     path: '/',
//     component: Index,
//     exact: true,
//     key: '/',
//     loadData: Index.loadData
//   },
//   {
//     path: '/count',
//     component: Count,
//     key: '/count',
//   },
// ]