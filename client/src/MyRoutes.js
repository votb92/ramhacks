import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthScreen } from './Components/Layout/AuthScreen'
import { ZipScreen} from './Components/Layout/ZipScreen'

export const MyRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AuthScreen} />
        <Route exact path='/zip' component={ZipScreen} />
      </Switch>
    </Router>
  )
}
