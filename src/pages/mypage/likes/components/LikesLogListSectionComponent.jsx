import React from 'react';
import CommS from '../../profile/styles/CommunityStyles';
import LogS from '../../faillog/styles/MyFailLogStyles';

import LogSearchComponent from '../../commons/LogSearchComponent';
import EmptyStateComponent from '../../commons/EmptyStateComponent';
import PagenationComponent from '../../../../components/commons/PagenationComponent';
import LikesLogComponent from './LikesLogComponent';

const LikesLogListSectionComponent = ({
  searchOption,
  setSearchOption,
  handleSearchSubmit,
  filteredLogs,
  currentPage,
  totalPages,
  handlePageChange,
  navigate,
  onUnlikeOne,
  isPageOwner = true,
}) => {
  return (
    <LogS.LogSection>
      <LogSearchComponent
        currentOption={searchOption}
        onOptionChange={setSearchOption}
        onSearchSubmit={handleSearchSubmit}
        styles={LogS}
      />

      {filteredLogs.length === 0 ? (
        <EmptyStateComponent
          title={<>검색 결과가 없네요.<br /><strong>다른 키워드로 찾아볼까요?</strong></>}
          subText="실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다."
          buttonText="피드 보러가기"
          onButtonClick={() => navigate('/feed')}
          styles={CommS}
        />
      ) : (
        <>
          <LikesLogComponent
            filteredLogs={filteredLogs}
            onUnlikeOne={onUnlikeOne}
            isPageOwner={isPageOwner}
          />

          <LogS.PaginationWrapper>
            <PagenationComponent
              minPage={1}
              maxPage={totalPages}
              page={currentPage}
              onPageChange={handlePageChange}
            />
          </LogS.PaginationWrapper>
        </>
      )}
    </LogS.LogSection>
  );
};

export default LikesLogListSectionComponent;
