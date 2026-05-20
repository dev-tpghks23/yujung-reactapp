import React from 'react';
import S from '../styles/MyProfileStyle';
import likeFillIcon from '../../../../components/resources/like-fill2.svg';
import postIcon from '../../../../components/resources/post.svg';

const MyCommunityPostCard = ({ post, isSelected, onSelect, onNavigate }) => {
  const { category, title, content, author, date, likes, comments, imageUrl } = post;

  return (
    // 📌 카드 전체 클릭 시 상세 페이지 이동 (onNavigate 실행)
    <S.CardWrapper isSelected={isSelected} onClick={onNavigate} style={{ cursor: 'pointer' }}>
      {/* 1. 이미지 및 체크박스 영역 */}
      <S.ImageSection>
        <S.Thumbnail src={imageUrl || '/default-thumbnail.png'} alt={title} />
        
        {/* 📌 체크박스 오버레이 영역을 클릭할 때만 체크박스 토글 동작 */}
        <S.CheckboxOverlay onClick={(e) => e.stopPropagation()}>
          <input 
            type="checkbox" 
            checked={isSelected} 
            // 인풋 자체의 버블링도 한 번 더 방지
            onClick={(e) => e.stopPropagation()} 
            onChange={onSelect} 
          />
        </S.CheckboxOverlay>
        <S.TagLabel>{category}</S.TagLabel>
      </S.ImageSection>

      {/* 2. 텍스트 정보 영역 */}
      <S.PostContentSection>
        <S.PostTime>{date}</S.PostTime>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostSummary>{content}</S.PostSummary>
        
        {/* 3. 푸터 (작성자 및 통계) */}
        <S.CardFooter>
          <S.AuthorInfo>
            <S.AuthorIcon />
            <S.AuthorName>{author}</S.AuthorName>
          </S.AuthorInfo>
          <S.PostStats>
            <S.StatItem>
              <img src={likeFillIcon} alt="좋아요" style={{ width: '14px', height: '14px' }} />
              {likes}
            </S.StatItem>
            <S.StatItem>
              <img src={postIcon} alt="댓글" style={{ width: '14px', height: '14px' }} />
              {comments}
            </S.StatItem>
          </S.PostStats>
        </S.CardFooter>
      </S.PostContentSection>
    </S.CardWrapper>
  );
};

export default MyCommunityPostCard;