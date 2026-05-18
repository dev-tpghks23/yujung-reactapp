import React from 'react';
import S from './styles/ChronologyAnalysisResultStyle';

const STANINE = [
  { stanine: 1, percent: 4,  percentile: 4   },
  { stanine: 2, percent: 7,  percentile: 11  },
  { stanine: 3, percent: 12, percentile: 23  },
  { stanine: 4, percent: 17, percentile: 40  },
  { stanine: 5, percent: 20, percentile: 60  },
  { stanine: 6, percent: 17, percentile: 77  },
  { stanine: 7, percent: 12, percentile: 89  },
  { stanine: 8, percent: 7,  percentile: 96  },
  { stanine: 9, percent: 4,  percentile: 100 },
];

const BellCurvePath = () => {
  const width = 540;
  const height = 120;
  const points = [];
  for (let x = 0; x <= width; x += 2) {
    const z = ((x / width) * 6) - 3;
    const y = Math.exp(-0.5 * z * z);
    points.push(`${x},${height - y * height * 0.9}`);
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
      <polyline points={points.join(' ')} fill="none" stroke="#333" strokeWidth="2" />
      {[72, 144, 216, 288, 360, 432, 504].map((x, i) => (
        <line key={i} x1={x} y1={0} x2={x} y2={height} stroke="#888" strokeWidth="1" strokeDasharray="3,3" />
      ))}
    </svg>
  );
};

const ChronologyAnalysisResult = ({ vision, analysis, onBack }) => {
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
        <BellCurvePath />
        <S.StanineTable>
          <tbody>
            <S.StanineRow>
              {STANINE.map((s) => (
                <S.StanineCell key={s.stanine}>{s.percent}%</S.StanineCell>
              ))}
            </S.StanineRow>
            <S.StanineRow $label>
              <S.StanineHeader colSpan={9}>Stanine</S.StanineHeader>
            </S.StanineRow>
            <S.StanineRow>
              {STANINE.map((s) => (
                <S.StanineCell key={s.stanine} $bold>{s.stanine}</S.StanineCell>
              ))}
            </S.StanineRow>
            <S.StanineRow $label>
              <S.StanineHeader colSpan={9}>Percentile</S.StanineHeader>
            </S.StanineRow>
            <S.StanineRow>
              {STANINE.map((s) => (
                <S.StanineCell key={s.stanine}>{s.percentile}</S.StanineCell>
              ))}
            </S.StanineRow>
          </tbody>
        </S.StanineTable>
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

      <S.BackButton onClick={onBack}>← 타임라인으로 돌아가기</S.BackButton>
    </S.Wrapper>
  );
};

export default ChronologyAnalysisResult;
