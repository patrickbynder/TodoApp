import React, { useState } from 'react';

interface ThemeValues {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeContext = React.createContext({} as ThemeValues);

export const useTheme = () => React.useContext(ThemeContext);

const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>('dark');

    return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};

export default ThemeProvider;
