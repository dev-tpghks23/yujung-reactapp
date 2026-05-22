import styled from 'styled-components';

export const S = {};

S.ChartWrapper = styled.div`
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.AnimatedCircle = styled.circle`
    stroke-dasharray: ${({ $dashArray, $circumference }) => `${$dashArray} ${$circumference}`};
    animation: fillChart 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;

    @keyframes fillChart {
        0% {
            stroke-dasharray: 0 ${({ $circumference }) => $circumference};
        }
        100% {
            stroke-dasharray: ${({ $dashArray }) => $dashArray} ${({ $circumference }) => $circumference};
        }
    }
`;

S.CenterText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

S.Percentage = styled.div`
    font-size: 28px;
    font-weight: 800;
    color: ${({ color }) => color};
    line-height: 1;
`;

S.Label = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-top: 4px;
`;
