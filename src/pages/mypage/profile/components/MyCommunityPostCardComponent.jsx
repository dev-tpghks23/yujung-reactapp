import React from 'react';
import S from '../styles/MyProfileStyle';
import likeFillIcon from '../../../../components/resources/like-fill2.svg';
import postIcon from '../../../../components/resources/post.svg';
import defaultProfile from '../../../../components/resources/default-profile.svg';

const MyCommunityPostCardComponent = ({ post, isSelected, onSelect, onNavigate, isPageOwner = true }) => {
  const { category, title, content, author, date, likes, comments, imageUrl } = post;

  return (
    <S.CardWrapper isSelected={isSelected} onClick={onNavigate}>
      <S.ImageSection>
        <S.Thumbnail src={imageUrl || '/default-thumbnail.png'} alt={title} />

        {isPageOwner && (
          <S.CheckboxOverlay onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={isSelected}
              onClick={(e) => e.stopPropagation()}
              onChange={onSelect}
            />
          </S.CheckboxOverlay>
        )}
        <S.TagLabel>{category}</S.TagLabel>
      </S.ImageSection>

      <S.PostContentSection>
        <S.PostTime>{date}</S.PostTime>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostSummary>{content}</S.PostSummary>

        <S.CardFooter>
          <S.AuthorInfo>
            <img src={defaultProfile} alt="profile" />
            <S.AuthorName>{author}</S.AuthorName>
          </S.AuthorInfo>
          <S.PostStats>
            <S.StatItem>
              <img src={likeFillIcon} alt="좋아요" />
              {likes}
            </S.StatItem>
            <S.StatItem>
              <img src={postIcon} alt="댓글" />
              {comments}
            </S.StatItem>
          </S.PostStats>
        </S.CardFooter>
      </S.PostContentSection>
    </S.CardWrapper>
  );
};

export default MyCommunityPostCardComponent;
