import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from "./styles/DraftLogsComponentStyle";
import failLogIcon from '../resources/fail-log-card.png';

const DraftLogsComponent = ({ draftLogs = [] }) => {
  const navigate = useNavigate();

  if (!draftLogs || draftLogs.length === 0) return null;

  return (
    <S.DraftSection>
      <h2>아직 <span>작성 중인 페일로그</span>가 있어요.</h2>

      <S.DraftGrid>
        {draftLogs.map((log) => (
          <S.DraftCard
            key={log.id}
            bgColor={log.color}
            onClick={() => navigate(`/logs/new/step1/${log.id}`)}
          >
            <div className="ContentGroup">
              <div className="CardHeader">
                <h3>{log.title || "제목 없는 페일로그"}</h3>
                <p>{log.content || "내용이 없습니다."}</p>
              </div>

              <div className="CardFooter">
                <div className="InfoText">
                  <div>진행도 : {log.progress ?? 0}%</div>
                  <div>마지막 수정 : {log.date || "방금 전"}</div>
                </div>
                <div className="StatusTag">미완성</div>
              </div>
            </div>

            <div className="CardImage">
              <img src={failLogIcon} alt="" />
            </div>
          </S.DraftCard>
        ))}
      </S.DraftGrid>
    </S.DraftSection>
  );
};

export default DraftLogsComponent;