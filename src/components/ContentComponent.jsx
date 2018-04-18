import React from 'react';
import { Route, Switch } from 'react-router';

import EnvoyComponent from './EnvoyComponent';
import EnvoyList from './EnvoyList';
import AddCriterionComponent from './AddCriterionComponent';
import AddEnvoyComponent from './AddEnvoyComponent';

class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.push('/')
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={EnvoyList} />
                    <Route exact path="/dodaj" component={AddEnvoyComponent} />
                    <Route exact path="/dodajKryterium" component={AddCriterionComponent} />
                    <Route path="/posel" component={EnvoyComponent} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentComponent;