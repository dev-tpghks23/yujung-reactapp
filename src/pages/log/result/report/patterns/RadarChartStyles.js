import styled, { keyframes } from 'styled-components';

export const S = {};

const grow = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    60% {
        transform: scale(1.05);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

S.ChartContainer = styled.div`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    display: flex;
    justify-content: center;
    align-items: center;

    .data-polygon {
        transform-origin: center;
        animation: ${grow} 8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
`;
