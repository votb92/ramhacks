import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthScreen } from './Components/Layout/AuthScreen'

export const MyRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AuthScreen} />
      </Switch>
    </Router>
  )
}
