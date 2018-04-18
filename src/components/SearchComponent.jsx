import React from 'react';

import Button from '../containers/Button';
import Input from '../containers/Input';
import Title from '../containers/Title';
import Section from '../containers/Section';
import Select from '../containers/Select';
import Grid from '../containers/Grid';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opt : [
                {name: 'test1', value: 1},
                {name: 'test2', value: 2},
                {name: 'test3', value: 3}
            ]
        };
    }

    render() {
        return (
            <Section>
                <Title>Szukaj</Title>
                <form>
                    <Grid>
                        <Input type="text" placeholder="Imię i nazwisko" label="Imię i nazwisko"/>
                        <Select options={this.state.opt} label="Partia"/>
                        <Input type="text" placeholder="Okręg wyborczy" label="Okręg wyborczy"/>                    
                        <Button primary>Szukaj</Button>
                    </Grid>
                </form>
            </Section>
        )
    }
}

export default SearchComponent;