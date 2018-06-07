import React from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.country;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.country}
    </div>
);

class AutoComplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: []
        };
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.getSuggestions = this.getSuggestions.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.selectSuggeestion = this.selectSuggeestion.bind(this);
    }

    getSuggestions(value) {
        const inputValue = value.toLowerCase();
        const inputLength = inputValue.length;
        
        return inputLength === 0 ? [] : this.props.countries.filter(country =>
            country.country.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    selectSuggeestion(event, {suggestionValue }) {
        this.props.onChangeSuggestion(this.props.name, suggestionValue);
    }

    render() {

        const inputProps = {
            placeholder: 'Orkęg/Powiat/Miasto',
            value: this.props.value,
            onChange: this.props.onChange,
            name: this.props.name
        };

        return (
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={this.selectSuggeestion}
                inputProps={inputProps}
            />
        )
    }

}

export default AutoComplate;