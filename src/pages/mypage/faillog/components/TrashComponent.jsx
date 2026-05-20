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
      <S.SectionHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2><span>페일로그 </span>휴지통</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            id="trash-edit-toggle" 
            checked={isTrashEditMode} 
            onChange={onToggleEditMode}
            style={{ width: '16px', height: '16px', cursor: 'pointer' }}
          />
          <label htmlFor="trash-edit-toggle" style={{ fontSize: '14px', fontWeight: '600', color: '#64748B', cursor: 'pointer' }}>
            휴지통 관리 모드 켜기
          </label>
        </div>
      </S.SectionHeader>

      {trashedLogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8' }}>
          <p style={{ fontSize: '16px', fontWeight: '500' }}>휴지통이 비어 있습니다.</p>
        </div>
      ) : (
        <>
          <CommS.PostGrid
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'flex-start',
              width: '100%',
              marginTop: '30px'
            }}
          >
            {trashedLogs.map((log, index) => {
              const isSelected = isTrashEditMode && selectedTrashIds.includes(log.id);
              return (
                <div key={log.id} style={{ position: 'relative' }}>
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
                </div>
              );
            })}
          </CommS.PostGrid>

          <div style={{
            position: 'relative',
            width: '100%',
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isTrashEditMode ? 1 : 0.5,
            pointerEvents: isTrashEditMode ? 'auto' : 'none'
          }}>
            <PagenationComponent minPage={1} maxPage={1} page={1} onPageChange={() => {}} />

            <div style={{ position: 'absolute', right: 0, bottom: '-10px' }}>
              <PostControlBarComponent
                isAllChecked={selectedTrashIds.length === trashedLogs.length && trashedLogs.length > 0}
                onSelectAll={onSelectAllTrash}
                selectedCount={selectedTrashIds.length}
                totalCount={trashedLogs.length}
                showRestore={true}
                onRestore={onRestoreSelected}
                onDelete={onDeleteForeverSelected}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TrashComponent;