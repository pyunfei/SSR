import React from 'react';
import { Route } from 'react-router-dom';
import Index from './src/index';
import Count from './src/count';

export default (<>
  <Route path="/" exact component={Index} />
  <Route path="/count" component={Count} />
</>)