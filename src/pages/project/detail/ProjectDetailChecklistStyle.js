import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenterRow,
	flexCenter,
	h4Bold,
	h7Bold,
	h8Bold,
	h8Regular,
	h9Bold,
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
	position: relative;
	padding: 18px 20px 18px 64px;
	min-height: 100px;
	cursor: pointer;
`;

S.CheckLeft = styled.div`
	${flexStartRow}
	flex: 1;
`;

S.CheckRight = styled.div`
	${flexStartRow}
	gap: 12px;
`;

S.CheckCircle = styled.div`
	position: absolute;
	left: 20px;
	top: 50%;
	transform: translateY(-50%);
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		'transparent'};
	background: ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		'transparent'};
	visibility: ${({ $status }) => $status ? 'visible' : 'hidden'};
	${flexCenter}
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

export default S;