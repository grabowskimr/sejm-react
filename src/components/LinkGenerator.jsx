import React, { Component } from 'react'
import { connect } from 'react-redux';

import Section from '../containers/Section';
import Button from '../containers/Button';
import Select from '../containers/Select';
import dbActions from '../actions/dbActions';

class LinkGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: '',
      envoys: []
    };
    this.onChange = this.onChange.bind(this);
    this.generateLinks = this.generateLinks.bind(this);
  }

  generateLinks() {
    dbActions.getEnvoyByParty(this.state.party).then(data => {
      this.setState({
        envoys: data.data
      });
    })
  }

  onChange(e) {
    this.setState({
      party: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Section>
          <form>
            <Select 
              label='Partia' 
              options={this.props.parties} 
              iterateValue="name" 
              iterateName="name" 
              value={this.state.party} 
              name='party' 
              onChange={this.onChange}
            />
          </form>
          <Button primary onClick={this.generateLinks}>Generuj</Button>
        </Section>
        {this.state.envoys && this.state.envoys.length ? <Section>
          <ul>
            {this.state.envoys.map(envoy => (
              <li key={envoy.id}>{envoy.name} {envoy.surname} ===> https://sejmik.pollyart.eu/ankieta?id={envoy.id}{envoy.hash}</li>
            ))}
          </ul>
        </Section> : null}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    parties: state.appReducer.parties
  }
}

export default connect(mapStateToProps, null)(LinkGenerator);