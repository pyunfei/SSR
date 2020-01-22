import React from 'react';
import { Route } from "react-router-dom";
import { renderRoutes, matchRoutes } from 'react-router-config';

import routes from '../routes';

function App(props) {
  // console.log("props",props)
  return (<>
    {/* {routes.map(route => (
      <Route {...route} />
    ))} */}
    {renderRoutes(props.route.components)}
  </>)
}

export default App;