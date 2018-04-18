import React from 'react';
import { connect } from 'react-redux';

import { getEnvoyStructure } from '../actions/actions';
import Title from '../containers/Title';

class AddEnvoyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            structure: this.props.envoyStructure
        }
    }

    componentDidMount() {
        this.props.getEnvoyStructure();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            structure: nextProps.structure
        })
    }

    render() {
        return (
            <React.Fragment>
                <Title>AddEnvoyComponent</Title>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoyStructure: state.appReducer.envoyStructure
    }
}

export default connect(mapStateToProps, {getEnvoyStructure})(AddEnvoyComponent);