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
