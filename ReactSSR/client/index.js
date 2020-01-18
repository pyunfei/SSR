import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import router from '../routes';

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      {router}
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
