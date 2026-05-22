import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 0;
  border-top: 1px solid #E2E8F0;
  margin-top: 20px;
  font-family: inherit;
`;

S.CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.Checkbox = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

S.Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
`;

S.CountText = styled.span`
  color: #64748B;
  margin-left: 4px;
  font-weight: 400;
`;

S.CountHighlight = styled.span`
  color: #6c5ce7;
  font-weight: 600;
`;

S.ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

S.RestoreButton = styled.button`
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 600;
  background-color: ${(props) => (props.$active ? '#E2E8F0' : '#F1F5F9')};
  color: ${(props) => (props.$active ? '#334155' : '#94A3B8')};
  border: 1px solid #CBD5E1;
  border-radius: 6px;
  cursor: ${(props) => (props.$active ? 'pointer' : 'not-allowed')};
  transition: all 0.2s;
`;

S.DeleteButton = styled.button`
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 600;
  background-color: ${(props) => (props.$active ? '#6c5ce7' : '#F1F5F9')};
  color: ${(props) => (props.$active ? '#ffffff' : '#94A3B8')};
  border: ${(props) => (props.$active ? 'none' : '1px solid #E2E8F0')};
  border-radius: 6px;
  cursor: ${(props) => (props.$active ? 'pointer' : 'not-allowed')};
  transition: all 0.2s;
`;

export default S;
