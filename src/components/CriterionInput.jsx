import React from 'react';

import Criterion from '../containers/Criterion';

class CriterionInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
        this.clickPositive = this.clickPositive.bind(this);
        this.clickNegative = this.clickNegative.bind(this);
        this.clickNeutral = this.clickNeutral.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    clickPositive(e) {
        e.preventDefault();
        this.setState({
            status: 1
        });
        this.props.changeCriterion(this.props.name, this.state);
    }

    clickNegative(e) {
        e.preventDefault();
        this.setState({
            status: -1
        });
        this.props.changeCriterion(this.props.name, this.state);
    }

    clickNeutral(e) {
        e.preventDefault();
        this.setState({
            status: 0
        });
        this.props.changeCriterion(this.props.name, this.state);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.changeCriterion(this.props.name, this.state);
    }

    render() {
        return (
            <Criterion 
                {...this.props}
                onChange={this.onChange}
                value={this.state.value}
                clickPositive={this.clickPositive}
                clickNegative={this.clickNegative}
                clickNeutral={this.clickNeutral}
                status={this.state.status}
            />
        )
    }
}

export default CriterionInput;