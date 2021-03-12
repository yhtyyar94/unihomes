import React from 'react'
import Search from './Search/Search'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import City from '../City/City';
import Header from './Header/Header';


export default function App() {
    return (
        <div>
            <Header />
           
           
            <Router>
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route exact path="/city" component={City} />
                    </Switch>
            </Router>
                
            
        </div>
    )
}
