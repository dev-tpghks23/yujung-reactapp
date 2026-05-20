import styled from 'styled-components';
import {
	flexStartRow,
	h4Bold,
	h7Bold,
	h8Regular,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.Section = styled.div`
	margin-top: ${({ $mt }) => $mt || '0'};
	margin-bottom: ${({ $mb }) => $mb || '0'};
`;

S.SectionTitle = styled.h2`
	${h4Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	gap: 8px;
`;

S.SectionTitleRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
`;

S.AiBadge = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 700;
	color: ${theme.PALETTE.primary.main};
`;

S.ActionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px 40px;
`;

S.ActionCard = styled.div`
	${flexStartRow}
	align-items: flex-start;
	gap: 12px;
	padding: 24px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 12px;
	background: ${theme.PALETTE.white};
`;

S.ActionDot = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: ${theme.PALETTE.third.main};
	flex-shrink: 0;
	margin-top: 4px;
`;

S.ActionContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

S.ActionTitle = styled.p`
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.ActionDesc = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
`;

export default S;