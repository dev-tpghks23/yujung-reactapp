import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenterRow,
	flexCenter,
	h2Bold,
	h4Bold,
	h5Bold,
	h6Bold,
	h7Bold,
	h7Regular,
	h8Bold,
	h8Regular,
	h9Bold,
	h9Regular,
	h10Bold,
	h3_2Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.PageWrapper = styled.div`
	min-height: 100vh;
	background-color: #F8F9FA;
	padding-bottom: 150px;
`;

S.Inner = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`;

S.PageTop = styled.div`
	${flexBetweenRow}
	padding-top: 120px;
	padding-bottom: 0;
	margin-bottom: 50px;
`;

S.PageTitle = styled.h1`
	${h2Bold}
	color: ${theme.PALETTE.black};
`;

S.TopBtnRow = styled.div`
	${flexStartRow}
	gap: 12px;
`;

S.OutlineBtn = styled.button`
	${h8Bold}
	height: 40px;
	padding: 0 20px;
	border-radius: 10px;
	border: 1px solid ${({ $danger }) => $danger ? '#FF4D4D' : theme.GRAYSCALE[4]};
	color: ${({ $danger }) => $danger ? '#FF4D4D' : theme.GRAYSCALE[9]};
	background: ${theme.PALETTE.white};
	transition: all 0.15s ease;
	&:hover {
		background: ${({ $danger }) => $danger ? '#FFF0F0' : theme.GRAYSCALE[1]};
	}
`;

S.Section = styled.div`
	margin-top: ${({ $mt }) => $mt || '0'};
	margin-bottom: ${({ $mb }) => $mb || '0'};
`;

S.SectionLabel = styled.p`
	${h3_2Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 10px;
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
	${flexBetweenRow}
	margin-bottom: 24px;
`;

S.VisionText = styled.p`
	${h7Bold}
	color: ${theme.PALETTE.primary.main};
	margin-bottom: 50px;
`;

S.AiBadge = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 700;
	color: ${theme.PALETTE.primary.main};
`;

/* ── Project Card ── */
S.ProjectCard = styled.div`
	position: relative;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 16px;
	padding: 28px 40px 28px 32px;
	background: ${theme.PALETTE.white};
	box-shadow: 0 4px 20px rgba(0,0,0,0.05);
	display: flex;
	flex-direction: column;
`;

S.ProjectCardInner = styled.div``;

S.ProjectCardMeta = styled.div`
	${flexBetweenRow}
	margin-bottom: 16px;
`;

S.AiRecommendLabel = styled.span`
	${flexStartRow}
	gap: 6px;
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.ProjectDateRange = styled.span`
	${h10Bold}
	color: ${theme.GRAYSCALE[10]};
	display: block;
	margin-bottom: 20px;
`;

S.ProjectName = styled.h3`
	${h5Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 20px;
`;

S.ProjectGoal = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
	margin-bottom: 16px;
`;

S.ProgressRow = styled.div`
	${flexBetweenRow}
	gap: 16px;
`;

S.ProgressBar = styled.div`
	flex: 1;
	height: 10px;
	background: ${theme.GRAYSCALE[2]};
	border-radius: 5px;
	overflow: hidden;
`;

S.ProgressFill = styled.div`
	height: 100%;
	width: ${({ $percent }) => $percent}%;
	background: linear-gradient(90deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
	border-radius: 5px;
`;

S.DDay = styled.span`
	${h6Bold}
	color: ${theme.PALETTE.black};
	white-space: nowrap;
`;

S.ProjectEditBtn = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	background: ${theme.PALETTE.white};
	${flexCenter}
	transition: all 0.15s;
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

/* ── Action Grid ── */
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

/* ── Checklist ── */
S.ChecklistSubtitle = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
	margin-bottom: 20px;
`;

S.ChecklistList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

S.CheckItem = styled.div`
	border: 1px solid ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		theme.GRAYSCALE[3]};
	border-radius: 12px;
	background: ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.light :
		$status === 'fail' ? theme.PALETTE.fourth.light :
		theme.PALETTE.white};
	overflow: hidden;
	transition: all 0.2s;
`;

S.CheckItemTop = styled.div`
	${flexBetweenRow}
	padding: 18px 20px;
	min-height: 100px;
	cursor: pointer;
`;

S.CheckLeft = styled.div`
	${flexStartRow}
	gap: 30px;
	flex: 1;
`;

S.CheckRight = styled.div`
	${flexStartRow}
	gap: 12px;
`;

S.CheckCircle = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		theme.GRAYSCALE[4]};
	background: ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		'transparent'};
	${flexCenter}
	flex-shrink: 0;
	transition: all 0.2s;
`;

S.CheckTitle = styled.span`
	${h7Bold}
	color: ${({ $status }) => $status ? theme.GRAYSCALE[7] : theme.PALETTE.black};
	text-decoration: ${({ $status }) => $status === 'success' ? 'line-through' : 'none'};
`;

S.PriorityBadge = styled.span`
	${h9Bold}
	padding: 4px 10px;
	border-radius: 20px;
	background: ${({ $bg }) => $bg};
	color: ${({ $color }) => $color};
	white-space: nowrap;
`;

S.ChevronIcon = styled.span`
	display: flex;
	transform: rotate(${({ $expanded }) => $expanded ? '180deg' : '0deg'});
	transition: transform 0.2s;
`;

S.CheckExpanded = styled.div`
	padding: 0 20px 16px 56px;
	border-top: 1px solid ${theme.GRAYSCALE[2]};
`;

