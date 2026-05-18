import React from 'react';
import CommS from '../../profile/styles/CommunityStyles';
import failLogIcon from '../resources/fail-log-card.png';
import MyFailCardItemComponent from '../../commons/MyFailCardItemComponent';

const MyFailLogCardComponent = ({ filteredLogs, selectedDeleteIds = [], onSelectOneLog }) => {
  return (
    <CommS.PostGrid 
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '30px', 
        justifyContent: 'flex-start', 
        width: '100%' 
      }}
    >
      {filteredLogs.map((log, index) => {
        const isSelected = selectedDeleteIds.includes(log.id);

        return (
          <MyFailCardItemComponent 
            key={log.id}
            log={log}
            index={index}
            iconSrc={failLogIcon}
            isSelected={isSelected} 
            onClick={() => onSelectOneLog?.(log.id)} 
          />
        );
      })}
    </CommS.PostGrid>
  );
};

export default MyFailLogCardComponent;