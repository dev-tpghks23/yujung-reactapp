import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/MyFailLogStyles';
import defaultProfile from '../../../../components/resources/default-profile.svg';
import eyeIcon from '../../../../components/resources/eye.svg';
import likeFilledIcon from '../../../../components/resources/like-fill2.svg';
import defaultThumbnail from '../../../log/other/otherLog_thumbNail/Group 2956.png';

const FeaturedLogComponent = ({ logs = [], isPageOwner = true, ownerNickname = '' }) => {
  const navigate = useNavigate();

  const goToLog = (logId) => {
    navigate(`/logs/result/${logId}/detail`);
  };

  const hasLikedPosts = logs.some(
    (log) => log.isLiked || (log.likeCount || log.likes || 0) > 0,
  );

  if (logs.length === 0 || !hasLikedPosts) return null;

  const topLogs = [...logs]
    .sort((a, b) => {
      const likeA = a.likeCount || a.likes || 0;
      const likeB = b.likeCount || b.likes || 0;
      if (likeB !== likeA) return likeB - likeA;
      return (b.views || 0) - (a.views || 0);
    })
    .slice(0, 3);

  const featuredLog = topLogs[0];

  return (
    <S.FeaturedWrapper>
      <S.SectionHeader>
        <h2>{isPageOwner ? '나의' : `${ownerNickname}님의`} <span>페일로그</span></h2>
      </S.SectionHeader>

      <S.FeaturedContainer>
        <S.FeaturedListArea>
          <div className="TitleBox">
            <h3>{isPageOwner ? '당신의' : `${ownerNickname}님의`} 가장 빛났던 실패 이야기</h3>
            <p>{isPageOwner ? '내가' : `${ownerNickname}님이`} 작성한 페일로그 중<br />제일 관심이 많았던 게시글이 표시됩니다.</p>
          </div>

          {topLogs.map((log, idx) => (
            <S.FeaturedItem key={log.id ?? idx} onClick={() => goToLog(log.id)}>
              <h4>{log.title}</h4>
              <div className="Meta">
                <div className="User">
                  <img src={log.profileImg || defaultProfile} alt="profile" />
                  {log.author || (isPageOwner ? '나의 기록' : ownerNickname)}
                </div>
                <div className="Stats">
                  <span>
                    <img src={eyeIcon} alt="조회수" />
                    {log.views || 0}
                  </span>
                  <span>
                    <img src={likeFilledIcon} alt="좋아요" />
                    {log.likeCount || log.likes || 0}
                  </span>
                </div>
              </div>
            </S.FeaturedItem>
          ))}
        </S.FeaturedListArea>

        <S.FeaturedMainImage onClick={() => goToLog(featuredLog.id)}>
          <img
            className="MainImg"
            src={featuredLog.thumbnailUrl || defaultThumbnail}
            alt="featured"
          />
          <div className="BlackOverlay">
            <p>"{featuredLog.content?.substring(0, 70)}..."</p>
            <div className="AuthorInfo">
              <img src={featuredLog.profileImg || defaultProfile} alt="profile" />
              {featuredLog.author || (isPageOwner ? '나의 기록' : ownerNickname)}
            </div>
          </div>
        </S.FeaturedMainImage>
      </S.FeaturedContainer>
    </S.FeaturedWrapper>
  );
};

export default FeaturedLogComponent;
