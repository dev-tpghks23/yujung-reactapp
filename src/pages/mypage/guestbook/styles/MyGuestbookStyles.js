import styled from 'styled-components';
import { colorCSS, sizeCSS, gradientText } from '../../../../components/style';
import theme from '../../../../styles/theme';

const S = {};

/* ── 섹션 래퍼 ── */
S.GuestbookSection = styled.section`
  width: 100%;
  max-width: 1096px;
  margin: 0 auto;
  padding: 60px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/* ── 섹션 헤더 ── */
S.GuestbookHeader = styled.div`
  margin-bottom: 8px;

  h2 {
    ${sizeCSS['h3_2Bold']}
    color: ${colorCSS['faillog-black']};
    margin: 0 0 10px 0;
    span {
      ${gradientText}
    }
  }

  p {
    ${sizeCSS['h9-regular']}
    color: ${colorCSS['faillog_gray9']};
    margin: 0;
  }
`;

/* ── 입력 카드 ── */
S.InputCard = styled.div`
  width: 100%;
  border-radius: 14px;
  padding: 20px 24px;
  background: ${colorCSS['faillog_white']};
  border: 1px solid ${colorCSS['faillog_gray4']};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

S.CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  border: none;
  padding: 0;
  ${sizeCSS['h8-regular']}
  color: ${colorCSS['faillog-black']};
  background: transparent;
  resize: none;
  outline: none;
  line-height: 1.75;

  &::placeholder {
    ${sizeCSS['h9-regular']}
    color: ${colorCSS['faillog_gray9']};
  }
`;

S.InputFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${colorCSS['faillog_gray2']};
  padding-top: 12px;
`;

S.SubmitButton = styled.button`
  border: none;
  outline: none;
  background: ${colorCSS['faillog_purple']};
  color: ${colorCSS['faillog_white']};
  font-weight: 700;
  font-size: 14px;
  border-radius: 999px;
  height: 36px;
  min-width: 72px;
  padding: 0 22px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover { opacity: 0.88; transform: translateY(-1px); }
  &:disabled {
    background: ${colorCSS['faillog_light_purple']};
    color: ${colorCSS['faillog_purple']};
    cursor: not-allowed;
    transform: none;
  }
`;

/* ── 검색 바 ── */
S.SearchBar = styled.div`
  width: 100%;
  background: ${colorCSS['faillog_white']};
  border: 1px solid ${colorCSS['faillog_gray4']};
  border-radius: 999px;
  padding: 7px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.SmallSearchInput = styled.input`
  flex: 1;
  height: 30px;
  border: none;
  padding: 0 6px;
  ${sizeCSS['h9-regular']}
  color: ${colorCSS['faillog-black']};
  outline: none;
  background: transparent;

  &::placeholder { color: ${colorCSS['faillog_gray8']}; }
`;

/* ── 댓글 목록 ── */
S.CommentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* ── 댓글 블록 (메인 카드, 답글 모두 포함) ── */
S.CommentCard = styled.article`
  position: relative;
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${colorCSS['faillog_gray4']};
  background: ${colorCSS['faillog_white']};
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* ── 댓글 헤더 행 (아바타 + 작성자 + 시간 | ··· 버튼) ── */
S.CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.CommentHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #eef2ff;
  color: #4338ca;
  font-weight: 800;
  overflow: hidden;

  img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

S.CommentAuthor = styled.span`
  ${sizeCSS['h8-bold']}
  color: ${colorCSS['faillog-black']};
`;

S.CommentTime = styled.span`
  ${sizeCSS['h11-regular']}
  color: ${colorCSS['faillog_gray9']};
`;

/* ── 댓글 본문 ── */
S.CommentText = styled.p`
  margin: 0;
  ${sizeCSS['h8-regular']}
  color: ${colorCSS['faillog_gray10']};
  line-height: 1.75;
  white-space: pre-wrap;
  word-break: break-word;

  ${({ $clamped }) => $clamped && `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

S.SeeMoreButton = styled.button`
  border: none;
  background: transparent;
  color: ${colorCSS['faillog_purple']};
  ${sizeCSS['h9-regular']}
  cursor: pointer;
  padding: 0;
  margin-top: 4px;
  display: block;

  &:hover { text-decoration: underline; }
`;

/* ── 댓글 하단 (좋아요 + 답글 버튼) ── */
S.CommentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

S.Reaction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  ${sizeCSS['h9-regular']}
  border: none;
  background: transparent;
  color: ${({ liked }) => (liked ? '#ef4444' : colorCSS['faillog_gray8'])};
  cursor: pointer;
  padding: 0;

  img { width: 16px; height: 16px; }
