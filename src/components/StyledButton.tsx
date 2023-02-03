import styled from 'styled-components';

import { token } from '../token';

interface StyledButtonProps {
    theme: string;
    borderRadius: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
    padding: 10px 20px;
    border-radius: ${(props) => `${props.borderRadius};`};
    border: 1px solid ${token.red1000};
    background: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
    color: ${(props) => (props.theme === 'light' ? 'red' : 'blue')};
    cursor: pointer;
`;
