import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../components/style";
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
    background: ${theme.GRADIENT.blue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

S.EmptySubText = styled.p`
  ${sizeCSS['h4Regular']}
  color: ${colorCSS['faillog_gray10']};
  margin-bottom: 40px;
  line-height: 1.6;
`;

S.StartButton = styled.button`
  background: ${theme.GRADIENT.blue};
  color: white;
  padding: 12px 40px;
  border-radius: 8px;
  ${sizeCSS['h8-bold']}
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

export default S;