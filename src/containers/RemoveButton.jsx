import React from 'react';
import styled from 'styled-components';
import InlineConfirmButton from "react-inline-confirm";

import Button from './Button';

const RemoveButton = styled(InlineConfirmButton)`
    padding: 6px 20px;
    background: #F44336;
    color: #fff;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    margin: 5px;
    display: block;
    text-align: center;
    transition: all .2s ease-in-out;
    outline: none;
    &:hover {
        background: #B71C1C;
        color: #fff;
        text-decoration: none;
    };
`;

const RemoveButtonContainer = (props) => {
    return (
        <RemoveButton>{props.children}</RemoveButton>
    )
};

export default RemoveButton;