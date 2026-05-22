import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/RecentLogStyles';
import failLogIcon from '../resources/fail-log-card.png';
import defaultProfile from '../../../../components/resources/default-profile.svg';
import { formatRelativeTime } from '../../../../utils/relativeTime';

const RecentLogsComponent = ({ logs = [] }) => {
  const navigate = useNavigate();

  return (
    <S.RecentSection>
      <h2>최근 확인한 <span>페일로그</span></h2>

      {logs && logs.length > 0 ? (
        <S.RecentGrid>
          {logs.slice(0, 3).map((log) => (
            <S.RecentCard
              key={log.id}
              onClick={() => navigate(`/logs/view/${log.id}`)}
            >
              <S.RecentContent>
                <div className="ContentGroup">

                  <h4>{log.title || "제목 없는 페일로그"}</h4>

                  <div className="AuthorArea">
                    <img className="ProfileIcon" src={log.profileImg || defaultProfile} alt="profile" />
                    <span>@{log.author || "익명 개발자"}</span>
                  </div>

                  <div className="CardFooter">
                    <span className="TimeText">{formatRelativeTime(log.timeText || log.date) || "방금 전"}</span>
                  </div>

                </div>

                <div className="CardMainImage">
                  <img src={failLogIcon} alt="" />
                </div>
              </S.RecentContent>
            </S.RecentCard>
          ))}
        </S.RecentGrid>
      ) : (
        <S.EmptyText>최근 확인한 페일로그 내역이 없습니다.</S.EmptyText>
      )}

    </S.RecentSection>
  );
};

export default RecentLogsComponent;