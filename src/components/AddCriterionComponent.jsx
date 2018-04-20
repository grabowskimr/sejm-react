import React from 'react';
import { connect } from 'react-redux';

import Input from '../containers/Input';
import Button from '../containers/Button';
import Title from '../containers/Title';
import Section from '../containers/Section';
import { addCriterion } from '../actions/actions';

class AddCriterionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.addCriterion = this.addCriterion.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addCriterion(e) {
        e.preventDefault();
        this.props.addCriterion(this.state.name);
        this.props.history.push('/');
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <Section>
                <Title>Dodaj Kryterium</Title>
                <form>
                    <Input label="Nazwa Kryterium" value={this.state.name} onChange={this.onChange} placeholder="Nazwa" />
                    <Button primary onClick={this.addCriterion}>Dodaj</Button>
                </form>
            </Section>
        )
    }
}

export default connect(null, {addCriterion})(AddCriterionComponent);