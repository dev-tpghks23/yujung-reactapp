import React, { useState, useEffect } from 'react';
import S from './styles/PerformanceResultStyle';
import BellCurveSVG from './BellCurveSVG';

const PerformanceResultComponent = ({ vision, analysis, onBack }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (analysis.aiFeedback) {
      setProgress(100);
      return;
    }

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        const remaining = 90 - prev;
        if (remaining <= 0.1) return prev;
        return prev + remaining * 0.04;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [analysis.aiFeedback]);

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

      <S.BellCurveBox>
        <BellCurveSVG percentile={analysis.percentile} />
      </S.BellCurveBox>

      <S.ChecklistSummary>
        이 비전을 달성하면서 총 <S.CountHighlight>{analysis.totalChecklists}</S.CountHighlight> 개의 체크리스트를 달성 했습니다
      </S.ChecklistSummary>
      <S.ChecklistCompare>
        {(() => {
          const diff = analysis.totalChecklists - analysis.avgUserChecklists;
          return diff >= 0
            ? <><S.Nickname>{analysis.nickname}</S.Nickname> 님은 평균 이용자들에 비해 <S.CountHighlight>{diff}</S.CountHighlight>개 많은 체크리스트를 달성 했습니다.</>
            : <><S.Nickname>{analysis.nickname}</S.Nickname> 님은 평균 이용자들에 비해 <S.CountHighlight>{Math.abs(diff)}</S.CountHighlight>개 적은 체크리스트를 달성 했습니다.</>;
        })()}
      </S.ChecklistCompare>

      <S.AiCard>
        <S.AiCardHeader>
          <S.AiCardIcon>🤖</S.AiCardIcon>
          <S.AiCardTitle>AI 코치의 한마디</S.AiCardTitle>
        </S.AiCardHeader>
        {analysis.aiFeedback
          ? <S.AiCardText>{analysis.aiFeedback}</S.AiCardText>
          : (
            <>
              <S.AiCardSkeleton />
              <S.AiProgressBarWrap>
                <S.AiProgressBar $percent={progress} />
              </S.AiProgressBarWrap>
              <S.AiCardLoading>AI코치가 피드백문서를 작성중입니다. {Math.floor(progress)}%</S.AiCardLoading>
            </>
          )
        }
      </S.AiCard>

      {analysis.aiFeedback && <S.StatsCard>
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
          <S.StatsSectionTitle>프로젝트 개수</S.StatsSectionTitle>
          <S.StatItem>
            <S.StatBullet />
            <span>이용자들은 평균적으로 <S.StatHighlight>{analysis.projectCount}개</S.StatHighlight> 의 프로젝트를 작성 했습니다.</span>
          </S.StatItem>
        </S.StatsSection>
      </S.StatsCard>}

      <S.BackButton onClick={onBack}>← 타임라인으로 돌아가기</S.BackButton>
    </S.Wrapper>
  );
};

export default PerformanceResultComponent;
