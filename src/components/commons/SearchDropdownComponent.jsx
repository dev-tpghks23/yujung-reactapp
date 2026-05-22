import React, { useEffect, useRef, useState } from 'react';
import S from '../style';
import myStyle from '../commons/styles/SearchOptionComponentStyle';
import downSvg from '../resources/down.svg';


const OPTIONS = ['제목', '제목+내용', '내용', '작성자', '댓글'];

const SearchDropdownComponent = ({ defaultValue = '제목', onChange, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const wrapperRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const hasCustomStyle = !!style;

  return (
    <myStyle.Wrapper 
      ref={wrapperRef} 
      style={hasCustomStyle ? { width: style.width, height: style.height } : undefined}
    >
      <myStyle.Trigger 
        onClick={() => setIsOpen((prev) => !prev)}
        style={hasCustomStyle ? {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          boxSizing: 'border-box',
          borderRadius: style.borderRadius || '9999px'
        } : undefined}
      >
        <S.Span size="h8Regular" color="faillog-black">{selected}</S.Span>
        <myStyle.ChevronImg isOpen={isOpen} src={downSvg}></myStyle.ChevronImg>
      </myStyle.Trigger>

      {isOpen && (
        /* 🎯 옵션 박스의 너비만 트리거 너비(100%)에 맞추고, 높이는 자기 글자 크기대로 흐르게 둡니다. */
        <myStyle.OptionBox style={hasCustomStyle ? { width: '100%', zIndex: 999 } : undefined}>
          {OPTIONS.map((option) => (
            <myStyle.OptionItem
              key={option}
              $isfirst={option === '제목'}
              $selected={option === selected}
              onClick={() => handleSelect(option)}
            >
              <S.Span size="h8Regular" color="faillog-black">{option}</S.Span>
            </myStyle.OptionItem>
          ))}
        </myStyle.OptionBox>
      )}
    </myStyle.Wrapper>
  );
};

export default SearchDropdownComponent;