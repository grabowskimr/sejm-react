import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Section from './Section';

const MenuList = styled.ul`
    display: flex;
    list-style: none;
    padding: 10px;
    margin: 0px;
`;

const MenuLink = styled(Link)`
    margin: 0px 10px;
    padding: 6px 20px;
    background: #46a546;
    color: #fff;
    border: none;
    border-radius: 3px;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover {
        background: #306e2f;
        color: #fff;
        text-decoration: none;
    };
    &:focus {
        color: #fff;
        text-decoration: none;
    }
`;

const HeaderContainer = () => (
    <Section>
        <MenuList>
            <li><MenuLink to="/">Home</MenuLink></li>
            <li><MenuLink to="/dodaj">Dodaj posła</MenuLink></li>
            <li><MenuLink to="/dodajKryterium">Dodaj Kryterium</MenuLink></li>
            <li><MenuLink to="/usunKryterium">Usuń Kryterium</MenuLink></li>
            <li><MenuLink to="/edytujKryterium">Edytuj Kryterium</MenuLink></li>
            <li><MenuLink to="/generator">Generuj linki do ankiety</MenuLink></li>
        </MenuList>
    </Section>
);

export default HeaderContainer;