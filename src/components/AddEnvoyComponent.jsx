import React from 'react';

import Title from '../containers/Title';
import EnvoyForm from './EnvoyForm';

class AddEnvoyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e, values) {
        e.preventDefault();
        console.log(values);
    }

    render() {
        return (
            <React.Fragment>
                <Title>Dodaj Posła</Title>
                <EnvoyForm 
                    submitForm={this.submitForm}
                />
            </React.Fragment>
        )
    }
}

export default AddEnvoyComponent;