import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext, useTheme } from '../themeProvider';
import { StyledButton } from './StyledButton';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { setTheme } = useTheme();

    return (
        <HeaderWrapper>
            <StyledButton
                onClick={() => {
                    theme === 'dark' ? setTheme('light') : setTheme('dark');
                }}
                theme={theme}
            >
                <>Current theme: {theme}</>
            </StyledButton>
        </HeaderWrapper>
    );
};

export const HeaderWrapper = styled.div`
    flex: 1 100%;
`;

export default Header;
