import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../hisory'
import List from './List'
import NewTodo from './NewTodo'
import Navbar from './Navbar'

const App = () => {


    return (
        <div>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={List} />
                    <Route path="/new" exact component={NewTodo} />
                </Switch>
            </Router>
        </div>
    )
}



export default App