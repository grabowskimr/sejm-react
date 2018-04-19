import React from 'react';
import { connect } from 'react-redux';

import Title from '../containers/Title';
import EnvoyForm from './EnvoyForm';
import { getEnvoy, updateEnvoy } from '../actions/actions';

class UpdateEnvoyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            id: this.props.match.params.id,
            envoy: this.props.envoy
        }
    }

    componentDidMount() {
        this.props.getEnvoy(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            envoy: nextProps.envoy
        })
    }

    submitForm(e, values) {
        e.preventDefault();
        this.props.updateEnvoy(values);
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <Title>Edytuj Posła</Title>
                {this.state.envoy.id ? 
                    <EnvoyForm 
                        submitForm={this.submitForm}
                        envoy={this.state.envoy}
                    />
                : null}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoy: state.appReducer.envoy
    }
}


export default connect(mapStateToProps, {getEnvoy, updateEnvoy})(UpdateEnvoyComponent);