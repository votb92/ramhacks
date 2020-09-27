import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthScreen } from './Components/Layout/AuthScreen'
import { ZipScreen} from './Components/Layout/ZipScreen'
import { MainScreen } from './Components/Layout/MainScreen'

export const MyRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AuthScreen} />
        <Route exact path='/zip' component={ZipScreen} />
        <Route exact path='/home' component={MainScreen} />
      </Switch>
    </Router>
  )
}
