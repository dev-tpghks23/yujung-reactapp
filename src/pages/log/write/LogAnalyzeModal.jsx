import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';
import closeIcon from './write_icon/close.svg';
import backIcon from './write_icon/back.svg';
import checkIcon from './write_icon/check.svg';
import styleWarm1Icon from './write_icon/style_warm_1.svg';
import styleWarm2Icon from './write_icon/style_warm_2.svg';
import styleObjectiveIcon from './write_icon/style_objective.svg';
import styleColdIcon from './write_icon/style_cold.svg';
import { S } from './LogAnalyzeModalStyles';

const LogAnalyzeModal = ({ onClose }) => {
  const navigate = useNavigate();

  const ANALYSIS_STYLES = [
    {
      id: "warm",
      icon: (
        <S.StyleWarmWrapper>
          <S.StyleWarm1Img src={styleWarm1Icon} alt="warm style" />
          <S.StyleWarm2Img src={styleWarm2Icon} alt="warm overlay" />
        </S.StyleWarmWrapper>
      ),
      title: "따뜻한 위로와 공감",
      desc: "지금은 자책보단 다독임이 필요해요.\n긍정적으로 부드럽게 분석과 방향성을 얻을 수 있습니다.",
      badge: "순한맛",
      badgeColor: theme.PALETTE.secondary.main,
      badgeBg: theme.PALETTE.secondary.light,
    },
    {
      id: "objective",
      icon: <S.StyleObjectiveImg src={styleObjectiveIcon} alt="objective style" />,
      title: "객관적인 원인 분석가",
      desc: "문제의 본질만을 파악해서 분석해요.\n논리적이고 명확한 분석과 방향성을 얻습니다.",
      badge: "약간 매운맛",
      badgeColor: theme.PALETTE.fifth.main,
      badgeBg: theme.PALETTE.fifth.light,
    },
    {
      id: "cold",
      icon: <S.StyleColdImg src={styleColdIcon} alt="cold style" />,
      title: "냉철한 팩트 폭격기",
      desc: "변명없이 한계를 직시해요.\n아프지만 냉철하게 문제점을 분석하고 방향성을 얻습니다.",
      badge: "매운맛",
      badgeColor: theme.PALETTE.fourth.main,
      badgeBg: theme.PALETTE.fourth.light,
    },
  ];

  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("사업/창업");
  const [selectedLogs, setSelectedLogs] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [progress, setProgress] = useState(0);

  const PAST_LOGS = [
    { id: 1, category: "사업/창업", title: "B 투자사 미팅 거절", date: "2024.03.15 작성" },
    { id: 2, category: "사업/창업", title: "A 투자사 미팅 거절", date: "2023.11.02 작성" },
    { id: 3, category: "사업/창업", title: "C 투자사 미팅 거절", date: "2023.11.02 작성" },
    { id: 4, category: "공부/취업", title: "정보처리기사 실기 불합격", date: "2023.09.10 작성" },
    { id: 5, category: "인간관계", title: "팀 프로젝트 갈등", date: "2023.07.01 작성" },
  ];

  const CATEGORIES = ["사업/창업", "공부/취업", "인간관계", "건강/루틴", "기타"];

  const filteredLogs = PAST_LOGS.filter(log => log.category === activeCategory);

  useEffect(() => {
    if (step === 3) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(4), 300);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        navigate('/logs/result/my/detail');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && step < 3) onClose();
  };

  const renderStep1 = () => (
    <>
      <S.CloseButtonWrapper>
        <S.CloseButton onClick={onClose}>
          <S.CloseIcon src={closeIcon} alt="close" />
        </S.CloseButton>
      </S.CloseButtonWrapper>

      <S.TitleSection>
        <S.ModalTitle>과거의 비슷한 실패 기록</S.ModalTitle>
        <S.ModalSub>선택하시면 더 깊은 패턴을 찾을 수 있어요.</S.ModalSub>
      </S.TitleSection>

      <S.SectionRow>
        <S.SectionLabel>함께 분석할까요?</S.SectionLabel>
        <S.SelectedCount>{selectedLogs.length > 0 ? `${selectedLogs.length}개 선택됨` : ''}</S.SelectedCount>
      </S.SectionRow>

      <S.CategoryTabs>
        {CATEGORIES.map(cat => (
          <S.CategoryTab
            key={cat}
            $active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </S.CategoryTab>
        ))}
      </S.CategoryTabs>

      <S.LogList>
        {filteredLogs.length === 0 ? (
          <S.EmptyList>이 카테고리에는 로그가 없습니다.</S.EmptyList>
        ) : filteredLogs.map(log => {
          const isSelected = selectedLogs.some(l => l.id === log.id);
          return (
            <S.LogItem
              key={log.id}
              $selected={isSelected}
              onClick={() => {
                setSelectedLogs(prev =>
                  prev.some(l => l.id === log.id)
                    ? prev.filter(l => l.id !== log.id)
                    : [...prev, log]
                );
              }}
            >
              <S.LogItemContent>
                <S.LogItemCategory>{log.category}</S.LogItemCategory>
                <S.LogItemTitle>{log.title}</S.LogItemTitle>
                <S.LogItemDate>{log.date}</S.LogItemDate>
              </S.LogItemContent>
              <S.LogRadio $selected={isSelected}>
                {isSelected && (
                  <S.CheckIconImg src={checkIcon} alt="check" />
                )}
              </S.LogRadio>
            </S.LogItem>
          )
        })}
      </S.LogList>

      <S.BottomSection>
        <S.PrimaryButton onClick={() => setStep(2)}>
          {selectedLogs.length > 0 ? `${selectedLogs.length}개의 로그와 함께 분석하기` : '선택 없이 분석하기'}
        </S.PrimaryButton>
        <S.SkipLink onClick={() => setStep(2)}>건너뛰고 이번 로그만 분석 →</S.SkipLink>
      </S.BottomSection>
    </>
  );

  const renderStep2 = () => (
    <>
      <S.HeaderNav>
        <S.BackButton onClick={() => setStep(1)}>
          <S.BackIcon src={backIcon} alt="back" />
        </S.BackButton>
        <S.CloseButton onClick={onClose}>
          <S.CloseIcon src={closeIcon} alt="close" />
        </S.CloseButton>
      </S.HeaderNav>

      <S.TitleSection>
        <S.ModalTitle>분석 스타일 설정</S.ModalTitle>
        <S.ModalSub>나에게 필요한 분석 스타일의 온도를 골라주세요.</S.ModalSub>
      </S.TitleSection>

      <S.StyleList>
        {ANALYSIS_STYLES.map(style => (
          <S.StyleCard
            key={style.id}
            $selected={selectedStyle === style.id}
            onClick={() => setSelectedStyle(style.id)}
          >
            <S.StyleIcon>{style.icon}</S.StyleIcon>
            <S.StyleContent>
              <S.StyleTitle>{style.title}</S.StyleTitle>
              <S.StyleDesc>{style.desc}</S.StyleDesc>
            </S.StyleContent>
            <S.StyleBadge $color={style.badgeColor} $bg={style.badgeBg}>
              {style.badge}
            </S.StyleBadge>
          </S.StyleCard>
        ))}
      </S.StyleList>

      <S.BottomSection>
        <S.PrimaryButton
          disabled={!selectedStyle}
          onClick={() => selectedStyle && setStep(3)}
        >
          선택한 스타일로 분석 시작
        </S.PrimaryButton>
      </S.BottomSection>
    </>
  );

  const renderStep3 = () => (
    <S.LoadingWrapper>
      <S.SpinnerRing />
      <S.LoadingTitle>
        입력하신 데이터를 기반으로<br />패턴을 분석하고 있어요
      </S.LoadingTitle>
      <S.LoadingSub>잠시만 기다려주세요...</S.LoadingSub>
      <S.ProgressBarWrapper>
        <S.ProgressBar style={{ transform: `scaleX(${progress / 100})` }} />
      </S.ProgressBarWrapper>
      <S.CancelButton onClick={() => setStep(2)}>분석 취소</S.CancelButton>
    </S.LoadingWrapper>
  );

  const renderStep4 = () => (
    <S.CompleteWrapper>
      <S.CompleteCircle>
        <S.CompleteCheck>✓</S.CompleteCheck>
      </S.CompleteCircle>
      <S.CompleteTitle>
        분석이 완료되어<br />정상 등록되었습니다.
      </S.CompleteTitle>
      <S.CompleteSub>결과 페이지로 이동합니다.</S.CompleteSub>
    </S.CompleteWrapper>
  );

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal $step={step}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </S.Modal>
    </S.Overlay>
  );
};

export default LogAnalyzeModal;
