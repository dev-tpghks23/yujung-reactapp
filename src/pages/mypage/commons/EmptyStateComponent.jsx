import React from 'react';

const EmptyStateComponent = ({ title, subText, buttonText, onButtonClick, styles }) => {
  return (
    <styles.EmptyStateWrapper>
      <styles.EmptyTitle>
        {title}
      </styles.EmptyTitle>
      <styles.EmptySubText>
        {subText}
      </styles.EmptySubText>
      {buttonText && onButtonClick && (
        <styles.StartButton onClick={onButtonClick}>
          {buttonText}
        </styles.StartButton>
      )}
    </styles.EmptyStateWrapper>
  );
};

export default EmptyStateComponent;