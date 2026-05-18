import styled from 'styled-components';

export const S = {};

S.ChartContainer = styled.div`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
