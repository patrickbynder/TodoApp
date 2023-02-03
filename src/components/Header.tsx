import { useContext } from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import { useTheme } from './ThemeProvider';

const Header = () => {
    // const { theme } = useContext(ThemeContext);
    const { theme, setTheme, borderRadius, newBorderRadius } = useTheme();

    return (
        <HeaderWrapper>
            <Button
                onClick={() => {
                    newBorderRadius(100);
                }}
            >
                Change border Radius
            </Button>

            <Button
                onClick={() => {
                    theme === 'dark' ? setTheme('light') : setTheme('dark');
                }}
            >
                <>Current theme: {theme}</>
            </Button>
        </HeaderWrapper>
    );
};

export const HeaderWrapper = styled.div`
    flex: 1 100%;
`;

export default Header;
