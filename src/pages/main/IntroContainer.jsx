import React from 'react';
import { useNavigate } from 'react-router-dom';
import repeatIcon from './intro_icon/repeat_238888.svg';
import washTimeIcon from './intro_icon/wash-time_103937.svg';
import arrowIcon from './intro_icon/arrow_90418.svg';
import fileIcon from './intro_icon/file_1324039.svg';
import barChartIcon from './intro_icon/bar-chart_347779.svg';
import teamworkIcon from './intro_icon/teamwork_484616.svg';
import crossOutIcon from './intro_icon/cross-out_2586312.svg';
import pieChartIcon from './intro_icon/pie-chart_744334.svg';
import shareIcon from './intro_icon/share_683175.svg';
import registrationIcon from './intro_icon/registration-mark_1203943.svg';
import heartIcon from './intro_icon/ph--heart-light.svg';
import viewIcon from './intro_icon/hugeicons--view.svg';
import avatar1 from './intro_profile/image 337.png';
import avatar2 from './intro_profile/image 309.png';
import avatar3 from './intro_profile/IMAGE.png';
import S from './IntroContainerStyle';

/* ──────────────────────────────────────────
   섹션 2 — 오른쪽 카드 3개
────────────────────────────────────────── */
const StatCard = ({ icon, $variant, stat, label }) => (
    <S.StatCard>
        <S.StatCardIcon $variant={$variant}>
            <img src={icon} alt={label} />
        </S.StatCardIcon>
        <S.StatCardStat $variant={$variant}>{stat}</S.StatCardStat>
        <S.StatCardLabel>{label}</S.StatCardLabel>
    </S.StatCard>
);

const STAT_CARDS = [
    {
        icon: repeatIcon,
        $variant: 'red',
        stat: '73%',
        label: '같은 유형의 실패를 2회 이상 경험',
    },
    {
        icon: washTimeIcon,
        $variant: 'blue',
        stat: '2주',
        label: '실패의 맥락을 기억하는 평균 시간',
    },
    {
        icon: arrowIcon,
        $variant: 'green',
        stat: '6배',
        label: '기록된 실패를 분석할 때 개선율',
    },
];

/* ──────────────────────────────────────────
   섹션 3 — 3가지 방법 카드
────────────────────────────────────────── */
const MethodCard = ({ icon, $variant, title, desc }) => (
    <S.MethodCard>
        <S.MethodCardIcon $variant={$variant}>
            <img src={icon} alt={title} />
        </S.MethodCardIcon>
        <S.MethodCardTitle>{title}</S.MethodCardTitle>
        <S.MethodCardDesc>{desc}</S.MethodCardDesc>
    </S.MethodCard>
);

const METHOD_CARDS = [
    {
        icon: fileIcon,
        $variant: 'left',
        title: '구조화된 실패 기록',
        desc: '감정이 아닌 선택 근거, 무시한 신호 등 당시 제약을 체계적으로 기록합니다.',
    },
    {
        icon: barChartIcon,
        $variant: 'center',
        title: '패턴 분석 대시보드',
        desc: '개인의 실패 패턴을 시각화하고, 반복되는 선택의 오류를 객관적으로 파악합니다.',
    },
    {
        icon: teamworkIcon,
        $variant: 'right',
        title: '타인의 실패로부터 학습',
        desc: '다양한 분야의 실패 사례를 읽고, 공감, 지식, 경험을 공유하세요.',
    },
];

/* ──────────────────────────────────────────
   섹션 4 — 타임라인 Step 카드
────────────────────────────────────────── */
const StepCard = ({ step, icon, name, desc, tags, side }) => {
    const isLeft = side === 'left';

    const cardTop = isLeft ? (
        <S.StepCardTop $side="left">
            <S.StepLabel $step={step}>Step {step}</S.StepLabel>
            <S.StepCardIcon $step={step}>
                <img src={icon} alt={`step${step}`} />
            </S.StepCardIcon>
        </S.StepCardTop>
    ) : (
        <S.StepCardTop $side="right">
            <S.StepCardIcon $step={step}>
                <img src={icon} alt={`step${step}`} />
            </S.StepCardIcon>
            <S.StepLabel $step={step}>Step {step}</S.StepLabel>
        </S.StepCardTop>
    );

    const card = (
        <S.StepCard>
            {cardTop}
            <S.StepCardName $side={side}>{name}</S.StepCardName>
            <S.StepCardDesc $side={side}>{desc}</S.StepCardDesc>
            <S.StepTags $side={side}>
                {tags.map((tag) => (
                    <S.StepTag key={tag} $step={step}>
                        {tag}
                    </S.StepTag>
                ))}
            </S.StepTags>
        </S.StepCard>
    );

    const dot = <S.StepDot $step={step}>{step}</S.StepDot>;

    return (
        <S.StepRow $side={side}>
            {isLeft ? (
                <>
                    {card}
                    {dot}
                </>
            ) : (
                <>
                    {dot}
                    {card}
                </>
            )}
        </S.StepRow>
    );
};

