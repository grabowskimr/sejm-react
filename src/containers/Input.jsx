import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 6px 20px;
    background: #fff;
    border: none;
    border-radius: 3px;
    transition: all .2s ease-in-out;
    margin: 5px !important;
    border: 1px solid #a2a2a2;
    padding: 6px 10px;
    max-width: ${props => props.type === 'file' && '300px'};
    &:focus {
        border: 1px solid #1a3867;
    };
`;

const Label = styled.label`
    font-size: 14px;
    width: auto;
    display: inline-block;
    margin: 5px 5px 0px;
    color: #000;
`;

const LabeledInputContainer = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? props.width : 'auto'};
`;

const InputContainer = (props) => {
    return (
        <React.Fragment>
            {props.label ? 
                <LabeledInputContainer width={props.width}>
                    <Label>{props.label}</Label>
                    <Input {...props} />
                </LabeledInputContainer> : <Input {...props} />}
        </React.Fragment>
    )
};

export default InputContainer;