`;

S.ReplyAction = styled.button`
  border: none;
  background: transparent;
  color: ${colorCSS['faillog_gray9']};
  ${sizeCSS['h9-regular']}
  cursor: pointer;
  padding: 0;

  &:hover { color: ${colorCSS['faillog_blue']}; }
`;

/* ── ··· 메뉴 버튼 ── */
S.CommentMenu = styled.button`
  border: none;
  background: transparent;
  color: ${colorCSS['faillog_gray9']};
  font-size: 16px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  flex-shrink: 0;

  &:hover { background: ${colorCSS['faillog_gray1']}; }
`;

S.MenuDropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 24px;
  width: 100px;
  height: auto;
  border-radius: 12px;
  background: ${colorCSS['faillog_white']};
  border: 1px solid ${colorCSS['faillog_gray2']};
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.1);
  overflow: hidden;
  z-index: 10;
`;

S.MenuItem = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background: transparent;
  padding: 0 12px;
  text-align: left;
  display: flex;
  align-items: center;
  color: ${colorCSS['faillog-black']};
  ${sizeCSS['h8-regular']}
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${colorCSS['faillog_gray1']};
    color: ${colorCSS['faillog_purple']};
  }
`;

/* ── 답글 목록 (댓글 카드 내부) ── */
S.ReplyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 4px;
`;

S.ReplyCard = styled.div`
  border-radius: 12px;
  background: ${colorCSS['faillog_gray1']};
  border: 1px solid ${colorCSS['faillog_gray2']};
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

S.ReplyAvatar = styled(S.Avatar)`
  width: 24px;
  height: 24px;
  font-size: 10px;
`;

/* 답글 입력 (댓글 카드 내부, 구분선 위) */
S.ReplyInputWrapper = styled.div`
  border-top: 1px solid ${colorCSS['faillog_gray2']};
  padding-top: 16px;
  margin-top: 4px;
`;

/* 신고하기 버튼 (남의 답글에만 노출) */
S.ReportButton = styled.button`
  border: none;
  background: transparent;
  color: ${colorCSS['faillog_gray8']};
  ${sizeCSS['h10-regular']}
  cursor: pointer;
  padding: 0;
  margin-left: auto;

  &:hover { color: ${colorCSS['faillog-red']}; text-decoration: underline; }
`;

/* ── 수정 모드 ── */
S.EditTextarea = styled.textarea`
  width: 100%;
  min-height: 72px;
  border: 1px solid ${colorCSS['faillog_purple']};
  border-radius: 10px;
  padding: 10px 14px;
  ${sizeCSS['h8-regular']}
  color: ${colorCSS['faillog-black']};
  outline: none;
  resize: none;
  line-height: 1.75;
  background: ${colorCSS['faillog_white']};

  &:focus { box-shadow: 0 0 0 3px rgba(171, 71, 255, 0.12); }
`;

S.EditActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

S.EditSaveBtn = styled.button`
  border: none;
  background: ${colorCSS['faillog_purple']};
  color: ${colorCSS['faillog_white']};
  font-weight: 700;
  font-size: 13px;
  border-radius: 999px;
  padding: 6px 18px;
  cursor: pointer;
  &:hover { opacity: 0.88; }
`;

S.EditCancelBtn = styled.button`
  border: 1px solid ${colorCSS['faillog_gray4']};
  background: transparent;
  color: ${colorCSS['faillog_gray9']};
  font-size: 13px;
  border-radius: 999px;
  padding: 6px 18px;
  cursor: pointer;
  &:hover { background: ${colorCSS['faillog_gray1']}; }
`;

/* ── 빈 상태 ── */
S.EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0 60px;
  text-align: center;

  h3 {
    ${sizeCSS['h3Bold']}
    color: ${colorCSS['faillog-black']};
    margin: 0 0 20px;
    span {
      ${gradientText}
    }
  }

  p {
    ${sizeCSS['h4Regular']}
    color: ${colorCSS['faillog_gray10']};
    line-height: 1.8;
    margin: 0 0 40px;
  }

  button {
    padding: 12px 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 200%;
    background-position: 0% 50%;
    transition: background-position 0.6s ease;
    color: ${colorCSS['faillog_white']};
    ${sizeCSS['h8-bold']}
    border: none;
    cursor: pointer;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    &:hover { background-position: 100% 50%; }
  }
`;

export default S;
