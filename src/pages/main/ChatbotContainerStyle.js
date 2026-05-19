import styled, { keyframes } from 'styled-components';
import {
	flexCenter,
	flexCenterRow,
	flexBetweenRow,
	flexStartRow,
	h7Bold,
	h9Regular,
	h10Regular,
} from '../../styles/common';
import theme from '../../styles/theme';

export const BOT_GRADIENT = 'linear-gradient(135deg, #027DF0, #AB47FF)';

const fadeIn = keyframes`
	from { opacity: 0; transform: translateY(12px) scale(0.97); }
	to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const S = {};

S.Fab = styled.button`
	position: fixed;
	bottom: 36px;
	right: 36px;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: ${BOT_GRADIENT};
	border: none;
	cursor: pointer;
	${flexCenter}
	box-shadow: 0 4px 20px rgba(2, 125, 240, 0.35);
	transition: transform 0.2s, box-shadow 0.2s;
	z-index: 300;
	&:hover {
		transform: scale(1.08);
		box-shadow: 0 8px 28px rgba(2, 125, 240, 0.45);
	}
`;

S.ChatWindow = styled.div`
	position: fixed;
	bottom: 116px;
	right: 36px;
	width: 312px;
	height: 600px;
	border-radius: 15px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	z-index: 299;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
	animation: ${fadeIn} 0.22s ease;
`;

S.Header = styled.div`
	${flexBetweenRow}
	position: relative;
	padding: 16px 20px;
	border-bottom: 1px solid ${theme.GRAYSCALE[2]};
	flex-shrink: 0;
	justify-content: center;
`;

S.HeaderTitle = styled.span`
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.CloseBtn = styled.button`
	position: absolute;
	right: 16px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	${flexCenter}
	transition: background 0.15s;
	&:hover { background: ${theme.GRAYSCALE[2]}; }
`;

S.ChatArea = styled.div`
	flex: 1;
	overflow-y: auto;
	padding: 16px 14px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	&::-webkit-scrollbar { width: 4px; }
	&::-webkit-scrollbar-thumb { background: ${theme.GRAYSCALE[4]}; border-radius: 2px; }
	&::-webkit-scrollbar-track { background: transparent; }
`;

S.BotRow = styled.div`
	${flexStartRow}
	align-items: flex-start;
	gap: 8px;
`;

S.BotAvatarWrap = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background: ${BOT_GRADIENT};
	${flexCenter}
	flex-shrink: 0;
`;

S.BotContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	max-width: 220px;
`;

S.BotName = styled.span`
	${h10Regular}
	color: ${theme.PALETTE.black};
`;

S.BotBubble = styled.div`
	${h9Regular}
	color: ${theme.PALETTE.black};
	background: ${theme.GRAYSCALE[2]};
	border-radius: 0 10px 10px 10px;
	padding: 10px 12px;
	word-break: keep-all;
`;

S.BotBubbleTitle = styled.p`
	${h9Regular}
	font-weight: 700;
	color: ${theme.PALETTE.black};
	margin-bottom: 6px;
`;

S.QuickReplies = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin-top: 8px;
`;

S.QuickReplyBtn = styled.button`
	${h10Regular}
	color: ${theme.PALETTE.black};
	background: ${theme.PALETTE.white};
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 20px;
	padding: 4px 12px;
	width: fit-content;
	text-align: left;
	transition: all 0.15s;
	&:hover {
		border-color: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.third.main};
	}
`;

S.MsgTime = styled.span`
	${h10Regular}
	color: ${theme.GRAYSCALE[10]};
	text-align: ${({ $right }) => $right ? 'right' : 'left'};
`;

S.UserRow = styled.div`
	${flexCenterRow}
	justify-content: flex-end;
`;

S.UserContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	max-width: 220px;
	align-items: flex-end;
`;

S.UserBubble = styled.div`
	${h9Regular}
	color: ${theme.PALETTE.white};
	background: ${BOT_GRADIENT};
	border-radius: 10px 0 10px 10px;
	padding: 10px 12px;
	word-break: keep-all;
`;

S.InputArea = styled.div`
	padding: 12px 14px;
	border-top: 1px solid ${theme.GRAYSCALE[2]};
	flex-shrink: 0;
	${flexCenterRow}
`;

S.InputWrap = styled.div`
	width: 272px;
	height: 44px;
	border-radius: 10px;
	padding: 1.5px;
	background: ${({ $focused }) =>
		$focused
			? `linear-gradient(90deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main})`
			: theme.GRAYSCALE[4]};
	box-sizing: border-box;
	transition: background 0.15s;
`;

S.InputInner = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 8.5px;
	background: ${theme.PALETTE.white};
	${flexStartRow}
	padding: 0 8px 0 14px;
	gap: 6px;
`;

S.Input = styled.input`
	flex: 1;
	border: none;
	outline: none;
	background: transparent;
	${h9Regular}
	color: ${theme.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	&::placeholder {
		color: ${theme.GRAYSCALE[10]};
	}
`;

S.SendBtn = styled.button`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: ${BOT_GRADIENT};
	border: none;
	${flexCenter}
	flex-shrink: 0;
	transition: transform 0.15s;
	&:hover { transform: scale(1.08); }
`;

export default S;