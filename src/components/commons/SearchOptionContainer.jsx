import React from 'react';
import SearchOptionComponent from '././SearchOptionComponent';
import useSearchStore from '../useSearchStore';

const SearchOptionContainer = () => {
  
  const {setOrder2, setPage} = useSearchStore();

  const handleOnChangeDropDown = (option) => {
    switch(option) {
      case "최신순":
        setOrder2(0)
        setPage(1)
        break;
      case "좋아요 순":
        setOrder2(1)
        setPage(1)
        break;
      case "조회 순":
        setOrder2(2)
        setPage(1)
        break;
    }

  }
  
  return (
    <div>
      <SearchOptionComponent onChange={handleOnChangeDropDown}></SearchOptionComponent>
    </div>
  );
};

export default SearchOptionContainer;