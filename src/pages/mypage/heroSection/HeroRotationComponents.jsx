import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './styles/HeroSectionStyles';

const resolveMenuPath = (path, userId) => {
  if (!userId) return path;
  if (path.startsWith('/my-page/')) return path.replace('/my-page/', `/user/${userId}/`);
  return path;
};

const HeroRotationComponent = ({ mainContent, quickMenus, isPageOwner = true, userId = null }) => {
  const navigate = useNavigate();

  if (!mainContent || !quickMenus) return null;

  const mainPath = resolveMenuPath(mainContent.path, userId);

  return (
    <S.HeroSectionContainer>
      <S.HeroGrid>
        <S.HeroBanner
          $id={mainContent.id}
          $align={mainContent.align}
          $bgColor={mainContent.bgColor}
          onClick={() => navigate(mainPath)}
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

        <S.QuickMenuGroup>
          {quickMenus.map((menu) => {
            const isDisabled = !isPageOwner && menu.id === 'likes';
            const resolvedPath = resolveMenuPath(menu.path, userId);
            const CardComponent =
              menu.id === "fail-logs" ? S.FailLogQuickCard :
              menu.id === "my-fail-log" ? S.MyLogCard :
              menu.id === "likes" ? S.LikesCard : S.GuestBookCard;

            return (
              <CardComponent
                key={menu.id}
                $align={menu.align}
                $disabled={isDisabled}
                onClick={() => !isDisabled && navigate(resolvedPath)}
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