const STEP_CARDS = [
    {
        step: 1,
        icon: crossOutIcon,
        name: '기록',
        desc: '실패를 구조화된 템플릿으로 기록하세요.',
        tags: ['상황', '선택', '결과'],
        side: 'left',
    },
    {
        step: 2,
        icon: pieChartIcon,
        name: '분석',
        desc: '분석 리포트를 확인하세요.',
        tags: ['패턴', '키워드'],
        side: 'right',
    },
    {
        step: 3,
        icon: shareIcon,
        name: '공유',
        desc: '로그와 경험을 공유해보세요.',
        tags: ['커뮤니티', '다양한 로그'],
        side: 'left',
    },
    {
        step: 4,
        icon: registrationIcon,
        name: '개선',
        desc: '다음 도전에 인사이트를 적용하세요.',
        tags: ['액션플랜', '리마인드'],
        side: 'right',
    },
];

/* ──────────────────────────────────────────
   섹션 5 — 로그 카드
────────────────────────────────────────── */
const LogCard = ({ $variant, category, title, desc, nickname, avatar, views, likes }) => (
    <S.LogCard>
        <S.LogCategory $variant={$variant}>{category}</S.LogCategory>
        <S.LogCardTitle>{title}</S.LogCardTitle>
        <S.LogCardDesc>{desc}</S.LogCardDesc>
        <S.LogCardBottom>
            <S.LogProfile>
                <S.LogAvatarWrap>
                    <S.LogAvatar src={avatar} alt={nickname} />
                </S.LogAvatarWrap>
                <S.LogNickname>{nickname}</S.LogNickname>
            </S.LogProfile>
            <S.LogStats>
                <S.LogStat>
                    <img src={viewIcon} alt="views" width="16" height="16" />
                    {views}
                </S.LogStat>
                <S.LogStat>
                    <img src={heartIcon} alt="likes" width="16" height="16" />
                    {likes}
                </S.LogStat>
            </S.LogStats>
        </S.LogCardBottom>
    </S.LogCard>
);

const LOG_CARDS = [
    {
        $variant: 'blue',
        category: '공부/취업',
        title: '면접에서 반복된 질문에 답변을 못한 이유',
        desc: '면접에서 반복된 질문에 답변을 못한 이유',
        nickname: '취준탈출넘버원',
        avatar: avatar1,
        views: 45,
        likes: 35,
    },
    {
        $variant: 'orange',
        category: '사업/창업',
        title: '첫 사업 아이템을 3번 바꾼 이유',
        desc: '시장 조사 없이 시작했다가 피벗을 반복한 이야기',
        nickname: '창업도전왕',
        avatar: avatar2,
        views: 45,
        likes: 35,
    },
    {
        $variant: 'pink',
        category: '인간관계',
        title: '말을 언제나 생각하고 조심히 말하기',
        desc: '한 순간의 실수로 멀어져버린 우리 사이',
        nickname: '말조심연습',
        avatar: avatar3,
        views: 45,
        likes: 35,
    },
];

