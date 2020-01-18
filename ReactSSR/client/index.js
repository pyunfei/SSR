import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import router from '../routes';

ReactDOM.hydrate(<BrowserRouter>
  {router}
</BrowserRouter>, document.getElementById('root'))
