import styled from 'styled-components';
import { token } from '../token';

interface StyledButtonProps {
    theme?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
    padding: 10px;
    background-color: ${(props) =>
        props.theme === 'dark' ? `${token.white}` : `${token.gray1000}`};
    color: ${(props) =>
        props.theme === 'dark' ? `${token.gray1000}` : `${token.white}`};
`;
