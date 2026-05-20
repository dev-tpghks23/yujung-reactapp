import React from 'react';
import CommS from '../../profile/styles/CommunityStyles';
import failLogIcon from '../../faillog/resources/fail-log-card.png';
import LikesCardItemComponent from './LikesCardItemComponent';

const LikesLogComponent = ({ filteredLogs = [], onUnlikeOne }) => {
  return (
    <CommS.PostGrid
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      {filteredLogs.map((log) => (
        <LikesCardItemComponent
          key={log.id}
          log={log}
          iconSrc={failLogIcon}
          onUnlike={onUnlikeOne}
        />
      ))}
    </CommS.PostGrid>
  );
};

export default LikesLogComponent;
