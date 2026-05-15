import React from 'react';
import S from '../styles/MyFailLogStyles';

const FeaturedLogComponent = () => {
  return (
    <>
      <S.SectionHeader>
        <h2>나의 <span>페일로그</span></h2>
      </S.SectionHeader>

      <S.FeaturedContainer>
        {/* 리스트 영역 */}
        <S.FeaturedListArea>
          <div className="TitleBox">
            <h3>당신의 가장 빛났던 실패 이야기</h3>
            <p>User님의 페일 로그 및 게시글 중<br/>제일 관심이 많았던 게시글이 표시됩니다.</p>
          </div>

          {[1, 2, 3].map((item, idx) => (
            <S.FeaturedItem key={idx}>
              <h4>{idx === 0 ? "펙수클루의 성공 엔진: 실행의 오차를 줄이고 성장을 앞당기는 월별피드백" : 
                   idx === 1 ? "기획자와 디자이너의 '동상이몽'을 끝내다. 비개발자 디자이너의 AI 자동화 플랫폼 구축기" : 
                   "문제의식에서 시작된 자기 개발"}</h4>
              <div className="Meta">
                <div className="User">
                  <div style={{width:'20px', height:'20px', background:'#6366f1', borderRadius:'50%'}} />
                  필기마스터
                </div>
                <div className="Stats">
                  <span>👁️ 45</span>
                  <span>❤️ 35</span>
                </div>
              </div>
            </S.FeaturedItem>
          ))}
        </S.FeaturedListArea>

        {/* 이미지 영역 */}
        <S.FeaturedMainImage>
          <img 
            className="MainImg" 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="featured" 
          />
          <div className="BlackOverlay">
            <p>“공부를 거듭할수록 기존 학습법의 한계가 분명해졌고, 그 순간 ‘더 나은 방법을 찾아야 한다’는 문제의식이 생겼습니다”</p>
            <div className="AuthorInfo">
              <div style={{width:'18px', height:'18px', background:'#fff', borderRadius:'50%'}} />
              필기마스터
            </div>
          </div>
        </S.FeaturedMainImage>
      </S.FeaturedContainer>
    </>
  );
};

export default FeaturedLogComponent;