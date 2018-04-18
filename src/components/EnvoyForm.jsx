import React from 'react';
import { connect } from 'react-redux';

import { getEnvoyStructure } from '../actions/actions';
import Select from '../containers/Select';
import Input from '../containers/Input';
import Textarea from '../containers/Textarea';
import CriterionInput from './CriterionInput';
import Button from '../containers/Button';

class EnvoyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            structure: this.props.envoyStructure
        };
        this.onChange = this.onChange.bind(this);
        this.changeCriterion = this.changeCriterion.bind(this);
    }

    componentDidMount() {
        this.props.getEnvoyStructure();
    }

    componentWillReceiveProps(nextProps) {
        var intuts = {};
        nextProps.envoyStructure.map((input) => {
            intuts[input.Field] = "";    
        });
        this.setState(Object.assign({
            structure: nextProps.envoyStructure,
        }, intuts))
    }

    onChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    changeCriterion(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                {this.state.structure.map((input, index) => (
                    input.Field === 'party' ? 
                        <Select key={index} label={input.Comment} value={this.state[input.Field]} name={input.Field} onChange={this.onChange}/>
                    : input.Field === 'description' ? 
                        <Textarea key={index} type="text" label={input.Comment} value={this.state[input.Field]} name={input.Field} onChange={this.onChange} />
                    : input.Field.match(/criterion/gi) ? 
                        <CriterionInput key={index} type="text" label={input.Comment} value={this.state[input.Field]} data={{value: 'test', status: 1}} name={input.Field} changeCriterion={this.changeCriterion}/>
                    : <Input key={index} type="text" label={input.Comment} value={this.state[input.Field]} name={input.Field} onChange={this.onChange} />
                ))}
                <Button onClick={(e) => this.props.submitForm(e, this.state)}>Dodaj</Button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoyStructure: state.appReducer.envoyStructure
    }
}

export default connect(mapStateToProps, {getEnvoyStructure})(EnvoyForm);
