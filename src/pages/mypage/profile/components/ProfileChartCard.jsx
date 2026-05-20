import React, { useRef, useState } from 'react';
import InfoS from '../styles/InfoManagementStyles';

const COLORS = {
  external: '#2563EB',
  internal: '#8B5CF6',
  empty:    '#E5E7EB',
};

const LEGEND = [
  { key: 'external', color: COLORS.external, label: '외부요인 (환경/타인)' },
  { key: 'internal', color: COLORS.internal, label: '내부요인(마인드/지식)' },
];

// 링의 외반경(90) · 내반경(58) — hover 영역 계산용
const OUTER_R = 90;
const INNER_R = 58;

/**
 * @param {Array} logs - factorType: 'external' | 'internal' 필드를 가진 페일로그 배열
 */
const ProfileChartCard = ({ logs = [] }) => {
  const wrapperRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  // ── 1. 집계 ───────────────────────────────────────────────
  const externalCount = logs.filter((l) => l.factorType === 'external').length;
  const internalCount = logs.filter((l) => l.factorType === 'internal').length;
  const total = externalCount + internalCount;

  // ── 2. 비율 & 타입 문구 ────────────────────────────────────
  const externalPct = total === 0 ? 0 : Math.round((externalCount / total) * 100);
  const internalPct = total === 0 ? 0 : 100 - externalPct;

  const typeLabel = total === 0
    ? ''
    : internalCount > externalCount
      ? '내부적으로 영향받는 타입'
      : '외부적으로 영향받는 타입';

  // ── 3. conic-gradient 문자열 ───────────────────────────────
  const externalDeg = (externalPct / 100) * 360;

  const gradient = total === 0
    ? COLORS.empty
    : externalPct === 100
      ? COLORS.external
      : internalPct === 100
        ? COLORS.internal
        : `conic-gradient(${COLORS.external} 0deg ${externalDeg}deg, ${COLORS.internal} ${externalDeg}deg 360deg)`;

  // ── 4. 마우스 각도 기반 hover 감지 ────────────────────────
  const handleMouseMove = (e) => {
    if (total === 0) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left - OUTER_R;
    const my = e.clientY - rect.top  - OUTER_R;
    const dist = Math.sqrt(mx * mx + my * my);

    if (dist < INNER_R || dist > OUTER_R) {
      setHovered(null);
      return;
    }

    // 12시 방향 기준 시계방향 각도
    let angle = (Math.atan2(my, mx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;

    const seg = angle < externalDeg ? 'external' : 'internal';
    if (seg === 'external' && externalCount === 0) { setHovered(null); return; }
    if (seg === 'internal' && internalCount === 0) { setHovered(null); return; }

    setHovered(seg);
    setTooltip({ x: e.clientX - rect.left + 12, y: e.clientY - rect.top - 38 });
  };

  // ── 5. 중앙 표시값 (hover와 무관하게 항상 지배적 요인의 비율 고정) ──
  const centerPct = Math.max(externalPct, internalPct);

  return (
    <InfoS.InfoCard>
      <InfoS.DonutChartArea>
        <InfoS.CardTitle>성장 성향 분석</InfoS.CardTitle>

        {/* ── 도넛 차트 ── */}
        <InfoS.ChartWrapper
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHovered(null)}
        >
          <InfoS.DonutRing $gradient={gradient}>
            <InfoS.ChartCenter>
              {total > 0 && (
                <>
                  <strong>{centerPct}%</strong>
                  <span>{typeLabel}</span>
                </>
              )}
            </InfoS.ChartCenter>
          </InfoS.DonutRing>

          {/* 툴팁 */}
          {hovered && (
            <InfoS.Tooltip style={{ left: tooltip.x, top: tooltip.y }}>
              {hovered === 'external'
                ? `외부요인: ${externalPct}% (${externalCount}건)`
                : `내부요인: ${internalPct}% (${internalCount}건)`}
            </InfoS.Tooltip>
          )}
        </InfoS.ChartWrapper>

        {/* 빈 상태 안내 */}
        {total === 0 && (
          <InfoS.ChartEmptyText>
            아직 분석된 페일로그가 없습니다.<br />첫 페일로그를 작성해 보세요!
          </InfoS.ChartEmptyText>
        )}

        {/* 범례 */}
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

export default ProfileChartCard;
