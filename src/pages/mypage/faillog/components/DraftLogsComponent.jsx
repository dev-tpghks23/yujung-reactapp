import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 이동을 위한 navigate 추가
import LogS from '../styles/MyFailLogStyles';
import failLogIcon from '../resources/fail-log-card.png';

const DraftLogsComponent = ({ draftLogs }) => {
  const navigate = useNavigate(); // ✅ navigate 함수 초기화

  return (
    <LogS.DraftSection>
      <h2>아직 <span>작성 중인 페일로그</span>가 있어요.</h2>
      <LogS.DraftGrid>
        {draftLogs.map((log) => (
          <LogS.DraftCard 
            key={log.id} 
            bgColor={log.color}
            // ✅ 카드 클릭 시 해당 로그 ID를 파라미터로 이동
            onClick={() => navigate(`/logs/new/step1/${log.id}`)}
          >
            <div className="CardHeader">
              <h3>{log.title}</h3>
              <p>{log.content}</p>
            </div>

            <div className="CardImage">
              <img src={failLogIcon} alt="페일로그 카드 아이콘" />
            </div>

            <div className="CardFooter">
              <div className="InfoText">
                <div>진행도: {log.progress}%</div>
                <div>마지막 수정: {log.date}</div>
              </div>
              <div className="StatusTag">미완성</div>
            </div>
          </LogS.DraftCard>
        ))}
      </LogS.DraftGrid>
    </LogS.DraftSection>
  );
};

export default DraftLogsComponent;