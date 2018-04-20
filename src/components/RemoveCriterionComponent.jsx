import React from 'react';
import { connect } from 'react-redux';

import Input from '../containers/Input';
import Select from '../containers/Select';
import Button from '../containers/Button';
import Title from '../containers/Title';
import Section from '../containers/Section';
import { removeCriterion, getEnvoyStructure } from '../actions/actions';

class RemoveCriterionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            structure: this.props.envoyStructure
        };
        this.removeCriterion = this.removeCriterion.bind(this);
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

    removeCriterion(e) {
        e.preventDefault();
        if(this.state.name.length) {
            this.props.removeCriterion(this.state.name);
            this.props.history.push('/');
        }
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <Section>
                <Title>Usuń Kryterium</Title>
                <form>
                    <Select label='Wybierz kryterium' options={this.state.structure} iterateValue="Field" iterateName="Comment" value={this.state.name} onChange={this.onChange}/>
                    <Button primary onClick={this.removeCriterion}>Usuń</Button>
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

export default connect(mapStateToProps, {removeCriterion, getEnvoyStructure})(RemoveCriterionComponent);