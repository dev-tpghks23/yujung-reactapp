import React from 'react';
import InfoS from '../styles/InfoManagementStyles';

const getStreakMessage = (days) => {
  if (days <= 0 || days === 1) {
    return {
      title: '첫 발걸음을 내딛었어요! 👣',
      sub: '오늘의 기록이 성장의 씨앗이 됩니다.',
    };
  }
  if (days === 2) {
    return {
      title: '이틀 연속 방문! 멈추지 마세요 ✨',
      sub: '연속 기록이 시작됐어요. 내일도 기대할게요!',
    };
  }
  return {
    title: `${days}일째 불타는 중!🔥`,
    sub: '작은 기록이 쌓일수록 더 단단해집니다.',
  };
};

/**
 * @param {number} communityCount - 작성한 커뮤니티 게시글 수
 * @param {number} logCount       - 작성한 페일로그 수
 * @param {number} todayVisitors  - 오늘 방문자 수
 * @param {number} loginStreak    - 연속 로그인 일수
 */
const ProfileStreakCard = ({
  communityCount = 0,
  logCount = 0,
  todayVisitors = 0,
  loginStreak = 1,
}) => {
  const { title, sub } = getStreakMessage(loginStreak);

  const stats = [
    { label: '작성 글 수',    value: communityCount },
    { label: '작성 로그 수',  value: logCount       },
    { label: '오늘 방문자 수', value: todayVisitors  },
  ];

  return (
    <InfoS.InfoCard>
      <InfoS.StreakHeader>
        <h3>{title}</h3>
        <p>{sub}</p>
      </InfoS.StreakHeader>

      <InfoS.StreakGrid>
        {stats.map((stat) => (
          <InfoS.StreakStat key={stat.label}>
            <strong>{stat.value.toLocaleString()}</strong>
            <span>{stat.label}</span>
          </InfoS.StreakStat>
        ))}
      </InfoS.StreakGrid>
    </InfoS.InfoCard>
  );
};

export default ProfileStreakCard;
