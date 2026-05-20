import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenterRow,
	flexCenter,
	h4Bold,
	h6Bold,
	h8Bold,
	h8Regular,
	h9Regular,
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

S.SuggestionBox = styled.div`
	display: grid;
	grid-template-columns: 520px 1fr;
	width: 100%;
	height: 400px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 15px;
	background: ${theme.PALETTE.white};
	overflow: hidden;
`;

S.SuggestionLeft = styled.div`
	padding: 40px;
	border-right: 1px solid ${theme.GRAYSCALE[2]};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

S.SuggestionHeader = styled.div`
	${flexStartRow}
	gap: 10px;
	margin-bottom: 10px;
	width: 400px;
`;

S.SuggestionIcon = styled.div`
	width: 28px;
	height: 28px;
	flex-shrink: 0;
	${flexCenter}
`;

S.SuggestionPrompt = styled.p`
	${h6Bold}
	color: ${theme.PALETTE.black};
`;

S.SuggestionDesc = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
	padding-left: 38px;
	width: 400px;
`;

S.SuggestionInput = styled.textarea`
	width: 400px;
	height: 120px;
	margin-top: 30px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 10px;
	padding: 12px;
	background: #F9FAFB;
	${h8Regular}
	color: ${theme.PALETTE.black};
	resize: none;
	outline: none;
	font-family: 'pretendard', sans-serif;
	&::placeholder { color: ${theme.GRAYSCALE[10]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.SuggestionSubmitBtn = styled.button`
	${flexCenterRow}
	gap: 8px;
	width: 400px;
	height: 40px;
	margin-top: 20px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	color: ${theme.PALETTE.third.main};
	${h8Bold}
	transition: all 0.15s;
	&:hover {
		border: 1px solid ${theme.PALETTE.third.main};
		background: ${theme.PALETTE.white};
	}
	&:active {
		background: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.white};
		border-color: ${theme.PALETTE.third.main};
	}
`;

S.SuggestionRight = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
	gap: 12px;
	overflow-y: auto;
	&::-webkit-scrollbar { width: 4px; }
	&::-webkit-scrollbar-thumb { background: ${theme.GRAYSCALE[4]}; border-radius: 2px; }
	&::-webkit-scrollbar-track { background: transparent; }
`;

S.SuggestionItem = styled.div`
	${flexBetweenRow}
	align-items: center;
	gap: 12px;
	padding: 16px;
	border: 1px solid ${theme.GRAYSCALE[2]};
	border-radius: 12px;
	background: ${theme.PALETTE.white};
`;

S.SuggestionAvatarWrap = styled.div`
	width: 52px;
	height: 52px;
	border-radius: 50%;
	background: ${theme.PALETTE.third.light};
	${flexCenter}
	flex-shrink: 0;
`;

S.SuggestionAvatarImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
`;

S.SuggestionItemContent = styled.div`
	flex: 1;
`;

S.SuggestionUser = styled.p`
	${h9Regular}
	color: ${theme.PALETTE.black};
	margin-bottom: 4px;
`;

S.SuggestionItemText = styled.p`
	${h8Bold}
	color: ${theme.PALETTE.black};
`;

S.AddListBtn = styled.button`
	width: 36px;
	height: 36px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	color: ${theme.PALETTE.third.main};
	background: ${theme.PALETTE.white};
	${flexCenter}
	font-size: 18px;
	font-weight: 400;
	flex-shrink: 0;
	transition: all 0.15s;
	&:hover {
		border: 1px solid ${theme.PALETTE.third.main};
		background: ${theme.PALETTE.white};
	}
	&:active {
		background: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.white};
		border-color: ${theme.PALETTE.third.main};
	}
`;

export default S;