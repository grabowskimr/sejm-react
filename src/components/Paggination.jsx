import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';
import PaginationContainer from '../containers/Paggination';
import { stepBack, stepForward } from '../actions/actions';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            step: this.props.step,
            meps: this.props.meps
        };
        this.stepForward = this.stepForward.bind(this);
        this.stepBack = this.stepBack.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            page: nextProps.page,
            step: nextProps.step,
            meps: nextProps.meps
        })
    }

    stepForward(e) {
        e.preventDefault();
        var nextPage = this.state.page  + this.state.step;
        this.props.stepForward(nextPage);
    }

    stepBack(e) {
        e.preventDefault();
        var prevPage = this.state.page <= 0 ? 0 : this.state.page - this.state.step;
        this.props.stepBack(prevPage);
    }

    render() {
        return (
            <PaginationContainer>
                <Button primary onClick={this.stepBack} disabled={this.state.page == 0}>Wstecz</Button>
                <Button primary onClick={this.stepForward} disabled={!this.state.meps.length}>Dalej</Button>
            </PaginationContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        page: state.appReducer.page,
        step: state.appReducer.step,
        meps: state.appReducer.meps
    }
}

export default connect(mapStateToProps, {stepBack, stepForward})(Pagination);