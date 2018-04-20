import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 20px;
    background: ${props => props.primary ? '#1a3867' : props.greyed ? '#909090' : props.danger ? '#F44336' : '#46a546'};
    color: #fff;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    margin: ${props => props.centered ? '5px auto' : '5px'};
    display: block;
    text-align: center;
    transition: all .2s ease-in-out;
    outline: none;
    &:hover {
        background: ${props => props.primary ? '#23416f' : props.greyed ? '#505050' : '#306e2f'};
        color: #fff;
        text-decoration: none;
    };
    &:focus {
        color: #fff;
        text-decoration: none;
    }
    &:disabled {
        background: #bdbdbd;
    }
`;

const Link = Button.withComponent('a');

const ButtonContainer = (props) => {
    return (
        <React.Fragment>
            {props.href ? <Link {...props}>{props.children}</Link> : <Button {...props}/> }
        </React.Fragment>
    )
};

export default ButtonContainer;