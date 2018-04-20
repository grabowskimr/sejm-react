import React from 'react';
import { connect } from 'react-redux';

import { getEnvoyStructure } from '../actions/actions';
import Select from '../containers/Select';
import Input from '../containers/Input';
import Textarea from '../containers/Textarea';
import Button from '../containers/Button';
import Criterion from '../containers/Criterion';
import ImageThumb from '../containers/ImageThumb';
import Grid from '../containers/Grid';
import RemoveButton from '../containers/RemoveButton';

class EnvoyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            structure: this.props.envoyStructure,
            parties: this.props.parties
        };
        this.onChange = this.onChange.bind(this);
        this.changeCriterion = this.changeCriterion.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentDidMount() {
        this.props.getEnvoyStructure();
    }

    componentWillReceiveProps(nextProps) {
        var intuts = {};
        nextProps.envoyStructure.map((input) => {
            if(input.Field.match(/criterion/)) {
                if(nextProps.envoy && nextProps.envoy[input.Field]) {
                    if(nextProps.envoy[input.Field].length) {
                        intuts[input.Field] = intuts[input.Field] = JSON.parse(nextProps.envoy[input.Field])
                    } else {
                        intuts[input.Field] = {value: '', status: 0};
                    }
                } else {
                    intuts[input.Field] = {value: '', status: 0};
                }
            } else if(input.Field === 'points') {
                intuts[input.Field] = nextProps.envoy ? nextProps.envoy[input.Field] : '0';
            } else {
                intuts[input.Field] = nextProps.envoy ? nextProps.envoy[input.Field] : '';
            }
        });
        this.setState(Object.assign({
            structure: nextProps.envoyStructure,
        }, intuts))
    }

    onChange(e) {
        const name = e.target.name;
        if(e.target.type === 'file') {
            this.setState({
                image: e.target.files[0]
            });
        } else {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    changeCriterion(name, type, value) {
        var obj = Object.assign(this.state[name], {[type]: value});
        if(type === 'status') {
            let points = 0;
            for(var i in this.state) {
                if(this.state[i].status) {
                    points += parseInt(this.state[i].status);
                }
            }
            this.setState({
                points: points || '0',
                [name]: obj
            })
        } else {
            this.setState({
                [name]: obj
            });
        }
    }

    changeStatus(e, name, status) {
        e.preventDefault();
        this.changeCriterion(name, 'status', status);
    }

    render() {
        return (
            <form>
                {this.state.structure && this.state.structure.map((input, index) => (
                    input.Field === 'party' ? 
                        <Select key={index} label={input.Comment} options={this.state.parties} iterateValue="name" iterateName="name" value={this.state[input.Field] ? this.state[input.Field] : ''} name={input.Field} onChange={this.onChange}/>
                    : input.Field === 'description' ? 
                        <Textarea key={index} label={input.Comment} value={this.state[input.Field] ? this.state[input.Field] : ''} name={input.Field} onChange={this.onChange} />
                    : input.Field.match(/criterion/gi) ? 
                        <Criterion 
                            key={index}
                            type="text"
                            name={input.Field}
                            label={input.Comment}
                            onChange={(e) => this.changeCriterion(input.Field, 'value', e.target.value)}
                            value={this.state[input.Field] ? this.state[input.Field].value : ''}
                            changeStatus={this.changeStatus}
                            status={this.state[input.Field] ? this.state[input.Field].status : 0}
                        />
                    : input.Field === 'image' ?
                        <div key={index}>
                            {typeof this.state.image == 'string' ? <ImageThumb src={this.state.image} /> : null}
                            <Input key={index} type="file" label={input.Comment}  name={input.Field} onChange={this.onChange} />
                        </div>
                    : input.Field !== 'id' && <Input 
                            key={index} 
                            type="text" 
                            label={input.Comment} 
                            value={this.state[input.Field] ? this.state[input.Field] : ''} 
                            name={input.Field} 
                            onChange={this.onChange} 
                            readOnly={input.Field === 'points'}
                        />
                ))}
                <Grid>
                    <Button primary onClick={(e) => this.props.submitForm(e, this.state)}>Zapisz</Button>
                    {this.props.remove ? <RemoveButton textValues={["Usuń", "Jesteś pewien?", "Usuwanie..."]} showTimer isExecuting onClick={this.props.remove} />: null}
                </Grid>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoyStructure: state.appReducer.envoyStructure,
        parties: state.appReducer.parties
    }
}

export default connect(mapStateToProps, {getEnvoyStructure})(EnvoyForm);
