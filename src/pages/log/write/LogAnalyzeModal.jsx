import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';
import theme from '../../../styles/theme';
import closeIcon from './write_icon/close.svg';
import backIcon from './write_icon/back.svg';
import checkIcon from './write_icon/check.svg';
import styleWarm1Icon from './write_icon/style_warm_1.svg';
import styleWarm2Icon from './write_icon/style_warm_2.svg';
import styleObjectiveIcon from './write_icon/style_objective.svg';
import styleColdIcon from './write_icon/style_cold.svg';
import { S } from './LogAnalyzeModalStyles';

const LogAnalyzeModal = ({ onClose, logContent, draft }) => {
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
  const [activeCategory, setActiveCategory] = useState(draft?.categoryName || "공부/취업");
  const [selectedLogs, setSelectedLogs] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [progress, setProgress] = useState(0);
  const [newLogId, setNewLogId] = useState(null);

  const [pastLogs, setPastLogs] = useState([]);

  useEffect(() => {
    const fetchPastLogs = async () => {
      try {
        const res = await axiosInstance.get('/api/logs/my-list');
        if (res.data?.success) {
          const mappedLogs = res.data.data.map(log => ({
            id: log.id,
            category: log.categoryName,
            title: log.logTitle,
            date: log.logCreatedAt + ' 작성'
          }));
          setPastLogs(mappedLogs);
        }
      } catch (err) {
        console.error("과거 로그 조회 실패:", err);
      }
    };
    fetchPastLogs();
  }, []);

  const CATEGORIES = ["공부/취업", "사업/창업", "인간관계", "건강/루틴", "기타"];

  const filteredLogs = pastLogs.filter(log => log.category === activeCategory);

  useEffect(() => {
    if (step === 3) {
      setProgress(0);

      // 백엔드(Spring)에 로그 분석 및 저장 요청
      const saveLog = async () => {
        if (draft) {
          try {
            const payload = {
              title: draft.logTitle,
              vision: draft.visionTitle,
              categoryId: draft.categoryId,
              category: draft.categoryName,
              logThumbnailUrl: draft.logThumbnailUrl,
              content: logContent || draft.logContent,
              style: selectedStyle,
              pastLogs: selectedLogs.map(l => l.title) // 예시로 과거 로그 제목만 전송
            };
            console.log("===== 분석 요청 payload =====", JSON.stringify(payload, null, 2));
            const res = await axiosInstance.post('/api/logs/analyze', payload);
            console.log("===== 분석 응답 =====", res.data);
            if (res.data?.data) {
                setNewLogId(res.data.data);
                setProgress(100);
                setTimeout(() => setStep(4), 300);
            }
            sessionStorage.removeItem('logDraft'); // 저장 성공 시 임시 데이터 삭제
          } catch (err) {
            console.error("로그 저장 실패:", err);
            console.error("에러 응답 데이터:", err.response?.data);
            console.error("에러 상태 코드:", err.response?.status);
            alert("서버 연결에 실패했습니다. (AI 분석 서버가 켜져있는지 확인해주세요)");
            setStep(2); // 무한 로딩 방지 및 이전 단계로 되돌림
          }
        }
      };
      saveLog();

      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 2;
        });
      }, 150); // 약 7초 동안 90% 도달, 이후 API 완료 시 100%
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        if (newLogId) {
            navigate(`/logs/result/${newLogId}/detail`);
        } else {
            alert("로그 저장에 실패했습니다. 다시 시도해주세요.");
            onClose();
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate, newLogId, onClose]);

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
        {selectedLogs.length > 0 && (
          <S.SkipLink onClick={() => {
            setSelectedLogs([]); // Clear selections when skipping
            setStep(2);
          }}>건너뛰고 이번 로그만 분석 →</S.SkipLink>
        )}
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
      <S.LoadingSub>
        {progress < 30 && "AI 모델에 데이터를 전송하고 있습니다..."}
        {progress >= 30 && progress < 60 && "로그의 문맥을 파악하고 과거 패턴과 비교 중입니다..."}
        {progress >= 60 && progress < 85 && "실패 요인과 개선 액션 플랜을 도출하고 있습니다..."}
        {progress >= 85 && "거의 다 완료되었습니다! (AI 분석은 약 10~15초 소요됩니다)"}
      </S.LoadingSub>
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
