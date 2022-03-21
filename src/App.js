import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import LoginRoute from './LoginRoute'

import HomeRoute from './HomeRoute'

import NotFound from './NotFoundRoute'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <Route component={NotFound} />
  </Switch>
)

export default App
