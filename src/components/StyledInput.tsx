import styled from 'styled-components';
import { token } from '../token';

interface InputProps {}

export const StyledInput = styled.input<InputProps>`
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid ${token.gray1000};
    background: ${token.gray800};
    color: ${token.white};

    &::placeholder {
        color: ${token.gray400};
    }
`;
