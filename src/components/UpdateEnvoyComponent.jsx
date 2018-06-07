import React from 'react';
import { connect } from 'react-redux';

import Title from '../containers/Title';
import EnvoyForm from './EnvoyForm';
import Section from '../containers/Section';
import { getEnvoy, updateEnvoy, getEnvoyStructure, removeEnvoy } from '../actions/actions';

class UpdateEnvoyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            id: this.props.match.params.id,
            envoy: this.props.envoy
        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.props.getEnvoyStructure();
        this.props.getEnvoy(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            envoy: nextProps.envoy
        })
    }

    submitForm(e, values) {
        e.preventDefault();
        console.log(values);
        this.props.updateEnvoy(values);
        this.props.history.push('/');
    }

    remove() {
        this.props.removeEnvoy(this.state.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <Section>
                <Title>Edytuj Posła</Title>
                {this.state.envoy.id ? 
                    <EnvoyForm 
                        submitForm={this.submitForm}
                        envoy={this.state.envoy}
                        remove={this.remove}
                    />
                : null}
            </Section>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoy: state.appReducer.envoy
    }
}


export default connect(mapStateToProps, {getEnvoy, updateEnvoy, getEnvoyStructure, removeEnvoy})(UpdateEnvoyComponent);