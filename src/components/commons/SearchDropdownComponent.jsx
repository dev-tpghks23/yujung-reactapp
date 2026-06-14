import React, { useEffect, useRef, useState } from 'react';
import S from '../style';
import myStyle from '../../pages/community/styles/CommunitySearchOrderStyle';
import downSvg from '../resources/down.svg';

const DEFAULT_OPTIONS = ['제목', '제목+내용', '내용', '작성자', '댓글'];

const SearchDropdownComponent = ({ defaultValue = '제목', onChange, options = DEFAULT_OPTIONS }) => {
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

  return (
    <myStyle.Wrapper ref={wrapperRef}>
      <myStyle.Trigger onClick={() => setIsOpen((prev) => !prev)}>
        <S.Span size="h7Regular" color="faillog-black">{selected}</S.Span>
        <myStyle.ChevronImg isOpen={isOpen} src={downSvg}></myStyle.ChevronImg>
      </myStyle.Trigger>

      {isOpen && (
        <myStyle.OptionBox $optionCount={options.length}>
          {options.map((option) => (
            <myStyle.OptionItem
              key={option}
              $isfirst={option === options[0]}
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
