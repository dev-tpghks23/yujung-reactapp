import React from 'react';

/**
 * @param {boolean} isAllChecked - 전체 선택 체크박스의 체크 여부 State
 * @param {function} onSelectAll - 전체 선택 체크박스 변경 핸들러
 * @param {number} selectedCount - 현재 체크된 카드의 개수 (예: 2)
 * @param {number} totalCount - 현재 페이지 또는 전체 카드의 총 개수 (예: 9)
 * @param {function} onRestore - [휴지통 전용] 선택 복구 버튼 클릭 핸들러 (옵셔널)
 * @param {function} onDelete - 선택 삭제 버튼 클릭 핸들러
 * @param {boolean} showRestore - 복구 버튼 노출 여부 분기 프롭
 * @param {object} styles - 외부 스타일 객체
 */
const ControlBarComponent = ({
  isAllChecked,
  onSelectAll,
  selectedCount = 0,
  totalCount = 0,
  onRestore,
  onDelete,
  showRestore = false,
  styles
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
      {/* 왼쪽 박스: 체크박스 및 카운터 */}
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
          {/* 피그마 싱크 원안 매칭 카운팅 가이드 */}
          전체 선택 <span style={{ color: '#64748B', marginLeft: '4px', fontWeight: '400' }}>[ <span style={{color: '#6c5ce7', fontWeight: '600'}}>{selectedCount}</span> / {totalCount} ]</span>
        </label>
      </div>

      {/* 오른쪽 박스: 버튼 그룹 제어 (복구기능 공용 분기 완전 재살림) */}
      <div className="control-buttons" style={{ display: 'flex', gap: '8px' }}>
        
        {/* 📌 공용 컴포넌트 규칙에 따른 복구 버튼 가용화 */}
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