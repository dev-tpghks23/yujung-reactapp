import styled from 'styled-components';
import {
	flexBetweenRow,
	h3Bold,
	h7Regular,
	h8Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.PageWrapper = styled.div`
	min-height: 100vh;
	background-color: ${theme.PALETTE.white};
`;

S.Inner = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`;

S.PageHeader = styled.div`
	padding-top: 80px;
	padding-bottom: 28px;
	${flexBetweenRow}
	align-items: flex-end;
`;

S.HeaderLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

S.PageTitle = styled.h2`
	${h3Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 4px;
`;

S.PageSubtitle = styled.p`
	${h7Regular}
	color: ${theme.TEXT_COLOR.basic};
`;

S.BtnCreate = styled.button`
	${h8Bold}
	width: 120px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	color: ${theme.GRAYSCALE[10]};
	transition: all 0.15s ease;
	&:hover {
		border-color: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.third.main};
	}
	&:active {
		background: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.white};
		transform: scale(0.98);
	}
`;

S.CommunitySection = styled.div`
	background-color: ${theme.GRAYSCALE[1]};
	padding: 120px 0 80px;
`;

export default S;