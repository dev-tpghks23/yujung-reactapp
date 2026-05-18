import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import ChronologyTimeline from './ChronologyTimeline';

const ChronologyMain = () => {
  const context = useOutletContext();
  const navigate = useNavigate();

  return (
    <ChronologyTimeline
      {...context}
      onStartAnalysis={() => navigate('analysis')}
      onReorderTimeline={context.onReorderTimeline}
      onRemoveTimeline={context.onRemoveTimeline}
    />
  );
};

export default ChronologyMain;
