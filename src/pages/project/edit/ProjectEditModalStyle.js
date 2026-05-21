import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenter,
	h4Bold,
	h7Bold,
	h8Bold,
	h8Regular,
	h9Regular,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	${flexCenter}
	z-index: 200;
`;

S.Modal = styled.div`
	width: 540px;
	background: ${theme.PALETTE.white};
	border-radius: 20px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

S.Header = styled.div`
	${flexBetweenRow}
	align-items: flex-start;
`;

S.ModalTitle = styled.h2`
	${h4Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 6px;
`;

S.ModalSubtitle = styled.p`
	${h9Regular}
	color: ${theme.GRAYSCALE[6]};
	line-height: 1.5;
`;

S.CloseBtn = styled.button`
	width: 32px;
	height: 32px;
	${flexCenter}
	border-radius: 8px;
	border: none;
	background: transparent;
	transition: background 0.15s;
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

S.FieldGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

S.FieldLabel = styled.label`
	${h8Bold}
	color: ${theme.PALETTE.black};
`;

S.Input = styled.input`
	width: 100%;
	height: 52px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 0 16px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	outline: none;
	transition: border-color 0.15s;
	cursor: ${({ readOnly }) => readOnly ? 'pointer' : 'text'};
	&::placeholder { color: ${theme.GRAYSCALE[4]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.DateInputWrap = styled.div`
	position: relative;
`;

S.CalendarIcon = styled.button`
	position: absolute;
	right: 14px;
	top: 50%;
	transform: translateY(-50%);
	${flexCenter}
	background: none;
	border: none;
	cursor: pointer;
`;

S.HiddenDateInput = styled.input`
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
	pointer-events: none;
`;

S.ActiveToggleRow = styled.div`
	${flexStartRow}
	gap: 10px;
	cursor: pointer;
	width: fit-content;
`;

S.ActiveCheckBox = styled.div`
	width: 22px;
	height: 22px;
	border-radius: 6px;
	border: 2px solid ${({ $active }) => $active ? theme.PALETTE.third.main : theme.GRAYSCALE[4]};
	background: ${({ $active }) => $active ? theme.PALETTE.third.main : 'transparent'};
	${flexCenter}
	transition: all 0.15s;
`;

S.ActiveLabel = styled.span`
	${h8Regular}
	color: ${theme.PALETTE.black};
`;

S.SubmitBtn = styled.button`
	width: 100%;
	height: 54px;
	border-radius: 12px;
	background: ${({ disabled }) => disabled ? theme.GRAYSCALE[3] : theme.PALETTE.third.main};
	color: white;
	${h7Bold}
	transition: opacity 0.15s;
	&:hover:not(:disabled) { opacity: 0.9; }
	cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export default S;