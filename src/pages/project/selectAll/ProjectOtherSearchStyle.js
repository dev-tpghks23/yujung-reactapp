import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenter,
	h4Bold,
	h8Regular,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.SearchRow = styled.div`
	${flexBetweenRow}
	margin-bottom: 100px;
`;

S.CommunityTitle = styled.h3`
	${h4Bold}
	color: ${theme.PALETTE.black};
	line-height: 1.4;
`;

S.SearchBoxWrap = styled.div`
	width: 536px;
	height: 60px;
	border-radius: 15px;
	padding: 2px;
	background: linear-gradient(90deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
`;

S.SearchBox = styled.div`
	${flexStartRow}
	width: 100%;
	height: 100%;
	border-radius: 13px;
	background: ${theme.PALETTE.white};
	padding: 0 12px 0 20px;
	gap: 10px;
`;

S.SearchInput = styled.input`
	border: none;
	outline: none;
	${h8Regular}
	flex: 1;
	background: transparent;
`;

S.SearchBtn = styled.button`
	${flexCenter}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: linear-gradient(135deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
`;

S.ArrowIcon = styled.img`
	width: 18px;
	height: 18px;
	filter: brightness(0) invert(1);
`;

export default S;