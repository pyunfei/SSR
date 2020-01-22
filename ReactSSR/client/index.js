import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, matchPath, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import routes from '../routes';

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
