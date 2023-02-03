import React, { useState } from 'react';

interface ThemeValues {
    theme: string;
    borderRadius: string;
    setTheme: (newTheme: string) => void;
    newBorderRadius: (radius: number) => void;
}

export const ThemeContext = React.createContext({} as ThemeValues);

export const useTheme = () => React.useContext(ThemeContext);

const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>('dark');
    const [borderRadius, setBorderRadius] = useState<string>('8px');

    const newBorderRadius = (borderRadius: number) => {
        setBorderRadius(`${borderRadius}px`);
    };

    return (
        <Provider value={{ theme, setTheme, borderRadius, newBorderRadius }}>
            {children}
        </Provider>
    );
};

export default ThemeProvider;
