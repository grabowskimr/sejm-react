import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
    padding: 6px 20px;
    background: #fff;
    border: none;
    border-radius: 3px;
    transition: all .2s ease-in-out;
    margin: 5px !important;
    border: 1px solid #a2a2a2;
    padding: 6px 10px;
    height: 200px;
    max-width: 95%;
    width: 400px;
    &:focus {
        border: 1px solid #1a3867;
    }
`;

const Label = styled.label`
    font-size: 14px;
    width: auto;
    display: inline-block;
    margin: 5px 5px 0px;
    color: #000;
`;

const LabeledTextareaContainer = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? props.width : 'auto'};
`;

const TextareaContainer = (props) => {
    return (
        <React.Fragment>
            {props.label ? 
                <LabeledTextareaContainer width={props.width}>
                    <Label>{props.label}</Label>
                    <Textarea {...props} />
                </LabeledTextareaContainer> : <Textarea {...props} />}
        </React.Fragment>
    )
};

export default TextareaContainer;