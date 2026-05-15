import { createContext, useContext } from 'react';

export const ReportContext = createContext(null);

export const useReportContext = () => useContext(ReportContext);
