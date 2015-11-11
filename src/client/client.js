import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'

ReactDOM.render(
  <Router history={createBrowserHistory()} routes={routes} />,
  document.getElementById('content')
)
