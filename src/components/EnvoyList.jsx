import React from 'react';
import { connect } from 'react-redux';

import SearchComponent from './SearchComponent';
import { getMeps } from '../actions/actions';
import MepsTable from '../containers/MepsTable';

class EnvoyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meps: this.props.meps
        }
    }

    componentDidMount() {
        this.props.getMeps();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            meps: nextProps.meps
        }, () => {
            if(nextProps.loadNewData) {
                this.props.getMeps();
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <SearchComponent />
                <MepsTable meps={this.state.meps} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        meps: state.appReducer.meps,
        loadNewData: state.appReducer.loadNewData
    }
}

export default connect(mapStateToProps, {getMeps})(EnvoyList);