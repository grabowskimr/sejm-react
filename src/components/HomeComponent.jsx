import React from 'react';
import { Route, Switch } from 'react-router';

import PoselComponent from './PoselComponent';
import PoselList from './PoselList';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.push('/')
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={PoselList} />
                <Route path="/posel" component={PoselComponent} />
            </Switch>
        )
    }
}

export default HomeComponent;