import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import S from './styles/PerformanceResultStyle';

const W = 560, PAD_TOP = 52, CURVE_H = 120, PAD_BOT = 48;
const TOTAL_H = PAD_TOP + CURVE_H + PAD_BOT;

const ZONES = [
  { label: '미흡', x: 0,           w: W * 3 / 9, color: '#E0E0E0' },
  { label: '보통', x: W * 3 / 9,  w: W * 3 / 9, color: '#DFC8FA' },
  { label: '우수', x: W * 6 / 9,  w: W * 2 / 9, color: '#CE93FF' },
  { label: '탁월', x: W * 8 / 9,  w: W * 1 / 9, color: '#AB47FF' },
];

const buildCurvePoints = () => {
  const pts = [[0, PAD_TOP + CURVE_H]];
  for (let x = 0; x <= W; x += 2) {
    const z = (x / W) * 6 - 3;
    pts.push([x, PAD_TOP + CURVE_H - Math.exp(-0.5 * z * z) * (CURVE_H - 4)]);
  }
  pts.push([W, PAD_TOP + CURVE_H]);
  return pts;
};

const curvePoints = buildCurvePoints();
const polyStr = curvePoints.map(([x, y]) => `${x},${y}`).join(' ');
const lineStr = curvePoints.slice(1, -1).map(([x, y]) => `${x},${y}`).join(' ');

const BellCurveSVG = ({ percentile }) => {
  const markerX = (1 - percentile / 100) * W;
  const markerZ = (markerX / W) * 6 - 3;
  const markerCurveY = PAD_TOP + CURVE_H - Math.exp(-0.5 * markerZ * markerZ) * (CURVE_H - 4);
  const labelAnchor = markerX > W * 0.85 ? 'end' : markerX < W * 0.15 ? 'start' : 'middle';

  return (
    <svg viewBox={`0 0 ${W} ${TOTAL_H}`} width="100%" style={{ display: 'block' }}>
      <defs>
        {ZONES.map((z, i) => (
          <clipPath key={i} id={`zc-${i}`}>
            <rect x={z.x} y={0} width={z.w} height={TOTAL_H} />
          </clipPath>
        ))}
      </defs>

      {ZONES.map((z, i) => (
        <polygon key={i} points={polyStr} fill={z.color} clipPath={`url(#zc-${i})`} />
      ))}

      {[3 / 9, 6 / 9, 8 / 9].map((r, i) => (
        <line key={i} x1={r * W} y1={PAD_TOP} x2={r * W} y2={PAD_TOP + CURVE_H}
          stroke="white" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.8" />
      ))}

      <polyline points={lineStr} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />

      {ZONES.map((z, i) => (
        <text key={i} x={z.x + z.w / 2} y={PAD_TOP + CURVE_H + 20}
          textAnchor="middle" fontSize="13" fontWeight="700"
          fill={i === 3 ? '#AB47FF' : i === 2 ? '#9B59B6' : i === 1 ? '#A888CC' : '#999'}>
          {z.label}
        </text>
      ))}

      {[100, 75, 50, 25, 0].map((pct, i) => (
        <text key={i} x={(i / 4) * W} y={PAD_TOP + CURVE_H + 38}
          textAnchor={i === 0 ? 'start' : i === 4 ? 'end' : 'middle'}
          fontSize="10" fill="#BBBBBB">
          {pct}%
        </text>
      ))}
      <line x1={markerX} y1={markerCurveY - 12} x2={markerX} y2={markerCurveY - 42}
        stroke="#F53102" strokeWidth="1.5" />
      <polygon
        points={`${markerX - 3},${markerCurveY - 12 - 5} ${markerX + 3},${markerCurveY - 12 - 5} ${markerX},${markerCurveY - 12}`}
        fill="#F53102" />
      <text x={markerX} y={markerCurveY - 48} textAnchor={labelAnchor}
        fontSize="12" fontWeight="700" fill="#F53102">
        상위 {percentile}%
      </text>
    </svg>
  );
};

