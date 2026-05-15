import React, { useRef } from 'react';
import myStyle from '../commons/styles/SearchbarComponentStyle'

import shine from '../resources/shine.svg'
import upArrow from '../resources/arrow-up.svg'

const SearchbarComponent = ({onSubmit, placeholder = "ex)게시글을 검색해볼까요?"}) => {

  const input = useRef([]);

  const handleOnClick = () => {
      if(input.current[0].value !== "") {
        onSubmit?.(input.current[0].value)
        input.current[0].value = "";
      }
  }

  const handleKeyDown = (e) => {
      if(e.target.value !== "" && e.key === "Enter") {
        onSubmit?.(e.target.value)
        e.target.value = "";
      }
  }

  return (
    <div>
      <myStyle.component>
        <myStyle.contentLeft>
          <myStyle.image1 src={shine}></myStyle.image1>
          <myStyle.search maxLength='100'
            placeholder={placeholder} 
            ref={(el) => {input.current[0] = el}} 
            onKeyDown={handleKeyDown}></myStyle.search>
        </myStyle.contentLeft>
        <myStyle.searchButton onClick={handleOnClick}>
          <myStyle.buttonImage src={upArrow}></myStyle.buttonImage>
        </myStyle.searchButton>
      </myStyle.component>
    </div>
  );
};

export default SearchbarComponent;