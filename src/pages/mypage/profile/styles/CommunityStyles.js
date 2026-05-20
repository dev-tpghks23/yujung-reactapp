import styled from "styled-components";
import { sizeCSS, colorCSS, gradientText } from "../../../../components/style";
import theme from "../../../../styles/theme";

const S = {};

S.CommunitySection = styled.div` padding: 0 20px 50px; border-top: 1px solid #f5f5f5; margin-top: 40px; `;

S.PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

S.CardWrapper = styled.div`
  border: 1px solid ${props => props.isSelected ? '#8b5cf6' : '#eee'};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: all 0.2s ease;
  &:hover { transform: translateY(-4px); }
`;

S.EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`;

S.EmptyTitle = styled.h3`
  ${sizeCSS['h3Bold']}
  color: ${colorCSS['faillog-black']};
  margin-bottom: 20px;
  line-height: 1.5;
  strong, span {
    ${gradientText}
  }
`;

S.EmptySubText = styled.p`
  ${sizeCSS['h4Regular']}
  color: ${colorCSS['faillog_gray10']};
  margin-bottom: 40px;
  line-height: 1.6;
`;

S.StartButton = styled.button`
  padding: 12px 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #027df0, #ab47ff);
  background-size: 200% 200%;
  background-position: 0% 50%;
  transition: background-position 0.6s ease;
  color: white;
  ${sizeCSS['h8-bold']}
  border: none;
  cursor: pointer;
  box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

  &:hover { background-position: 100% 50%; }
`;

export default S;