/* ──────────────────────────────────────────
   메인 컨테이너
────────────────────────────────────────── */
const IntroContainer = () => {
    const navigate = useNavigate();

    return (
        <S.Wrap>
            {/* 1번째 섹터 */}
            <S.Section1Wrapper>
                <div className="intro-section1">
                    <div className="intro-section1-text">
                        <h1 className="intro-section1-heading">
                            지나간 실패들이 모여
                        </h1>
                        <h1 className="intro-section1-heading">
                            <S.ColorGradient>성공의 한 패</S.ColorGradient>
                            가 됩니다.
                        </h1>
                        <p className="intro-section1-sub">실패를 외면하지 않고 기록할 때,</p>
                        <p className="intro-section1-sub">당신의 강력한 성장 데이터가 됩니다.</p>
                        <S.StartButton onClick={() => navigate('/join')}>
                            시작하기
                        </S.StartButton>
                    </div>

                    <S.Section1Scroll>
                        <S.ScrollMouse>
                            <S.ScrollDot />
                        </S.ScrollMouse>
                        <div className="intro-section1-scroll-arrows">
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M2 2L10 10L18 2" stroke="#cccccc" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M2 2L10 10L18 2" stroke="#cccccc" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" />
                            </svg>
                        </div>
                    </S.Section1Scroll>
                </div>
            </S.Section1Wrapper>

            {/* 2번째 섹터 */}
            <S.Section2Wrapper>
                <div className="intro-section2">
                    <S.Section2Left>
                        <S.Section2BadgeWrap>
                            <S.Section2Badge>실패 기록</S.Section2Badge>
                        </S.Section2BadgeWrap>
                        <h2 className="intro-section2-title">
                            같은 실수를 반복하는 당신,
                            <br />
                            맥락을 잊고 있지 않나요?
                        </h2>
                        <p className="intro-section2-sub">
                            사람들은 실패 후 후회하고 반성하지만, 시간이 지나면
                            <br />
                            판단 근거, 제약 사항, 무시했던 신호를 잊습니다.
                            <br />
                            결국 같은 패턴의 실수를 반복하게 됩니다.
                        </p>
                        <p className="intro-section2-sub intro-section2-sub-mt">
                            FailLog는 실패의 맥락을 구조화하여
                            <br />
                            기록하고, 패턴을 시각화하여 객관적인
                            <br />
                            자기 인식과 개선을 도와줍니다.
                        </p>
                    </S.Section2Left>

                    <S.Section2Right>
                        {STAT_CARDS.map((card) => (
                            <StatCard key={card.stat} {...card} />
                        ))}
                    </S.Section2Right>
                </div>
            </S.Section2Wrapper>

            {/* 3번째 섹터 */}
            <S.Section3Wrapper>
                <div className="intro-section3">
                    <div className="intro-section3-header">
                        <h2 className="intro-section3-title">
                            실패를 데이터로,
                            <br />
                            성장으로 연결하는 <S.ColorGradient>3가지 방법</S.ColorGradient>
                        </h2>
                    </div>

                    <S.Section3Cards>
                        {METHOD_CARDS.map((card) => (
                            <MethodCard key={card.title} {...card} />
                        ))}
                    </S.Section3Cards>
                </div>
            </S.Section3Wrapper>

            {/* 4번째 섹터 */}
            <S.Section4Wrapper>
                <div className="intro-section4">
                    <div className="intro-section4-header">
                        <S.Section4BadgeWrap>
                            <S.Section4Badge>사용 방법</S.Section4Badge>
                        </S.Section4BadgeWrap>
                        <h2 className="intro-section4-title">
                            4단계로 완성하는 <S.ColorGradient>실패분석</S.ColorGradient>
                        </h2>
                    </div>

                    <S.StepByStep>
                        <S.TimelineLine />
                        {STEP_CARDS.map((card) => (
                            <StepCard key={card.step} {...card} />
                        ))}
                    </S.StepByStep>
                </div>
            </S.Section4Wrapper>

            {/* 5번째 섹터 */}
            <S.Section5Wrapper>
                <div className="intro-section5">
                    <div className="intro-section5-header">
                        <h2 className="intro-section5-title">
                            혼자가 아닌,
                            <br />
                            <S.ColorGradient>함께 만드는 성장</S.ColorGradient>
                        </h2>
                        <p className="intro-section5-sub">다양한 분야의 실패 사례를 경험하세요.</p>
                    </div>

                    <S.Section5Badges>
                        <S.Section5Badge>
                            <span>다양한 로그</span>
                        </S.Section5Badge>
                        <S.Section5Badge>
                            <span>커뮤니티</span>
                        </S.Section5Badge>
                    </S.Section5Badges>

                    <S.Section5Cards>
                        {LOG_CARDS.map((card) => (
                            <LogCard key={card.category} {...card} />
                        ))}
                    </S.Section5Cards>

                    <S.StartButton onClick={() => navigate('/join')}>
                        시작하기
                    </S.StartButton>
                </div>
            </S.Section5Wrapper>

        </S.Wrap>
    );
};

export default IntroContainer;