S.MemoLabel = styled.p`
	${h8Regular}
	color: ${theme.PALETTE.black};
	margin: 12px 0 8px;
`;

S.MemoInput = styled.textarea`
	width: 100%;
	height: 56px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 8px;
	padding: 10px 12px;
	${h8Regular}
	font-family: 'pretendard', sans-serif;
	color: ${theme.PALETTE.black};
	resize: none;
	outline: none;
	margin-bottom: 12px;
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.CheckActions = styled.div`
	${flexBetweenRow}
`;

S.CheckActionsLeft = styled.div`
	${flexStartRow}
	gap: 8px;
`;

S.CheckActionsRight = styled.div`
	${flexStartRow}
	gap: 8px;
`;

S.SmallBtn = styled.button`
	${h9Regular}
	padding: 4px 12px;
	border-radius: 6px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	color: ${theme.GRAYSCALE[10]};
	background: ${theme.PALETTE.white};
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

S.StatusBtn = styled.button`
	${h9Bold}
	padding: 4px 12px;
	border-radius: 6px;
	border: 1px solid ${({ $type }) => $type === 'success' ? theme.PALETTE.secondary.main : theme.PALETTE.fourth.main};
	color: ${({ $type, $active }) => $active ? 'white' : ($type === 'success' ? theme.PALETTE.secondary.main : theme.PALETTE.fourth.main)};
	background: ${({ $type, $active }) => !$active ? 'white' : ($type === 'success' ? theme.PALETTE.secondary.main : theme.PALETTE.fourth.main)};
	transition: all 0.15s;
`;

S.AddItemBtn = styled.button`
	${flexCenterRow}
	gap: 8px;
	width: 100%;
	height: 52px;
	margin-top: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 12px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	background: ${theme.PALETTE.white};
	transition: all 0.15s;
	&:hover { border-color: ${theme.PALETTE.third.main}; color: ${theme.PALETTE.third.main}; }
`;

/* ── Suggestion ── */
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

S.SuggestionTextWrap = styled.div``;

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

/* ── 새 항목 추가 모달 ── */
S.ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	${flexCenter}
	z-index: 200;
`;

S.AddModal = styled.div`
	width: 900px;
	background: ${theme.PALETTE.white};
	border-radius: 16px;
	padding: 40px 48px;
	display: flex;
	flex-direction: column;
	gap: 28px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

S.AddModalHeader = styled.div`
	${flexBetweenRow}
`;

S.AddModalTitle = styled.h3`
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.AddModalClose = styled.button`
	${h7Bold}
	color: ${theme.GRAYSCALE[7]};
	background: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
	&:hover { color: ${theme.PALETTE.black}; }
`;

S.AddModalField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

S.AddModalLabel = styled.label`
	${h8Regular}
	color: ${theme.PALETTE.black};
`;

S.AddModalInput = styled.input`
	width: 100%;
	height: 56px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 0 16px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	outline: none;
	&::placeholder { color: ${theme.GRAYSCALE[5]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.AddModalTextarea = styled.textarea`
	width: 100%;
	height: 80px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 16px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	resize: none;
	outline: none;
	&::placeholder { color: ${theme.GRAYSCALE[5]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.AddModalBottom = styled.div`
	${flexBetweenRow}
	align-items: center;
`;

S.AddModalPriorityRow = styled.div`
	${flexStartRow}
	gap: 16px;
`;

S.AddModalPriorityBtns = styled.div`
	${flexStartRow}
	gap: 8px;
`;

S.PrioritySelectBtn = styled.button`
	${h8Bold}
	padding: 6px 16px;
	border-radius: 20px;
	border: 1px solid ${({ $selected, $priority }) =>
		$selected
			? $priority === '높음' ? theme.PALETTE.fourth.main
			: $priority === '중간' ? theme.PALETTE.primary.main
			: theme.PALETTE.secondary.main
			: theme.GRAYSCALE[4]};
	background: ${({ $selected, $priority }) =>
		$selected
			? $priority === '높음' ? theme.PALETTE.fourth.light
			: $priority === '중간' ? theme.PALETTE.primary.light
			: theme.PALETTE.secondary.light
			: theme.PALETTE.white};
	color: ${({ $selected, $priority }) =>
		$selected
			? $priority === '높음' ? theme.PALETTE.fourth.main
			: $priority === '중간' ? theme.PALETTE.primary.main
			: theme.PALETTE.secondary.main
			: theme.GRAYSCALE[7]};
	cursor: pointer;
	transition: all 0.15s;
`;

S.AddModalSubmitBtn = styled.button`
	${h8Bold}
	width: 88px;
	height: 36px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	color: ${theme.PALETTE.black};
	transition: all 0.15s;
	&:hover { border-color: ${theme.PALETTE.third.main}; color: ${theme.PALETTE.third.main}; }
`;

/* ── Added Popup ── */
S.AddedPopupOverlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 100;
	pointer-events: none;
	${flexCenter}
`;

S.AddedPopup = styled.div`
	pointer-events: all;
	background: white;
	border: 1.5px solid ${theme.PALETTE.third.main};
	border-radius: 16px;
	padding: 28px 40px;
	text-align: center;
	box-shadow: 0 8px 32px rgba(171, 71, 255, 0.12);
`;

S.AddedPopupText = styled.p`
	${h7Regular}
	color: ${theme.PALETTE.black};
	margin-bottom: 20px;
	line-height: 1.6;
`;

S.AddedPopupBtn = styled.button`
	${h8Bold}
	padding: 8px 28px;
	border-radius: 20px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: white;
	color: ${theme.PALETTE.black};
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

export default S;