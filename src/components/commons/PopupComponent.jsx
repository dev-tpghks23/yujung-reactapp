import React, { useEffect } from 'react';
import S from './styles/PopupComponentStyle';

/**
 * 공통 팝업 컴포넌트
 *
 * Confirm 모드 (onCancel 전달 시):
 *   메시지 + [아니오] [네] 버튼
 *
 * Alert 모드 (onCancel 미전달 시):
 *   메시지 + [확인] 버튼
 *
 * @param {boolean}          isOpen       - 팝업 표시 여부
 * @param {ReactNode}        message      - 표시할 메시지
 * @param {function}         onConfirm    - 확인/네 클릭 핸들러
 * @param {function}         [onCancel]   - 아니오 클릭 핸들러 (없으면 Alert 모드)
 * @param {string}           [confirmText]- 확인 버튼 텍스트 (기본: 모드에 따라 자동)
 * @param {string}           [cancelText] - 취소 버튼 텍스트 (기본: '아니오')
 */
const PopupComponent = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText = '아니오',
}) => {
  const isConfirmMode = typeof onCancel === 'function';
  const resolvedConfirmText = confirmText ?? (isConfirmMode ? '네' : '확인');

  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        isConfirmMode ? onCancel() : onConfirm();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, isConfirmMode, onCancel, onConfirm]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={isConfirmMode ? onCancel : onConfirm}>
      <S.Popup onClick={(e) => e.stopPropagation()}>
        <S.Message>{message}</S.Message>

        <S.ButtonRow>
          {isConfirmMode && (
            <S.CancelBtn type="button" onClick={onCancel}>
              {cancelText}
            </S.CancelBtn>
          )}
          <S.ConfirmBtn type="button" onClick={onConfirm}>
            {resolvedConfirmText}
          </S.ConfirmBtn>
        </S.ButtonRow>
      </S.Popup>
    </S.Overlay>
  );
};

export default PopupComponent;
