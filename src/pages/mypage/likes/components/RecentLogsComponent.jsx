import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/RecentLogStyles';
import failLogIcon from '../resources/fail-log-card.png'; // 기존 데코 이미지 재사용

/**
 * @param {Array} logs - 부모(Container)에게서 전달받은 최근 확인한 로그 리스트 (recentLogs)
 */
const RecentLogsComponent = ({ logs = [] }) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '40px auto 60px' }}>
      
      {/* 📌 섹션 헤더 타이틀 구역 */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1E293B', margin: '0 0 10px 0' }}>
          최근 확인한 <span style={{ color: '#6366F1' }}>페일로그</span>
        </h3>
        <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
          최근에 읽은 페일로그를 확인할 수 있습니다.
        </p>
      </div>

      {/* 📌 피그마 규격을 맞춘 최근 확인 카드 그리드 영역 */}
      {logs && logs.length > 0 ? (
        <S.RecentGrid>
          {logs.slice(0, 3).map((log) => (
            <S.RecentCard 
              key={log.id}
              onClick={() => navigate(`/logs/view/${log.id}`)} // 열람 상세 페이지 이동 라우팅 가이드
            >
              <S.RecentContent>
                {/* 🔥 [레이어 3] 필름 투명화 시 블랙으로 반전 가독성을 확보하는 콘텐츠 그룹 */}
                <div className="ContentGroup">
                  
                  <h4>{log.title || "제목 없는 페일로그"}</h4>
                  
                  {/* 작성자 아바타 영역 */}
                  <div className="AuthorArea">
                    <div className="ProfileIcon" style={{ background: '#CBD5E1', display: 'inline-block' }} />
                    <span>@{log.author || "익명 개발자"}</span>
                  </div>

                  {/* 하단 메타 정보 푸터 레이아웃 */}
                  <div className="CardFooter">
                    <span className="TimeText">{log.timeText || log.date || "방금 전"}</span>
                  </div>

                </div>

                {/* 📥 [레이어 1] 글자 밑 우하단 고정 데코레이션 일러스트 배경 */}
                <div className="CardMainImage">
                  <img src={failLogIcon} alt="" />
                </div>
              </S.RecentContent>
            </S.RecentCard>
          ))}
        </S.RecentGrid>
      ) : (
        /* 방어 코드: 내역이 비어있을 때 처리 */
        <p style={{ color: '#94A3B8', fontSize: '14px', padding: '40px 0', textAlign: 'center' }}>
          최근 확인한 페일로그 내역이 없습니다.
        </p>
      )}

    </div>
  );
};

export default RecentLogsComponent;