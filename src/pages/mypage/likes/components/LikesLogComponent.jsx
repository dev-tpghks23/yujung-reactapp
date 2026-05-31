import React from 'react';
import CommS from '../../profile/styles/CommunityStyles';
import failLogIcon from '../../faillog/resources/fail-log-card.png';
import LikesCardItemComponent from './LikesCardItemComponent';

const LikesLogComponent = ({ filteredLogs = [], onUnlikeOne, isPageOwner }) => {
  return (
    <CommS.PostGrid>
      {filteredLogs.map((log) => (
        <LikesCardItemComponent
          key={log.id}
          log={log}
          iconSrc={failLogIcon}
          onUnlike={isPageOwner ? onUnlikeOne : undefined}
        />
      ))}
    </CommS.PostGrid>
  );
};

export default LikesLogComponent;
