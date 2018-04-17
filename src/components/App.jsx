import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import HomeComponent from './HomeComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <Link to="">Home</Link>
                <Link to="/posel">Posel</Link>
                <Switch>
                    <Route exact path="" component={HomeComponent} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;