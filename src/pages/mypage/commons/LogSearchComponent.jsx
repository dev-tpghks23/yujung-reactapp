import React from 'react';
import styled from 'styled-components';
import SearchbarComponent from '../../../components/commons/SearchbarComponent';
import SearchDropdownComponent from '../../../components/commons/SearchDropdownComponent';

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto 24px;
`;

const InputWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

const DEFAULT_OPTIONS = ['제목', '제목+내용', '내용', '작성자', '댓글'];

const LogSearchComponent = ({ currentOption, onOptionChange, onSearchSubmit, placeholder = '내 페일로그를 검색해볼까요?', options = DEFAULT_OPTIONS }) => {
  return (
    <SearchRow>
      <InputWrapper>
        <SearchbarComponent onSubmit={onSearchSubmit} placeholder={placeholder} />
      </InputWrapper>
      <SearchDropdownComponent defaultValue={currentOption} onChange={onOptionChange} options={options} />
    </SearchRow>
  );
};

export default LogSearchComponent;
