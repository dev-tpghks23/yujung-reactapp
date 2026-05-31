import React from 'react';
import styled from 'styled-components';
import SearchbarComponent from '../../../components/commons/SearchbarComponent';
import CommunitySearchOrderComponent from '../../community/list/components/CommunitySearchOrderComponent';

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

const LogSearchComponent = ({ currentOption, onOptionChange, onSearchSubmit, placeholder = '내 페일로그를 검색해볼까요?' }) => {
  return (
    <SearchRow>
      <InputWrapper>
        <SearchbarComponent onSubmit={onSearchSubmit} placeholder={placeholder} />
      </InputWrapper>
      <CommunitySearchOrderComponent defaultValue={currentOption} onChange={onOptionChange} />
    </SearchRow>
  );
};

export default LogSearchComponent;
