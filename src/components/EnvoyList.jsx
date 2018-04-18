import React from 'react';

import SearchComponent from './SearchComponent';

class EnvoyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <SearchComponent />
                <h1>EnvoyList</h1>
            </React.Fragment>
        )
    }
}

export default EnvoyList;