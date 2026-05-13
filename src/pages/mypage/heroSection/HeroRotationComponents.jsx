import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './styles/HeroSectionStyles'; 

// HeroRotationComponent.jsx

const HeroRotationComponent = ({ mainContent, quickMenus }) => {
  const navigate = useNavigate();

  if (!mainContent || !quickMenus) return null;

  return (
    <S.HeroSectionContainer>
      <S.HeroGrid>
        <S.HeroBanner 
  $id={mainContent.id}       // ✅ ID를 넘겨서 스타일에서 개별 제어 가능하게 함
  $align={mainContent.align} 
  $bgColor={mainContent.bgColor}
  onClick={() => navigate(mainContent.path)}
>
  <div className="TextGroup">
   <h3>{mainContent.subTitle}</h3>
    <h2>{mainContent.title}</h2>
    <p>{mainContent.description}</p>
  </div>
  <S.MainGraphic $align={mainContent.align}>
     <img src={mainContent.img} alt="메인 배너" />
  </S.MainGraphic>
</S.HeroBanner>

        {/* 오른쪽 퀵 메뉴: map을 사용하여 동적으로 생성 */}
       <S.QuickMenuGroup>
  {quickMenus.map((menu) => {
    // 💡 ID에 맞는 컴포넌트를 동적으로 선택
    const CardComponent = 
      menu.id === "fail-logs" ? S.FailLogQuickCard :
      menu.id === "my-fail-log" ? S.MyLogCard :
      menu.id === "likes" ? S.LikesCard : S.GuestBookCard;

    return (
      <CardComponent 
        key={menu.id} 
        $align={menu.align} 
        onClick={() => navigate(menu.path)}
      >
        <div className="CardText">
          <h3>{menu.subTitle}</h3>
          <h2>{menu.title}</h2>
          <span>{menu.description}</span>
        </div>
        <S.CardIcon $align={menu.align}>
          <img src={menu.img} alt={menu.title} />
        </S.CardIcon>
      </CardComponent>
    );
  })}
</S.QuickMenuGroup>
      </S.HeroGrid>
    </S.HeroSectionContainer>
  );
};
export default HeroRotationComponent;