import React from 'react';
import styled from 'styled-components';

const Notify = styled.div`
    background: #3e3e3e;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 10px 20px;
    width: 200px;
    position: fixed;
    bottom: 45px;
    right: 1%;
    color: #fff;
    text-align: center;
    font-weight: 600;
    border-radius: 3px;
    transition: all .3s ease-in-out;
    min-height: 40px;
    opacity: ${props => props.show ? '1' : '.5'};
    transform: ${props => props.show ? 'translateY(0px)' : 'translateY(100px)'};
`;

const NotifyContainer = (props) => {
    return (
        <Notify {...props}>{props.text}</Notify>
    )
};

export default NotifyContainer;