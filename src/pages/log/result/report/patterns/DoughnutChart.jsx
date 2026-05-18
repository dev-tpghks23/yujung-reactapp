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
                {/* Background (Internal Factor) */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth={strokeWidth}
                />
                
                {/* Foreground (External Factor) */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="url(#blueGradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${dashArray} ${circumference}`}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="butt"
                />

                <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={theme.PALETTE.primary.main} />
                        <stop offset="100%" stopColor="#00C2FF" />
                    </linearGradient>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={theme.PALETTE.third.main} />
                        <stop offset="100%" stopColor="#7B39FD" />
                    </linearGradient>
                </defs>
            </svg>
            
            <S.CenterText>
                <S.Percentage color={theme.PALETTE.fourth.main}>{externalValue}%</S.Percentage>
                <S.Label>외부요인</S.Label>
            </S.CenterText>
        </S.ChartWrapper>
    );
};

export default DoughnutChart;
