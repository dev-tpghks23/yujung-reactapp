import React from 'react';
import S from '../styles/MyFailLogStyles';
import defaultProfile from '../../../../components/resources/default-profile.svg';
import eyeIcon from '../../../../components/resources/eye.svg';
import likeFilledIcon from '../../../../components/resources/like-fill2.svg';

const FeaturedLogComponent = ({ logs = [] }) => {
  const hasLikedPosts = logs.some(
    (log) => log.isLiked || (log.likeCount || log.likes || 0) > 0,
  );

  if (logs.length === 0 || !hasLikedPosts) return null;

  const topLogs = [...logs]
    .sort((a, b) => {
      const scoreA = (a.views || 0) + (a.likeCount || a.likes || 0);
      const scoreB = (b.views || 0) + (b.likeCount || b.likes || 0);
      return scoreB - scoreA;
    })
    .slice(0, 3);

  const featuredLog = topLogs[0];

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 60px' }}>
      <S.SectionHeader>
        <h2>나의 <span>페일로그</span></h2>
      </S.SectionHeader>

      <S.FeaturedContainer>
        <S.FeaturedListArea>
          <div className="TitleBox">
            <h3>당신의 가장 빛났던 실패 이야기</h3>
            <p>내가 작성한 페일로그 중<br />제일 관심이 많았던 게시글이 표시됩니다.</p>
          </div>

          {topLogs.map((log, idx) => (
            <S.FeaturedItem key={log.id ?? idx}>
              <h4>{log.title}</h4>
              <div className="Meta">
                <div className="User">
                  <img
                    src={log.profileImg || defaultProfile}
                    alt="profile"
                    style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  {log.author || '나의 기록'}
                </div>
                <div className="Stats">
                  <span>
                    <img src={eyeIcon} alt="조회수" style={{ width: '16px', height: '16px' }} />
                    {log.views || 0}
                  </span>
                  <span>
                    <img src={likeFilledIcon} alt="좋아요" style={{ width: '16px', height: '16px' }} />
                    {log.likeCount || log.likes || 0}
                  </span>
                </div>
              </div>
            </S.FeaturedItem>
          ))}
        </S.FeaturedListArea>

        <S.FeaturedMainImage>
          <img
            className="MainImg"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="featured"
          />
          <div className="BlackOverlay">
            <p>"{featuredLog.content?.substring(0, 70)}..."</p>
            <div className="AuthorInfo">
              <img
                src={featuredLog.profileImg || defaultProfile}
                alt="profile"
                style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover' }}
              />
              {featuredLog.author || '나의 기록'}
            </div>
          </div>
        </S.FeaturedMainImage>
      </S.FeaturedContainer>
    </div>
  );
};

export default FeaturedLogComponent;
