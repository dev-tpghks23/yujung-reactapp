import React from 'react';
import { useTheme } from 'styled-components';
import { S } from './DoughnutChartStyles';

/**
 * DoughnutChart Component
 * @param {number} externalValue - Percentage of external factor (0-100)
 * @param {number} internalValue - Percentage of internal factor (0-100)
 * @param {number} size - Size of the chart in pixels
 */
const DoughnutChart = ({ externalValue = 70, internalValue = 30, size = 200 }) => {
    const theme = useTheme();
    const strokeWidth = 35;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    
    // Calculate the stroke-dasharray for the external value
    const dashArray = (externalValue / 100) * circumference;
    const dashOffset = 0; // Starting from top (though SVG circles start from right, we rotate it)

    return (
        <S.ChartWrapper size={size}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
                {/* Single Seamless Ring (100%) */}
                <S.AnimatedCircle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="url(#seamlessGradient)"
                    strokeWidth={strokeWidth}
                    $dashArray={circumference}
                    $circumference={circumference}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                />

                <defs>
                    {/* Seamless Purple to Blue Gradient (Highly Distinct Colors) */}
                    <linearGradient id="seamlessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D500F9" />     {/* Neon Purple */}
                        <stop offset="100%" stopColor="#00B0FF" />   {/* Neon Blue */}
                    </linearGradient>
                </defs>
            </svg>
            
            <S.CenterText>
                <S.Percentage color={internalValue > externalValue ? theme.PALETTE.third.main : theme.PALETTE.primary.main}>
                    {Math.max(externalValue, internalValue)}%
                </S.Percentage>
                <S.Label>
                    {internalValue > externalValue ? '내부요인' : '외부요인'}
                </S.Label>
            </S.CenterText>
        </S.ChartWrapper>
    );
};

export default DoughnutChart;
