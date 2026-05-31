import React, { useRef, useState } from 'react';
import InfoS from '../styles/InfoManagementStyles';

const LEGEND = [
  { key: 'external', color: '#2563EB', label: '외부요인 (환경/타인)' },
  { key: 'internal', color: '#8B5CF6', label: '내부요인(마인드/지식)' },
];

// SVG 도넛 치수
const CX = 90;
const CY = 90;
const R  = 68;
const SW = 22;
const CIRC = 2 * Math.PI * R;

// 호버 감지 범위 (스트로크 안쪽 ~ 바깥쪽)
const INNER_R = R - SW / 2;   // 57
const OUTER_R = R + SW / 2;   // 79

const ProfileChartCardComponent = ({ logs = [] }) => {
  const wrapperRef = useRef(null);
  const [hovered, setHovered]   = useState(null);
  const [tooltip, setTooltip]   = useState({ x: 0, y: 0 });

  const externalCount = logs.filter((l) => l.factorType === 'external').length;
  const internalCount = logs.filter((l) => l.factorType === 'internal').length;
  const total = externalCount + internalCount;

  const externalPct = total === 0 ? 0 : Math.round((externalCount / total) * 100);
  const internalPct = total === 0 ? 0 : 100 - externalPct;
  const centerPct   = Math.max(externalPct, internalPct);

  const typeLabel = total === 0
    ? ''
    : internalCount > externalCount
      ? '내부적으로 영향받는 타입'
      : '외부적으로 영향받는 타입';

  // 호버 감지: 마우스 각도로 외부/내부 구간 판별
  const externalDeg = (externalPct / 100) * 360;

  const handleMouseMove = (e) => {
    if (total === 0) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const mx   = e.clientX - rect.left - CX;
    const my   = e.clientY - rect.top  - CY;
    const dist = Math.sqrt(mx * mx + my * my);

    if (dist < INNER_R || dist > OUTER_R) { setHovered(null); return; }

    let angle = (Math.atan2(my, mx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;

    const seg = angle < externalDeg ? 'external' : 'internal';
    if (seg === 'external' && externalCount === 0) { setHovered(null); return; }
    if (seg === 'internal' && internalCount === 0) { setHovered(null); return; }

    setHovered(seg);
    setTooltip({ x: e.clientX - rect.left + 12, y: e.clientY - rect.top - 38 });
  };

  return (
    <InfoS.InfoCard>
      <InfoS.DonutChartArea>
        <InfoS.CardTitle>성장 성향 분석</InfoS.CardTitle>

        <InfoS.ChartWrapper
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHovered(null)}
        >
          <svg width="140" height="140" viewBox="0 0 180 180">
            <defs>
              {/* 전체 링에 적용되는 그라데이션 */}
              <linearGradient id="donutGrad" gradientUnits="userSpaceOnUse"
                x1="0" y1="0" x2="180" y2="180">
                <stop offset="0%"   stopColor="#2563EB" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            {/* 배경 링 (항상 회색) */}
            <circle
              cx={CX} cy={CY} r={R}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth={SW}
            />

            {/* 데이터 링 (그라데이션) */}
            {total > 0 && (
              <circle
                cx={CX} cy={CY} r={R}
                fill="none"
                stroke="url(#donutGrad)"
                strokeWidth={SW}
                strokeDasharray={CIRC}
                strokeDashoffset="0"
                transform={`rotate(-90 ${CX} ${CY})`}
              />
            )}
          </svg>

          <InfoS.ChartCenter>
            {total > 0 && (
              <>
                <strong>{centerPct}%</strong>
                <span>{typeLabel}</span>
              </>
            )}
          </InfoS.ChartCenter>

          {hovered && (
            <InfoS.Tooltip style={{ left: tooltip.x, top: tooltip.y }}>
              {hovered === 'external'
                ? `외부요인: ${externalPct}% (${externalCount}건)`
                : `내부요인: ${internalPct}% (${internalCount}건)`}
            </InfoS.Tooltip>
          )}
        </InfoS.ChartWrapper>

        {total === 0 && (
          <InfoS.ChartEmptyText>
            아직 분석된 페일로그가 없습니다.<br />첫 페일로그를 작성해 보세요!
          </InfoS.ChartEmptyText>
        )}

        <InfoS.ChartLegend>
          {LEGEND.map((item) => (
            <InfoS.LegendItem key={item.key} color={item.color}>
              <span />
              {item.label}
            </InfoS.LegendItem>
          ))}
        </InfoS.ChartLegend>
      </InfoS.DonutChartArea>
    </InfoS.InfoCard>
  );
};

export default ProfileChartCardComponent;
