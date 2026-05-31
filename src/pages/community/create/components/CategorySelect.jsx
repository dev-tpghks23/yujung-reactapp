import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import S, { colorCSS } from '../../style';
import { flexBetweenRow } from '../../../../styles/common';

import downImage from '../../resources/down.svg'

const OPTIONS = ['공부/취업', '사업/창업', '인간관계', '건강/루틴', '기타'];

const CategorySelect = ({ defaultValue = null, options = OPTIONS, onChange }) => {

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
    <Wrapper ref={wrapperRef}>
      <Trigger onClick={() => setIsOpen((prev) => !prev)}>
        <S.Span size="h8Regular" color={selected ? "faillog-black" : "faillog_gray9"}>
          {selected ?? '카테고리를 선택해주세요.'}
        </S.Span>
        <ChevronImg isOpen={isOpen} src={downImage}></ChevronImg>
      </Trigger>

{/* customProps은 dom에 전달하면 안된다 그러기위해 앞에 $를 붙인다. */}
      {isOpen && (
        <OptionBox>
          {options.map((option) => (
            <OptionItem
              key={option}
              $isfirst={option === '제목'}
              $selected={option === selected}
              onClick={() => handleSelect(option)}
            >
              <S.Span size="h8Regular" color="faillog-black">{option}</S.Span>
            </OptionItem>
          ))}
        </OptionBox>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 772px;
  user-select: none;
`

const Trigger = styled.div`
  width: 772px;
  height: 48px;
  padding: 0 11px 0px 26px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;
  ${flexBetweenRow}
`

const ChevronImg = styled.img`
  display: inline-block;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 200ms ease;
  flex-shrink: 0;
`

const OptionBox = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 772px;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${colorCSS["faillog_gray9"]};
  background-color: ${colorCSS["faillog_white"]};
`

const OptionItem = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 26px 0 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${({ $selected }) => $selected ? colorCSS['faillog_light_purple'] : 'transparent'};
  border-top: ${({ $selected, $isfirst }) => $selected && !$isfirst ? `1px solid ${colorCSS['faillog_purple']}` : 'none'};
  border-bottom: ${({ $selected }) => $selected ? `1px solid ${colorCSS['faillog_purple']}` : 'none'};

  &:hover {
    background-color: ${({ $selected }) => $selected ? colorCSS['faillog_light_purple'] : colorCSS['faillog_gray1']};
  }
`

export default CategorySelect;