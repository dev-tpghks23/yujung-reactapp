import React, { useState } from 'react';
import CategoryComponent from './CategoryComponent';
import S from '../../styles/CategoryContainerStyle';
import useSearchStore from '../useSearchStore';

const CommunityCategoryContainer = ({ onCategorySelect }) => {
  const categories = ["전체", "공부/취업", "사업/창업", "인간관계", "건강/루틴", "기타"];
  const [selected, setSelected] = useState("전체");
  
  const handleSelect = (category, index) => {
    setSelected(category);

    if (onCategorySelect){
      onCategorySelect(category, index);
      // 카테고리의 인덱스 (ex index=1번) 선택되면, 그 값을 전달해주는 방식
      // 부모 페이지에서는 보내준 index 값을 받아서 zustand 스토어에 (setCategory)에 저장
    }
  }

  return (
    <S.container>
      {categories.map((category, index) => (
        <CategoryComponent
          key={category}
          content={category}
          selected={selected === category}
          onClick={() => handleSelect(category, index)}
          // 기존 코드에서 로직(categoryNum)이 위에 분리 됨.
        />
      ))}
    </S.container>
  );
};

export default CategoryContainer;