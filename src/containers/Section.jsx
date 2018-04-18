import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    background: #f5f5f5;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 5px;
`;

const SectionContainer = (props) => {
    return (
        <React.Fragment>
            <Section>{props.children}</Section>
        </React.Fragment>
    )
};

export default SectionContainer;