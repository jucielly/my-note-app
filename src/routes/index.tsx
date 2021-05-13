import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/pages/LoginPage'
import Home from '../components/pages/Home'
import LoginCard from '../components/organisms/LoginCard'
import RegisterCard from '../components/organisms/RegisterCard'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/Home" exact component={Home} />
            <Route path="/login" exact component={LoginCard}/>
            <Route path="/register" exact component={RegisterCard}/>
        </Switch>
    )
}

export default Routes