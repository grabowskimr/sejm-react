import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 20px;
    margin: 5px;
`;

const TitleContainer = (props) => {
    return (
        <React.Fragment>
            <Title>{props.children}</Title>
        </React.Fragment>
    )
};

export default TitleContainer;