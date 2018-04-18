import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import ContentComponent from './ContentComponent';
import HeaderComponent from './HeaderComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <HeaderComponent />
                <Switch>
                    <Route exact path="" component={ContentComponent} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;