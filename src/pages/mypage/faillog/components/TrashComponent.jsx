import React from 'react';
import CommS from '../../profile/styles/CommunityStyles';
import failLogIcon from '../resources/fail-log-card.png';
import MyFailCardItemComponent from '../../commons/MyFailCardItemComponent';
import S from '../styles/MyFailLogStyles';
import PostControlBarComponent from '../../commons/ControlBarComponent';
import PagenationComponent from '../../../../components/commons/PagenationComponent';

const TrashComponent = ({
  trashedLogs = [],
  isTrashEditMode,
  onToggleEditMode,
  selectedTrashIds = [],
  onSelectOneTrash,
  onSelectAllTrash,
  onRestoreSelected,
  onDeleteForeverSelected
}) => {
  return (
    <>
      <S.SectionHeader>
        <h2><span>페일로그 </span>휴지통</h2>

        <S.TrashToggleWrapper>
          <input
            type="checkbox"
            id="trash-edit-toggle"
            checked={isTrashEditMode}
            onChange={onToggleEditMode}
          />
          <S.TrashToggleLabel htmlFor="trash-edit-toggle">
            휴지통 관리 모드 켜기
          </S.TrashToggleLabel>
        </S.TrashToggleWrapper>
      </S.SectionHeader>

      {trashedLogs.length === 0 ? (
        <S.TrashEmpty>
          <p>휴지통이 비어 있습니다.</p>
        </S.TrashEmpty>
      ) : (
        <>
          <CommS.PostGrid style={{ marginTop: '30px' }}>
            {trashedLogs.map((log, index) => {
              const isSelected = isTrashEditMode && selectedTrashIds.includes(log.id);
              return (
                <S.TrashCardWrapper key={log.id}>
                  <MyFailCardItemComponent
                    log={log}
                    index={index}
                    iconSrc={failLogIcon}
                    isSelected={isSelected}
                    isTrash={true}
                    onClick={() => {
                      if (isTrashEditMode) onSelectOneTrash?.(log.id);
                    }}
                  />
                </S.TrashCardWrapper>
              );
            })}
          </CommS.PostGrid>

          <S.TrashPaginationWrapper $active={isTrashEditMode}>
            <PagenationComponent minPage={1} maxPage={1} page={1} onPageChange={() => {}} />

            <S.ControlBarAbsolute>
              <PostControlBarComponent
                isAllChecked={selectedTrashIds.length === trashedLogs.length && trashedLogs.length > 0}
                onSelectAll={onSelectAllTrash}
                selectedCount={selectedTrashIds.length}
                totalCount={trashedLogs.length}
                showRestore={true}
                onRestore={onRestoreSelected}
                onDelete={onDeleteForeverSelected}
              />
            </S.ControlBarAbsolute>
          </S.TrashPaginationWrapper>
        </>
      )}
    </>
  );
};

export default TrashComponent;
