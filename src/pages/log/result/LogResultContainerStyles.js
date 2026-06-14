import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const S = {};

S.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
  min-height: 100vh;
`;

S.Header = styled.div`
  text-align: left;
  width: 1298px;
  margin-bottom: 100px;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.SubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentWrapper = styled.div`
  width: 1320px;
`;

S.TabBar = styled.div`
  display: flex;
  gap: 24px;
  width: 1320px;
  margin: 0 auto;
  padding-left: 101px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

S.Tab = styled(NavLink)`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.PALETTE.third.main};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px 12px 0 0;
  transition: all 0.2s;
  background: ${({ theme }) => theme.PALETTE.white};
  position: relative;
  top: 1px;
  z-index: 5;

  &.active {
    color: ${({ theme }) => theme.PALETTE.white};
    background-color: ${({ theme }) => theme.PALETTE.third.main};
    border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    border-bottom: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    z-index: 10;
  }

  &:hover:not(.active) {
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    background-color: ${({ theme }) => theme.GRAYSCALE[1]};
  }
`;

S.CardWrapper = styled.div`
  position: relative;
  width: 1320px;
  padding-right: 22px;
  z-index: 1;
`;

S.PurpleShadow = styled.div`
  position: absolute;
  top: 0;
  left: 22px;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px;
  z-index: 0;
`;

S.Card = styled.div`
  background: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px;
  padding: 83px 80px 80px;
  position: relative;
  z-index: 1;
  width: 1298px;
  box-sizing: border-box;
  min-height: 800px;
`;

S.CarouselSection = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #F8F9FA;
  padding: 60px 0;
`;

S.CarouselTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 16px;
`;

S.CarouselSubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
  margin-bottom: 48px;
`;

S.CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1440px;
  position: relative;
`;

S.SliderWindow = styled.div`
  width: 100%;
  max-width: 1320px;
  overflow: hidden;
  padding: 10px 0;
`;

S.PageWrapper = styled.div`
  display: flex;
  width: ${({ $totalPages }) => 100 / $totalPages}%;
  gap: 24px;
  flex-shrink: 0;
`;

S.CardList = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

S.RelatedCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-radius: 16px;
  padding: 32px 32px;
  width: calc((100% - 48px) / 3);
  height: 264px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    border-color: ${({ theme }) => theme.PALETTE.third.main};
  }
`;

S.RelatedBadge = styled.span`
  background: ${({ theme }) => theme.PALETTE.secondary.light};
  color: ${({ theme }) => theme.PALETTE.secondary.main};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 16px;
`;

S.RelatedDate = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  position: absolute;
  right: 32px;
  top: 36px;
`;

S.RelatedTitle = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 8px;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

S.RelatedSub = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 16px;
  line-height: 1.5;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

S.RelatedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.AvatarWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, ${({ theme }) => theme.PALETTE.primary.main}, ${({ theme }) => theme.PALETTE.third.main});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 8px;
`;

S.RelatedAuthor = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  padding: 4px 8px;
  margin-left: -8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover span {
    text-decoration: underline;
  }
`;

S.RelatedStats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
`;

S.StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

S.NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${({ theme }) => theme.GRAYSCALE[4]};
  transition: all 0.2s;
  padding: 20px;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.GRAYSCALE[8]};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

S.BottomActionRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 1298px;
`;

S.ListButton = styled.button`
  padding: 16px 48px;
  background-color: ${({ theme }) => theme.PALETTE.white};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);

  &:hover {
    background-color: ${({ theme }) => theme.GRAYSCALE[1]};
    border-color: ${({ theme }) => theme.GRAYSCALE[6]};
    transform: translateY(-2px);
  }
`;

S.ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

S.ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.PALETTE.white};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

S.Nickname = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

