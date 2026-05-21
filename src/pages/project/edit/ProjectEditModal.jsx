import { useState, useRef } from 'react';
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
import S from './ProjectEditModalStyle';

const ProjectEditModal = ({ onClose, onSubmit, initialData = {} }) => {
	const [projectName, setProjectName] = useState(initialData.projectTitle || '');
	const [startDate, setStartDate] = useState(initialData.projectStartDate || '');
	const [endDate, setEndDate] = useState(initialData.projectEndDate || '');

	const startDateRef = useRef(null);
	const endDateRef = useRef(null);

	const handleSubmit = () => {
		onSubmit({
			projectTitle: projectName,
			projectStartDate: startDate,
			projectEndDate: endDate,
		});
		onClose();
	};

	const formatDisplay = (dateStr) => {
		if (!dateStr) return '';
		return dateStr.replace(/-/g, '.');
	};

	return (
		<S.Overlay onClick={onClose}>
			<S.Modal onClick={(e) => e.stopPropagation()}>
				<S.Header>
					<div>
						<S.ModalTitle>EDIT PROJECT</S.ModalTitle>
						<S.ModalSubtitle>프로젝트를 수정합니다.<br />수정할 내용을 입력해 주세요</S.ModalSubtitle>
					</div>
					<S.CloseBtn onClick={onClose}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M3 3L13 13M13 3L3 13" stroke={theme.GRAYSCALE[7]} strokeWidth="2" strokeLinecap="round" />
						</svg>
					</S.CloseBtn>
				</S.Header>

				<S.FieldGroup>
					<S.FieldLabel>프로젝트 이름</S.FieldLabel>
					<S.Input
						type="text"
						placeholder="프로젝트 이름을 입력해주세요."
						value={projectName}
						onChange={(e) => setProjectName(e.target.value)}
					/>
				</S.FieldGroup>

				<S.FieldGroup>
					<S.FieldLabel>시작일</S.FieldLabel>
					<S.DateInputWrap>
						<S.Input
							type="text"
							placeholder="시작 날짜를 선택해주세요."
							value={formatDisplay(startDate)}
							readOnly
							onClick={() => startDateRef.current?.showPicker()}
						/>
						<S.CalendarIcon onClick={() => startDateRef.current?.showPicker()}>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
								<rect x="2" y="3" width="14" height="13" rx="2" stroke={theme.GRAYSCALE[6]} strokeWidth="1.5" />
								<path d="M2 7H16" stroke={theme.GRAYSCALE[6]} strokeWidth="1.5" />
								<path d="M6 1V4M12 1V4" stroke={theme.GRAYSCALE[6]} strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</S.CalendarIcon>
						<S.HiddenDateInput
							type="date"
							ref={startDateRef}
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
						/>
					</S.DateInputWrap>
				</S.FieldGroup>

				<S.FieldGroup>
					<S.FieldLabel>종료일</S.FieldLabel>
					<S.DateInputWrap>
						<S.Input
							type="text"
							placeholder="종료 날짜를 선택해주세요."
							value={formatDisplay(endDate)}
							readOnly
							onClick={() => endDateRef.current?.showPicker()}
						/>
						<S.CalendarIcon onClick={() => endDateRef.current?.showPicker()}>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
								<rect x="2" y="3" width="14" height="13" rx="2" stroke={theme.GRAYSCALE[6]} strokeWidth="1.5" />
								<path d="M2 7H16" stroke={theme.GRAYSCALE[6]} strokeWidth="1.5" />
								<path d="M6 1V4M12 1V4" stroke={theme.GRAYSCALE[6]} strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</S.CalendarIcon>
						<S.HiddenDateInput
							type="date"
							ref={endDateRef}
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
						/>
					</S.DateInputWrap>
				</S.FieldGroup>

				<S.SubmitBtn onClick={handleSubmit} disabled={!projectName.trim()}>
					수정하기
				</S.SubmitBtn>
			</S.Modal>
		</S.Overlay>
	);
};

export default ProjectEditModal;