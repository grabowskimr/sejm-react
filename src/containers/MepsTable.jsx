import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

const Table = styled.table`
    background: #fff;
    width: 100%;
    border-collapse: inherit;
`;

const Tr = styled.tr`
    background: #fff;
`;

const Td = styled.td`
    padding: 10px 5px 10px 2%;
    background: #fff;
    text-align: left;
    border: 1px solid #f5f5f5;
`;

const TdImg = styled(Td)`
    display: flex;
    align-items: center;
    font-size: 15px;
`;

const LastTd = styled(Td)`
    padding: 5px;
    width: 100px;
`;

const Th = styled.th`
    padding: 10px 5px 10px 2%;
    background: #1a3867;
    color: #fff;
    text-align: left;
`;

const Img = styled.img`
    background: #fff;
    max-width: 80px;
    margin-right: 15px;
`;


const MepsTable = (props) => (
    <Table>
        <thead>
            <Tr>
                <Th>Imię i nazwisko</Th>
                <Th>Partia</Th>
                <Th>Okręg wyborczy</Th>
                <Th>Stanowisko</Th>
                <Th>Punkty</Th>
                <Th>Edycja</Th>
            </Tr>
        </thead>
        <tbody>
            {props.meps.map((envoy) => (
                <Tr key={envoy.id}>
                    <TdImg>
                        <Img src={envoy.image} />
                        {envoy.name} {envoy.surname}
                    </TdImg>
                    <Td>{envoy.party}</Td>
                    <Td>{envoy.constituency}</Td>
                    <Td>{envoy.position}</Td>
                    <Td>{envoy.points}</Td>
                    <LastTd><Link to={'/edycja/' + envoy.id}><Button centered>Edytuj</Button></Link></LastTd>
                </Tr>
            ))}
        </tbody>
    </Table>
);

export default MepsTable;