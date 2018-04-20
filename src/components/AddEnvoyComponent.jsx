import React from 'react';
import { connect } from 'react-redux';

import Title from '../containers/Title';
import EnvoyForm from './EnvoyForm';
import Section from '../containers/Section';
import { addEnvoy } from '../actions/actions';

class AddEnvoyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e, values) {
        e.preventDefault();
        this.props.addEnvoy(values);
        this.props.history.push('/');
    }

    render() {
        return (
            <Section>
                <Title>Dodaj Posła</Title>
                <EnvoyForm 
                    submitForm={this.submitForm}
                />
            </Section>
        )
    }
}



export default connect(null, {addEnvoy})(AddEnvoyComponent);