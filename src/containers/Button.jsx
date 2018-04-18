import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 20px;
    background: ${props => props.primary ? '#1a3867' : '#46a546'};
    color: #fff;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    margin: 5px;
    transition: all .2s ease-in-out;
    &:hover {
        background: ${props => props.primary ? '#23416f' : '#306e2f'};
        color: #fff;
        text-decoration: none;
    };
    &:focus {
        color: #fff;
        text-decoration: none;
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