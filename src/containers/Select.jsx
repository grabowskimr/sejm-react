import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    padding: 6px 20px;
    background: #fff;
    color: #000;
    border: none;
    border-radius: 3px;
    transition: all .2s ease-in-out;
    margin: 5px !important;
    border: 1px solid #a2a2a2;
    padding: 6px 10px;
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

const LabeledSelectContainer = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? props.width : 'auto'};
`;

const SelectContainer = (props) => {
    var options = props.options || [];
    return (
        <React.Fragment>
            {props.label ? 
                <LabeledSelectContainer width={props.width}>
                    <Label>{props.label}</Label>
                    <Select {...props}>
                        <option value="">Wszystkie</option>
                        {options.map((option, index) => (
                            <option key={index} value={option[props.iterateValue]}>{option[props.iterateName]}</option>
                        ))}
                    </Select>
                </LabeledSelectContainer> : 
                <Select {...props}>
                    <option value="">Wszystkie</option>
                    {options.map((option, index) => (
                        <option key={index} value={option[props.iterateValue]}>{option[props.iterateName]}</option>
                    ))}
                </Select>}
        </React.Fragment>
    )
};

export default SelectContainer;