const PerformanceResult = () => {
  const { vision, analysis } = useOutletContext();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header>
        <S.PageTitle>TIME LINE</S.PageTitle>
        <S.PageSubtitle>목표에 도달하기까지 실패와 성장의 흐름을 한눈에 확인하세요.</S.PageSubtitle>
      </S.Header>

      <S.VisionCard>
        <S.VisionLabel>VISION</S.VisionLabel>
        <S.VisionTitle>{vision.title}</S.VisionTitle>
      </S.VisionCard>

      <S.RankTitle>
        <S.Nickname>{analysis.nickname}</S.Nickname> 님의 목표 달성률은 상위{' '}
        <S.Highlight>{analysis.percentile}%</S.Highlight> 에 해당합니다 !
      </S.RankTitle>
      <S.RankSubtitle>
        아주 탁월합니다. 목표를 위해 망설이고 달려왔군요. 그간 자신을 위해 오늘하루를 투자하는건 어떨까요 ?
      </S.RankSubtitle>

      <S.BellCurveBox>
        <BellCurveSVG percentile={analysis.percentile} />
      </S.BellCurveBox>

      <S.ChecklistSummary>
        이 비전을 달성하면서 총 <S.CountHighlight>{analysis.totalChecklists}</S.CountHighlight> 개의 체크리스트를 달성 했습니다
      </S.ChecklistSummary>
      <S.ChecklistCompare>
        <S.Nickname>{analysis.nickname}</S.Nickname> 님은 평균 이용자들에 비해{' '}
        <S.CountHighlight>{analysis.totalChecklists - analysis.avgUserChecklists}</S.CountHighlight>개 많은 체크리스트를 달성 했습니다.
      </S.ChecklistCompare>

      <S.StatsCard>
        <S.StatsSection>
          <S.StatsSectionTitle>🔔 최다 달성 체크리스트</S.StatsSectionTitle>
          <S.StatsLabel>Top 3</S.StatsLabel>
          {analysis.top3Checklists.map((item, i) => (
            <S.Top3Item key={i}>
              <S.Top3Bullet />
              <S.Top3Text>{item.text}</S.Top3Text>
              <S.Top3Count>{item.count}회</S.Top3Count>
            </S.Top3Item>
          ))}
        </S.StatsSection>

        <S.StatsDivider />

        <S.StatsSection>
          <S.StatsSectionTitle>평균 목표달성 기간</S.StatsSectionTitle>
          <S.StatItem>
            <S.StatBullet />
            <span>이용자들은 평균적으로 <S.StatHighlight>{analysis.avgDays}일</S.StatHighlight> 만에 목표를 달성 했습니다.</span>
          </S.StatItem>
        </S.StatsSection>

        <S.StatsDivider />

        <S.StatsSection>
          <S.StatsSectionTitle>AI 사용 여부</S.StatsSectionTitle>
          <S.StatItem>
            <S.StatBullet />
            <span>이용자들은 평균적으로 <S.StatHighlight>{analysis.aiUsageRate}%</S.StatHighlight> 가 직접 프로젝트를 작성 했습니다.</span>
          </S.StatItem>
        </S.StatsSection>

        <S.StatsDivider />

        <S.StatsSection>
          <S.StatsSectionTitle>프로젝트 개수</S.StatsSectionTitle>
          <S.StatItem>
            <S.StatBullet />
            <span>이용자들은 평균적으로 <S.StatHighlight>{analysis.projectCount}개</S.StatHighlight> 의 프로젝트를 작성 했습니다.</span>
          </S.StatItem>
        </S.StatsSection>
      </S.StatsCard>

      <S.BackButton onClick={() => navigate('/chronology')}>← 타임라인으로 돌아가기</S.BackButton>
    </S.Wrapper>
  );
};

export default PerformanceResult;
