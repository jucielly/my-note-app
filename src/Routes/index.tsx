import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/pages/LoginPage'
import Home from '../components/pages/Home'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/Home" exact component={Home} />
        </Switch>
    )
}

export default Routes