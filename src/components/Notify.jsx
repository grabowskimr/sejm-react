import React from 'react';
import { connect } from 'react-redux';

import NotifyContainer from '../containers/NotifyContainer';
import { hideNotify } from '../actions/actions';


class Notify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.showNotify,
            text: this.props.notifyText
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.showNotify,
            text: nextProps.notifyText
        }, this.startTimeout());
    }

    startTimeout() {
        var timeout = setTimeout(() => {
            this.props.hideNotify();
            clearTimeout(timeout);
        }, 2300);
    }

    render() {
        return (
            <NotifyContainer show={this.state.show} text={this.state.text}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        showNotify: state.appReducer.showNotify,
        notifyText: state.appReducer.notifyText
    }
}

export default connect(mapStateToProps, {hideNotify})(Notify);