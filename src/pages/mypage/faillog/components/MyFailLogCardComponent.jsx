import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommS from '../../profile/styles/CommunityStyles';
import failLogIcon from '../resources/fail-log-card.png';
import MyFailCardItemComponent from '../../commons/MyFailCardItemComponent';

const MyFailLogCardComponent = ({ filteredLogs, selectedDeleteIds = [] }) => {
  const navigate = useNavigate();

  return (
    <CommS.PostGrid>
      {filteredLogs.map((log, index) => {
        const isSelected = selectedDeleteIds.includes(log.id);

        return (
          <MyFailCardItemComponent
            key={log.id}
            log={log}
            index={index}
            iconSrc={failLogIcon}
            isSelected={isSelected}
            onClick={() => navigate(`/logs/result/${log.id}/detail`)}
          />
        );
      })}
    </CommS.PostGrid>
  );
};

export default MyFailLogCardComponent;
