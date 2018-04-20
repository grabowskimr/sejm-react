import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const GridContainer = (props) => (
    <Grid {...props}>
        {props.children}
    </Grid>
)

export default GridContainer;