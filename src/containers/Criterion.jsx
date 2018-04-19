import React from 'react';
import styled from 'styled-components';

import Input from './Input';

const PosiviveBtn = styled.button`
    background: #4CAF50;
    color: #fff;
    margin: 5px 5px 5px -5px;
    border: none;
    padding: 5px 15px;
    opacity: ${props => props.status > 0 ? '1' : '.7'};
    transition: all .2s ease-in-out;
    outline: none;
    &:hover {
        opacity: 1;
    }
`;

const NeutralBtn = styled.button`
    background: #ccc;
    color: #000;
    margin: 5px 5px 5px -5px;
    border: none;
    padding: 5px 15px;
    opacity: ${props => props.status == 0 ? '1' : '.7'};
    transition: all .2s ease-in-out;
    outline: none;
    &:hover {
        opacity: 1;
    }
`;

const NegativeBtn = styled.button`
    background: #F44336;
    color: #fff;
    margin: 5px 5px 5px -5px;
    border: none;
    padding: 5px 15px;
    opacity: ${props => props.status < 0 ? '1' : '.7'};
    transition: all .2s ease-in-out;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    outline: none;
    &:hover {
        opacity: 7;
    }
`;

const Criterion = styled.div`
    overflow: hidden;
    display: flex;
    align-items: flex-end;
`;

const CriterionInput = styled(Input)`
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    transition: all .2s ease-in-out;
    background-color: ${props => props.status > 0 ? '#69F0AE' : props.status == 0 ? '#fff' :'#FF8A80'} !important;
`;

const CriterionContainer = (props) => (
    <Criterion>
        <CriterionInput {...props} />
        <NeutralBtn onClick={(e) => props.changeStatus(e, props.name, 0)} status={props.status} > :| </NeutralBtn>
        <PosiviveBtn onClick={(e) => props.changeStatus(e, props.name, 1)} status={props.status} > :) </PosiviveBtn>
        <NegativeBtn onClick={(e) => props.changeStatus(e, props.name, -1)} status={props.status} > :( </NegativeBtn>
    </Criterion>
);

export default CriterionContainer;