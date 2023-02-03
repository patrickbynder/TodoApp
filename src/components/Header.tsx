import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

interface Props {
    toggleTheme: () => void;
}

const Header = ({ toggleTheme }: Props) => {
    return (
        <HeaderWrapper>
            <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
        </HeaderWrapper>
    );
};

export const HeaderWrapper = styled.div`
    flex: 1 100%;
`;

export default Header;
