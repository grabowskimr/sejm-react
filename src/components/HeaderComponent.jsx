import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../containers/HeaderContainer';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header />
        )
    }
}

export default HeaderComponent;