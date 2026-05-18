import React from 'react';

/**
 * @param {Array} logs - 부모(Container)에게서 전달받은 최근 확인한 로그 리스트 (recentLogs)
 */
const RecentLogsComponent = ({ logs = [] }) => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '40px auto 60px' }}>
      {/* 섹션 헤더 타이틀 구역 */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', margin: '0 0 8px 0' }}>
          최근 확인한 페일로그
        </h3>
        <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
          최근 3일 동안 세종님이 열람했던 다른 개발자들의 실패 기록입니다.
        </p>
      </div>

      {/* 가로 스크롤 혹은 유연한 배치를 위한 리스트 영역 */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
        gap: '20px' 
      }}>
        {logs.length > 0 ? (
          logs.map((log) => (
            <div 
              key={log.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '120px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              }}
            >
              {/* 로그 타이틀 (2줄 말줄임 처리 적용) */}
              <h4 style={{ 
                fontSize: '15px', 
                fontWeight: '600', 
                color: '#334155', 
                margin: '0 0 16px 0',
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {log.title}
              </h4>

              {/* 하단 메타 정보 영역 */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                fontSize: '13px',
                color: '#94A3B8'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569' }}>
                  {/* 작은 아바타 인라인 플레이스홀더 */}
                  <div style={{ 
                    width: '18px', 
                    height: '18px', 
                    background: '#CBD5E1', 
                    borderRadius: '50%',
                    display: 'inline-block'
                  }} />
                  <span>@{log.author}</span>
                </div>
                <span>{log.date}</span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', color: '#94A3B8', fontSize: '14px', padding: '20px 0' }}>
            최근 확인한 페일로그 내역이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentLogsComponent;