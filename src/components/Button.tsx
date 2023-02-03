import { StyledButton } from './StyledButton';
import { useTheme } from './ThemeProvider';

interface Props {
    onClick: () => void;
    children: React.ReactNode;
}

export function Button({ onClick, children }: Props) {
    const { theme, borderRadius } = useTheme();

    console.log(borderRadius);

    return (
        <StyledButton
            onClick={onClick}
            theme={theme}
            borderRadius={borderRadius}
        >
            {children}
        </StyledButton>
    );
}
