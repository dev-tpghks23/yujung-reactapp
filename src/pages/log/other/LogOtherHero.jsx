import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './LogOtherHeroStyle';
import GlobeIcon from './otherLog_icon/internet_2282299.svg';
import ArrowIcon from './otherLog_icon/bitcoin-icons--arrow-up-filled.svg';

const LogOtherHero = () => {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.Inner>
                <S.TitleWrap>
                    <S.GlobeIcon src={GlobeIcon} alt="globe" />
                    <h1 className="hero-title">다른 사람의 경험을 만나보세요.</h1>
                </S.TitleWrap>
                <S.StartBtn onClick={() => navigate('/logs/new/step1')}>
                    <span className="btn-text">시작하기</span>
                    <S.ArrowIcon src={ArrowIcon} alt="arrow" />
                </S.StartBtn>
            </S.Inner>
        </S.Wrapper>
    );
};

export default LogOtherHero;