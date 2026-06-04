import { useState } from 'react';
import theme from '../../../styles/theme';
import S from './ProjectDetailChecklistStyle';

// ─────────────────────────────────────────
// PRIORITY CONFIG
// ─────────────────────────────────────────
const PRIORITY_CONFIG = {
    높음: { label: '우선순위 높음', bg: theme.PALETTE.fourth.light, color: theme.PALETTE.fourth.main },
    중간: { label: '우선순위 중간', bg: theme.PALETTE.primary.light, color: theme.PALETTE.primary.main },
    낮음: { label: '우선순위 낮음', bg: theme.PALETTE.secondary.light, color: theme.PALETTE.secondary.main },
};

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────

// 체크리스트 아이템 컴포넌트 - readOnly일 때 수정/삭제/상태변경 버튼 숨김
const ChecklistItem = ({ item, onToggle, onStatusChange, readOnly = false }) => {
    const [expanded, setExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [memo, setMemo] = useState(item.memo || '');
    const [title, setTitle] = useState(item.title || '');
    const priorityConf = PRIORITY_CONFIG[item.priority?.trim()] || PRIORITY_CONFIG['낮음'];

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onToggle(item.id, 'edit', memo, title);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setMemo(item.memo || '');
        setTitle(item.title || '');
        setIsEditing(false);
    };

    return (
        <S.CheckItem $status={item.status}>
            <S.CheckItemTop onClick={() => setExpanded(prev => !prev)}>
                <S.CheckCircle $status={item.status} onClick={(e) => { e.stopPropagation(); }}>
                    {item.status === 'success' && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                    {item.status === 'fail' && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M4 4L10 10M10 4L4 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </S.CheckCircle>
                <S.CheckLeft>
                    {/* 수정 모드일 때만 title 입력 가능 */}
                    {isEditing ? (
                        <S.MemoInput
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            style={{ height: '36px', marginBottom: 0 }}
                        />
                    ) : (
                        <S.CheckTitle $status={item.status}>{item.title}</S.CheckTitle>
                    )}
                </S.CheckLeft>
                <S.CheckRight>
                    <S.PriorityBadge $bg={priorityConf.bg} $color={priorityConf.color}>
                        {priorityConf.label}
                    </S.PriorityBadge>
                    <S.ChevronIcon $expanded={expanded}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 5L7 9L11 5" stroke={theme.PALETTE.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </S.ChevronIcon>
                </S.CheckRight>
            </S.CheckItemTop>

            {expanded && (
                <S.CheckExpanded>
                    <S.MemoLabel>한 줄 메모</S.MemoLabel>
                    <S.MemoInput
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                        placeholder="아직 작성되지 않았습니다."
                        disabled={!isEditing || readOnly}
                        style={{ opacity: isEditing && !readOnly ? 1 : 0.6 }}
                    />

                    {/* readOnly일 때 수정/삭제/상태변경 버튼 숨김 */}
                    {!readOnly && (
                        <S.CheckActions>
                            <S.CheckActionsLeft>
                                <S.SmallBtn onClick={() => onToggle(item.id, 'delete')}>삭제</S.SmallBtn>
                                {isEditing ? (
                                    <>
                                        <S.SmallBtn onClick={handleSaveClick}>저장</S.SmallBtn>
                                        <S.SmallBtn onClick={handleCancelClick}>취소</S.SmallBtn>
                                    </>
                                ) : (
                                    <S.SmallBtn onClick={handleEditClick}>수정</S.SmallBtn>
                                )}
                            </S.CheckActionsLeft>
                            <S.CheckActionsRight>
                                <S.StatusBtn $active={item.status === 'success'} $type="success" onClick={() => onStatusChange(item.id, item.status === 'success' ? null : 'success')}>
                                    목표 달성
                                </S.StatusBtn>
                                <S.StatusBtn $active={item.status === 'fail'} $type="fail" onClick={() => onStatusChange(item.id, item.status === 'fail' ? null : 'fail')}>
                                    목표 실패
                                </S.StatusBtn>
                            </S.CheckActionsRight>
                        </S.CheckActions>
                    )}
                </S.CheckExpanded>
            )}
        </S.CheckItem>
    );
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────

// readOnly prop: true일 때 새 항목 추가 버튼 및 수정/삭제/상태변경 버튼 숨김
const ProjectDetailChecklist = ({ checklist, onToggle, onStatusChange, showAddModal, setShowAddModal, newItem, setNewItem, onAddItem, readOnly = false }) => (
    <S.Section $mt="60px">
        <S.SectionTitle>Checklist</S.SectionTitle>
        <S.ChecklistSubtitle>AI가 만든 '액션'을 그대로 사용하거나, 내 계획으로 설정할 수 있습니다.</S.ChecklistSubtitle>
        <S.ChecklistList>
            {checklist.map((item) => (
                <ChecklistItem
                    key={item.id}
                    item={item}
                    onToggle={onToggle}
                    onStatusChange={onStatusChange}
                    readOnly={readOnly}
                />
            ))}
        </S.ChecklistList>

        {/* readOnly일 때 새 항목 추가 버튼 숨김 */}
        {!readOnly && (
            <S.AddItemBtn onClick={() => setShowAddModal(true)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V13M1 7H13" stroke={theme.GRAYSCALE[7]} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                새 항목 추가
            </S.AddItemBtn>
        )}

        {/* readOnly일 때 추가 모달 숨김 */}
        {!readOnly && showAddModal && (
            <S.ModalOverlay onClick={() => setShowAddModal(false)}>
                <S.AddModal onClick={(e) => e.stopPropagation()}>
                    <S.AddModalHeader>
                        <S.AddModalTitle>새 항목 추가</S.AddModalTitle>
                        <S.AddModalClose onClick={() => setShowAddModal(false)}>✕</S.AddModalClose>
                    </S.AddModalHeader>

                    <S.AddModalField>
                        <S.AddModalLabel>항목 이름</S.AddModalLabel>
                        <S.AddModalInput
                            placeholder="예) 자기 전 30분 독서하기"
                            value={newItem.title}
                            onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                        />
                    </S.AddModalField>

                    <S.AddModalField>
                        <S.AddModalLabel>한 줄 메모</S.AddModalLabel>
                        <S.AddModalTextarea
                            placeholder="아직 작성되지 않았습니다."
                            value={newItem.memo}
                            onChange={(e) => setNewItem(prev => ({ ...prev, memo: e.target.value }))}
                        />
                    </S.AddModalField>

                    <S.AddModalBottom>
                        <S.AddModalPriorityRow>
                            <S.AddModalPriorityBtns>
                                {['높음', '중간', '낮음'].map((p) => (
                                    <S.PrioritySelectBtn
                                        key={p}
                                        $selected={newItem.priority === p}
                                        $priority={p}
                                        onClick={() => setNewItem(prev => ({ ...prev, priority: p }))}
                                    >
                                        우선순위 {p}
                                    </S.PrioritySelectBtn>
                                ))}
                            </S.AddModalPriorityBtns>
                        </S.AddModalPriorityRow>
                        <S.AddModalSubmitBtn onClick={onAddItem}>추가하기</S.AddModalSubmitBtn>
                    </S.AddModalBottom>
                </S.AddModal>
            </S.ModalOverlay>
        )}
    </S.Section>
);

export default ProjectDetailChecklist;