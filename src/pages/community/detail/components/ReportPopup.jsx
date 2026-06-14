import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import S, { colorCSS } from '../../style.js';

import check from  '../../resources/check-small.svg'
import defaultImage from '../../resources/default.png'

const REPORT_REASONS = [
  { id: 'ad',      title: '광고 / 도배',   desc: '홍보성 댓글' },
  { id: 'abuse',   title: '욕설 / 비하',   desc: '불쾌한 표현' },
  { id: 'privacy', title: '개인정보노출',  desc: '연락처등' },
  { id: 'other',   title: '기타',          desc: '직접작성' },
];

const REASON_CATEGORY_MAP = { ad: 1, abuse: 2, privacy: 3, other: 4 };

const API_URL_MAP = {
  '게시글': 'http://localhost:10000/api/CommunityReport/post',
  '댓글':   'http://localhost:10000/api/CommunityReport/reply',
  '대댓글': 'http://localhost:10000/api/CommunityReport/rereply',
  '방명록':       'http://localhost:10000/api/guestbook/report/comment',
  '방명록 답글':   'http://localhost:10000/api/guestbook/report/reply',
  '방명록 대댓글': 'http://localhost:10000/api/guestbook/report/rereply',
};

// type: 팝업 종류 (게시글/댓글/대댓글), id: 신고 대상 id, memberId: 로그인 멤버 id(신고자 멤버 id)
// profileImg: 작성자 프로필 이미지, author: 작성자, content: 내용
// onClose: 팝업 닫기 이벤트
const ReportPopup = ({ type = '댓글', id, memberId, profileImg, author, content, onClose = () => {} }) => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [reportText, setReportText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildBody = () => {
    const categoryId = REASON_CATEGORY_MAP[selectedReason];
    if (type === '게시글') return { memberId, postId: id, reportReasonCategoryId: categoryId, postReportContent: reportText };
    if (type === '댓글')   return { memberId, replyId: id, reportReasonCategoryId: categoryId, replyReportContent: reportText };
    if (type === '대댓글') return { memberId, rereplyId: id, reportReasonCategoryId: categoryId, rereplyReportContent: reportText };
    if (type === '방명록')       return { memberId, guestbookId: id, reportReasonCategoryId: categoryId, guestbookReportContent: reportText };
    if (type === '방명록 답글')   return { memberId, guestbookReplyId: id, reportReasonCategoryId: categoryId, guestbookReplyReportContent: reportText };
    if (type === '방명록 대댓글') return { memberId, guestbookRereplyId: id, reportReasonCategoryId: categoryId, guestbookRereplyReportContent: reportText };
  };

  const handleSubmit = async () => {
    if (!selectedReason) return;
    const url = API_URL_MAP[type];
    if (!url) return;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildBody()),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (json.success) setSubmitted(true);
  };

  const handledOnErrorImg = (e) => {
    e.target.src = defaultImage;
  }

  if (submitted) {
    return (
      <Overlay>
        <CompletedPopup>
          <CheckCircle>
            <CheckMark />
          </CheckCircle>
          <S.Span size="h9Regular">신고 완료되었습니다.</S.Span>
          <ConfirmBtn onClick={onClose}>
            <S.Span size="h8Bold" color="faillog_white">확인</S.Span>
          </ConfirmBtn>
        </CompletedPopup>
      </Overlay>
    );
  }

  return (
    <Overlay>
      <Popup>
        <Header>
          <S.Span size="h6Bold">{type} 신고하기</S.Span>
          <CloseBtn onClick={onClose}>✕</CloseBtn>
        </Header>

        <SubTitle>
          <S.Span size="h8Regular">부적절한 {type} 사유를 선택해주세요.</S.Span>
        </SubTitle>

        <ProfileBox>
          {profileImg && <ProfileImg src={profileImg} onError={handledOnErrorImg} alt={author} />}
          <ProfileRight>
            <S.Span size="h9Bold">{author}</S.Span>
            <S.Span2 size="h9Regular" color="faillog_gray9" lineclamp={2}>{content}</S.Span2>
          </ProfileRight>
        </ProfileBox>

        <ReasonList>
          {REPORT_REASONS.map((reason) => (
            <ReasonBox
              key={reason.id}
              selected={selectedReason === reason.id}
              onClick={() => setSelectedReason(reason.id)}
            >
              <ReasonText>
                <S.Span size="h9Bold">{reason.title}</S.Span>
                <S.Span size="h10Regular" color="faillog_gray9">{reason.desc}</S.Span>
              </ReasonText>
              <RadioCircle selected={selectedReason === reason.id}>
                {selectedReason === reason.id && <RadioCheck src={check} alt="check" />}
              </RadioCircle>
            </ReasonBox>
          ))}
        </ReasonList>

        <ContentTextArea
          placeholder="내용을 입력하세요."
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
        />

        <Divider />

        <ButtonRow>
          <CancelBtn onClick={onClose}>
            <S.Span size="h9Regular">취소</S.Span>
          </CancelBtn>
          <SubmitBtn onClick={handleSubmit}>
            <S.Span size="h9Bold" color="faillog_white">신고하기</S.Span>
          </SubmitBtn>
        </ButtonRow>
      </Popup>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const Popup = styled.div`
  width: 648px;
  height: 895px;
  background: #fff;
  border-radius: 15px;
  padding: 33px 39px 41px 39px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${colorCSS["faillog_gray8"]};
  padding: 0;
`

const SubTitle = styled.div`
  margin-top: 13px;
`

const ProfileBox = styled.div`
  width: 568px;
  height: 133px;
  margin-top: 25px;
  background: ${colorCSS["faillog_gray1"]};
  border-radius: 10px;
  padding: 18px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  overflow: hidden;
`

const ProfileImg = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`

const ReasonList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const ReasonBox = styled.div`
  width: 568px;
  height: 78px;
  border: 1px solid ${({ selected }) => selected ? colorCSS["faillog_purple"] : colorCSS["faillog_gray2"]};
  border-radius: 10px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.2s;
`

const ReasonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const RadioCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => selected ? colorCSS["faillog_purple"] : colorCSS["faillog_gray4"]};
  background: ${({ selected }) => selected ? colorCSS["faillog_purple"] : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  /* transition: all 0.2s; */
`

const RadioCheck = styled.img`
  width: 14px;
  height: 14px;
  filter: brightness(0) invert(1);
`

const ContentTextArea = styled.textarea`
  width: 568px;
  height: 100px;
  margin-top: 16px;
  background: ${colorCSS["faillog-sector-gray"]};
  border: none;
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
  resize: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: ${colorCSS["faillog-black"]};

  &::placeholder {
    color: ${colorCSS["faillog_gray9"]};
  }

  &:focus {
    outline: none;
  }
`

const Divider = styled.div`
  width: 568px;
  height: 1px;
  background: ${colorCSS["faillog_gray2"]};
  margin-top: 29px;
`

const ButtonRow = styled.div`
  margin-top: 41px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`

const CancelBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
`

const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${colorCSS["faillog_purple"]};
  cursor: pointer;
`

/* ── 신고 완료 팝업 ── */

const CompletedPopup = styled.div`
  width: 648px;
  height: 774px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  animation: ${fadeIn} 0.4s ease;
`

const CheckCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${colorCSS["faillog_light_purple"]};
  display: flex;
  align-items: center;
  justify-content: center;
`

const CheckMark = styled.div`
  width: 12px;
  height: 22px;
  border-right: 3px solid ${colorCSS["faillog_purple"]};
  border-bottom: 3px solid ${colorCSS["faillog_purple"]};
  transform: rotate(45deg) translate(-2px, -3px);
`

const ConfirmBtn = styled.button`
  width: 568px;
  height: 52px;
  background: ${colorCSS["faillog_purple"]};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px;
`

export default ReportPopup;
