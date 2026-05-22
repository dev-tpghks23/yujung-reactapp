import React from 'react';
import S from './styles/ControlBarComponentStyle';

const ControlBarComponent = ({
  isAllChecked,
  onSelectAll,
  selectedCount = 0,
  totalCount = 0,
  onRestore,
  onDelete,
  showRestore = false,
}) => {
  const checkboxId = React.useId();
  const isActive = selectedCount > 0;

  return (
    <S.Container>
      <S.CheckWrapper>
        <S.Checkbox
          type="checkbox"
          id={checkboxId}
          onChange={onSelectAll}
          checked={isAllChecked}
        />
        <S.Label htmlFor={checkboxId}>
          전체 선택{' '}
          <S.CountText>
            [ <S.CountHighlight>{selectedCount}</S.CountHighlight> / {totalCount} ]
          </S.CountText>
        </S.Label>
      </S.CheckWrapper>

      <S.ButtonGroup>
        {showRestore && (
          <S.RestoreButton
            type="button"
            onClick={onRestore}
            disabled={!isActive}
            $active={isActive}
          >
            복구
          </S.RestoreButton>
        )}
        <S.DeleteButton
          type="button"
          onClick={onDelete}
          disabled={!isActive}
          $active={isActive}
        >
          {showRestore ? '정리' : '삭제'}
        </S.DeleteButton>
      </S.ButtonGroup>
    </S.Container>
  );
};

export default ControlBarComponent;
