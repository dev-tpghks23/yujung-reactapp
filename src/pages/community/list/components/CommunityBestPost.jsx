import React from 'react';
//import S from '../../style';
import CommunityBestPostStyle from '../../styles/CommunityBestPostStyle';
import S from '../../style';

import icon04 from '../../resources/icon04.png'
import study from '../../resources/study.jpg'
import eye from '../../resources/eye.svg'
import heart from '../../resources/like.svg'
import post from '../../resources/post.svg'
import heartFill from '../../resources/like-fill2.svg'
import thumbnailEmpty from '../../resources/month-image-empty.png'
import defaultProfile from '../../resources/default.png'
import { useNavigate } from 'react-router-dom';
import { goToMemberProfile } from '../../../../utils/profileNavigation';

const CommunityBestPost = ({
  id,
  memberId,
  title,
  content,
  date,
  thumbnail,
  profile,
  author,
  views,
  likes,
  isLike,
  comments,
}) => {

  // title 기출만 파다가 실전에서 백지 된 썰.
  // content 익숙한 환경에만 매달린 공부 방식이 문제였습니다. 장소, 시간, 복습 <br/> 방법을 바꾸면서 점점 실전 감각을 회복헀던 과정을 정리했습니다.
  // date 2026년 3월 1일
  // thumbnail study
  // profile icon04
  // author 필기마스터
  // views 99
  // likes 777
  // comments 999

  const navigate = useNavigate();

  const myStyle = CommunityBestPostStyle;

  const handledOnErrorImg = (e) => {
    e.target.src = defaultProfile;
  }

  return (
    <div>
        <myStyle.BestPostWrap>
            <myStyle.BestPost onClick={() => navigate(`/community/detail/${id}`)}>
                <myStyle.BestPostLeftLine></myStyle.BestPostLeftLine>
                <myStyle.BestPostMainWrapDiv>
                    <myStyle.BestPostMainDiv>
                        <myStyle.BestPostMainHeader>
                          <myStyle.BestPostMainHeaderTitle>
                              <S.Span size={"h8Bold"} color={"faillog_purple"}>이번달 좋아요 최다 게시글</S.Span>
                          </myStyle.BestPostMainHeaderTitle>
                          <S.Span size={"h8Regular"} color={"faillog_gray9"}>{date}</S.Span>
                        </myStyle.BestPostMainHeader>
                        <myStyle.BestPostMainTitle>
                          <S.Span2 size={"h4Bold"} color={"faillog-black"} lineclamp={2}>{title}<br/>
                      공부 환경부터 바꾸고 나서니 변화가생긴 썰</S.Span2>
                        </myStyle.BestPostMainTitle>
                        <myStyle.BestPostMainContent>
                          <S.Span2 size={"h7-regular"} color={"faillog_gray9"} lineclamp={2}>{content}</S.Span2>
                        </myStyle.BestPostMainContent>
                        <myStyle.BestPostMainHr></myStyle.BestPostMainHr>
                        <myStyle.BestPostMainInfo>
                          <myStyle.UserInfo>
                            <myStyle.AuthorArea onClick={(e) => { e.stopPropagation(); goToMemberProfile(navigate, memberId); }}>
                              <myStyle.UserImg src={profile || defaultProfile} onError={handledOnErrorImg}></myStyle.UserImg>
                              <S.Span size={"h8Regular"} color={"faillog_black"}>{author}</S.Span>
                            </myStyle.AuthorArea>
                            <myStyle.PostInfo>
                              <myStyle.infoElement>
                                <img src={eye} width={18} height={14} />
                                <S.Span size={"h8Regular"} color={"faillog_black"}>{views}</S.Span>
                              </myStyle.infoElement>
                              <myStyle.infoElement>
                                <img src={isLike ? heartFill : heart} width={18} height={18} />
                                <S.Span size={"h8Regular"} color={"faillog_black"}>{likes}</S.Span>
                              </myStyle.infoElement>
                              <myStyle.infoElement>
                                <img src={post} width={18} height={18} />                              
                                <S.Span size={"h8Regular"} color={"faillog_black"}>{comments}</S.Span>
                              </myStyle.infoElement>
                            </myStyle.PostInfo>
                          </myStyle.UserInfo>
                        </myStyle.BestPostMainInfo>
                        {/* <myStyle.BestPostMainButton>
                          <myStyle.GoPostInfoButton onClick={() => navigate("detail/"+id)}>
                              <S.Span size={"h8ExBold8"} color={"faillog_purple"}>게시글 상세보기</S.Span>
                              <S.Span size={"h8ExBold8"} color={"faillog_purple"}>→</S.Span>
                          </myStyle.GoPostInfoButton>
                        </myStyle.BestPostMainButton> */}
                    </myStyle.BestPostMainDiv>
                </myStyle.BestPostMainWrapDiv>

                {/* 이미지 영역 */}
                <myStyle.BestPostImgWrapDiv>
                  <myStyle.BestPostImg src={thumbnail ? thumbnail : thumbnailEmpty} />
                </myStyle.BestPostImgWrapDiv>
            </myStyle.BestPost>
        </myStyle.BestPostWrap>
    </div>
  );
};

export default CommunityBestPost;