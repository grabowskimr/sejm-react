import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';
import Input from '../containers/Input';
import Title from '../containers/Title';
import Section from '../containers/Section';
import Select from '../containers/Select';
import Grid from '../containers/Grid';
import { getMeps, search } from '../actions/actions';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parties: this.props.parties,
            searchName: this.props.searchName,
            searchSurname: this.props.searchSurname,
            searchParty: this.props.searchParty,
            searchConsituency: this.props.searchConsituency,
            page: this.props.page,
            step: this.props.step
        };
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            parties: nextProps.parties,
            searchName: nextProps.searchName,
            searchSurname: nextProps.searchSurname,
            searchParty: nextProps.searchParty,
            searchConsituency: nextProps.searchConsituency,
            step: nextProps.step
        })
    }

    onChange(e) {
        var name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    search(e) {
        e.preventDefault();
        this.props.search();
        this.props.getMeps(this.state.searchName, this.state.searchSurname, this.state.searchParty, this.state.searchConsituency, 0, this.state.step);
    }

    reset(e) {
        e.preventDefault();
        this.setState({
            searchName: '',
            searchSurname: '',
            searchParty: '',
            searchConsituency: ''
        }, () => {
            this.props.search();
            this.props.getMeps(this.state.searchName, this.state.searchSurname, this.state.searchParty, this.state.searchConsituency, 0, this.state.step);
        })
    }

    render() {
        return (
            <Section>
                <Title>Szukaj</Title>
                <form>
                    <Grid>
                        <Input type="text" placeholder="Imię i nazwisko" label="Imię" name="searchName" value={this.state.searchName} onChange={this.onChange}/>
                        <Input type="text" placeholder="Imię i nazwisko" label="Nazwisko" name="searchSurname" value={this.state.searchSurname} onChange={this.onChange}/>
                        <Select options={this.state.parties} label="Partia" name="searchParty" iterateValue="name" iterateName="name" value={this.state.searchParty} onChange={this.onChange}/>
                        <Input type="text" placeholder="Okręg wyborczy" name="searchConsituency" label="Okręg wyborczy" value={this.searchConsituency} onChange={this.onChange}/>                    
                        <Button primary onClick={this.search}>Szukaj</Button>
                        <Button greyed onClick={this.reset}>Reset</Button>
                    </Grid>
                </form>
            </Section>
        )
    }
}

function mapStateToProps(state) {
    return {
        parties: state.appReducer.parties,
        searchName: state.appReducer.searchName,
        searchSurname: state.appReducer.searchSurname,
        searchParty: state.appReducer.searchParty,
        searchConsituency: state.appReducer.searchConsituency,
        step: state.appReducer.step
    }
}

export default connect(mapStateToProps, {getMeps, search})(SearchComponent);