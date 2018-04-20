import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';

const Pagination = styled(Grid)`
    display: flex;
    justify-content: flex-end;
    margin: -20px -5px 0px 2px;
    padding: 0px;
`;

const PaginationContainer = (props) => {
    return (
        <Pagination>{props.children}</Pagination>
    )
};

export default PaginationContainer;