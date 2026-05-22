import React from 'react';
import SearchbarComponent from '../../../components/commons/SearchbarComponent';
import SearchDropdownComponent from '../../../components/commons/SearchDropdownComponent';

const LogSearchComponent = ({ currentOption, onOptionChange, onSearchSubmit, styles }) => {
  return (
    <styles.SearchControlBlock>
      <styles.DropdownWrapper>
        <SearchDropdownComponent
          defaultValue={currentOption}
          onChange={onOptionChange}
          style={{
            width: '160px',
            height: '48px',
            borderRadius: '9999px'
          }}
        />
      </styles.DropdownWrapper>

      <styles.SearchbarWrapper>
        <SearchbarComponent
          placeholder="내 페일로그 검색..."
          onSubmit={onSearchSubmit}
        />
      </styles.SearchbarWrapper>
    </styles.SearchControlBlock>
  );
};

export default LogSearchComponent;
