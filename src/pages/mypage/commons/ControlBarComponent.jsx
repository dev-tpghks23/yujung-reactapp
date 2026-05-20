import React from 'react';

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

  return (
    <div 
      className="control-bar-container" 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        gap: '20px', 
        padding: '10px 0', 
        borderTop: '1px solid #E2E8F0', 
        marginTop: '20px', 
        fontFamily: 'inherit'
      }}
    >
      <div
        className="all-check-wrapper"
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <input
          type="checkbox"
          id={checkboxId}
          onChange={onSelectAll}
          checked={isAllChecked}
          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
        />
        <label
          htmlFor={checkboxId}
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#475569',
            cursor: 'pointer',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          전체 선택 <span style={{ color: '#64748B', marginLeft: '4px', fontWeight: '400' }}>[ <span style={{color: '#6c5ce7', fontWeight: '600'}}>{selectedCount}</span> / {totalCount} ]</span>
        </label>
      </div>

      <div className="control-buttons" style={{ display: 'flex', gap: '8px' }}>
        {showRestore && (
          <button
            type="button"
            onClick={onRestore}
            disabled={selectedCount === 0}
            style={{
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: '600',
              backgroundColor: selectedCount > 0 ? '#E2E8F0' : '#F1F5F9',
              color: selectedCount > 0 ? '#334155' : '#94A3B8',
              border: '1px solid #CBD5E1',
              borderRadius: '6px',
              cursor: selectedCount > 0 ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }}
          >
            복구
          </button>
        )}

        <button 
          type="button"
          onClick={onDelete}
          disabled={selectedCount === 0}
          style={{
            padding: '6px 16px',
            fontSize: '13px',
            fontWeight: '600',
            backgroundColor: selectedCount > 0 ? '#6c5ce7' : '#F1F5F9', 
            color: selectedCount > 0 ? '#ffffff' : '#94A3B8', 
            border: selectedCount > 0 ? 'none' : '1px solid #E2E8F0', 
            borderRadius: '6px',
            cursor: selectedCount > 0 ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
          }}
        >
          {showRestore ? '정리' : '삭제'}
        </button>
      </div>

    </div>
  );
};

export default ControlBarComponent;