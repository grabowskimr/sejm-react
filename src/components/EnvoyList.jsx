import React from 'react';
import { connect } from 'react-redux';

import SearchComponent from './SearchComponent';
import { getMeps } from '../actions/actions';
import MepsTable from '../containers/MepsTable';
import Title from '../containers/Title';
import Section from '../containers/Section';
import Paggination from './Paggination';

class EnvoyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meps: this.props.meps,
            searchName: this.props.searchName,
            searchSurname: this.props.searchSurname,
            searchParty: this.props.searchParty,
            searchConsituency: this.props.searchConsituency,
            page: this.props.page,
            step: this.props.step
        }
    }

    componentDidMount() {
        this.props.getMeps(this.state.searchName, this.state.searchSurname, this.state.searchParty, this.state.searchConsituency, this.state.page, this.state.step);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            meps: nextProps.meps,
            searchName: nextProps.searchName,
            searchSurname: nextProps.searchSurname,
            searchParty: nextProps.searchParty,
            searchConsituency: nextProps.searchConsituency,
            page: nextProps.page,
            step: nextProps.step
        }, () => {
            if(nextProps.loadNewData) {
                this.props.getMeps(this.state.searchName, this.state.searchSurname, this.state.searchParty, this.state.searchConsituency, this.state.page, this.state.step);
            }
        })
    }

    render() {
        return (
            <Section>
                <SearchComponent />
                <Paggination />
                {this.state.meps.length ? <MepsTable meps={this.state.meps} /> :
                    <Title>Nie znaleziono posłów</Title>
                }
            </Section>
        )
    }
}

function mapStateToProps(state) {
    return {
        meps: state.appReducer.meps,
        loadNewData: state.appReducer.loadNewData,
        searchName: state.appReducer.searchName,
        searchSurname: state.appReducer.searchSurname,
        searchParty: state.appReducer.searchParty,
        searchConsituency: state.appReducer.searchConsituency,
        page: state.appReducer.page,
        step: state.appReducer.step
    }
}

export default connect(mapStateToProps, {getMeps})(EnvoyList);