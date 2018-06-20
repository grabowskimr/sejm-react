import React from 'react';
import { connect } from 'react-redux';

import Input from '../containers/Input';
import Select from '../containers/Select';
import Button from '../containers/Button';
import Title from '../containers/Title';
import Section from '../containers/Section';
import { updateCriterion, getEnvoyStructure } from '../actions/actions';

class UpdateCriterion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            newName: '',
            structure: this.props.envoyStructure
        };
        this.updateCriterion = this.updateCriterion.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.getEnvoyStructure();
    }

    componentWillReceiveProps(nextPorps) {
        var criteria = nextPorps.envoyStructure.filter(column => column.Field.match(/criterion/));
        this.setState({
            structure: criteria
        })
    }

    updateCriterion(e) {
        e.preventDefault();
        if(this.state.name.length && this.state.newName.length) {
            this.props.updateCriterion(this.state.name, this.state.newName);
            this.props.history.push('/');
        }
    }

    onChange(e) {
        var name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
            <Section>
                <Title>Edytuj Kryterium</Title>
                <form>
                    <Select label='Wybierz kryterium' options={this.state.structure} iterateValue="Field" iterateName="Comment" value={this.state.name} name="name" onChange={this.onChange}/>
                    <Input type="text" label="Nowa nazwa" value={this.state.newName} onChange={this.onChange} name="newName"/>
                    <Button primary onClick={this.updateCriterion}>Zapisz</Button>
                </form>
            </Section>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoyStructure: state.appReducer.envoyStructure
    }
}

export default connect(mapStateToProps, {updateCriterion, getEnvoyStructure})(UpdateCriterion);