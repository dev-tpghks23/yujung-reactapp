import React from 'react';
import { Outlet } from 'react-router-dom';
import useChronologyData from './useChronologyData';

const ChronologyMainContainer = () => {
  const context = useChronologyData();
  return <Outlet context={context} />;
};

export default ChronologyMainContainer;
