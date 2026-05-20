import styled from 'styled-components';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenter,
	h6Bold,
	h9Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.MyProjectsSection = styled.div`
	position: relative;
	padding: 40px 0 120px;
`;

S.CarouselWrap = styled.div`
	position: relative;
`;

S.CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
`;

S.ArrowBtn = styled.button`
	${flexCenter}
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 1px solid ${theme.GRAYSCALE[3]};
	background: ${theme.PALETTE.white};
	color: ${theme.GRAYSCALE[10]};
	font-size: 40px;
	z-index: 1;
	transition: all 0.15s ease;
	&:first-child { left: -100px; }
	&:last-child { right: -100px; }
	&:hover:not(:disabled) {
		background: ${theme.GRAYSCALE[1]};
		border-color: ${theme.GRAYSCALE[6]};
	}
	&:disabled { opacity: 0.3; cursor: default; }
`;

S.CardWrapper = styled.div`
	position: relative;
`;

S.Card = styled.div`
	display: flex;
	flex-direction: row;
	height: 180px;
	background: ${theme.PALETTE.white};
	border-radius: 15px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
	cursor: pointer;
	overflow: hidden;
	transition: transform 0.2s, box-shadow 0.2s;
	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
	}
`;

S.AccentBar = styled.div`
	width: 4px;
	min-width: 4px;
	background: ${({ $color }) => $color};
	flex-shrink: 0;
`;

S.CardContent = styled.div`
	flex: 1;
	padding: 18px 30px 16px 26px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

S.CardTop = styled.div`
	${flexBetweenRow}
`;

S.OwnerRow = styled.div`
	${flexStartRow}
	gap: 7px;
`;

S.OwnerAvatar = styled.div`
	${flexCenter}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid ${({ $color }) => $color};
	color: ${({ $color }) => $color};
	font-size: ${theme.FONT_SIZE.h11};
	font-weight: 700;
	background: ${theme.PALETTE.white};
`;

S.OwnerName = styled.span`
	${h9Bold}
	color: ${theme.PALETTE.black};
`;

S.DDay = styled.span`
	${h6Bold}
	color: ${theme.PALETTE.black};
`;

S.CardTitle = styled.p`
	${h6Bold}
	color: ${theme.PALETTE.black};
	line-height: 1.4;
	display: flex;
	align-items: center;
	flex: 1;
`;

S.TagRow = styled.div`
	${flexStartRow}
	gap: 8px;
	flex-wrap: wrap;
`;

S.Tag = styled.span`
	${flexStartRow}
	gap: 4px;
	height: 28px;
	padding: 0 8px;
	border-radius: 5px;
	background: ${theme.GRAYSCALE[1]};
	font-size: ${theme.FONT_SIZE.h10};
	color: ${theme.GRAYSCALE[10]};
`;

export default S;