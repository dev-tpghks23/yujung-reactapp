import styled from "styled-components"
import { boxShadow, colorCSS } from "../style"
import { flexBetweenRow, flexCenterColumn, flexCenterRow } from "../../../styles/common"

const CommunityBestPostStyle = {}

CommunityBestPostStyle.BestPostWrap = styled.div`
  margin-top: 95px;
  margin-bottom: 132px;
  width: 100dvw;
  ${flexCenterRow}
`

CommunityBestPostStyle.BestPost = styled.div`
  position: relative;
  width: 1320px;
  height: 608px;
  border: 1px, solid, ${colorCSS["faillog_light_purple"]};
  border-radius: 10px;
  overflow: hidden;
  ${flexBetweenRow}
  ${boxShadow["boxBasic"]}
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`

CommunityBestPostStyle.BestPostLeftLine = styled.div`
  position: absolute;
  left: 0px;
  bottom: 124px;
  width: 6px;
  height: 343px;
  border-radius: 100px;
  background-color: ${colorCSS["faillog_purple"]};
`

CommunityBestPostStyle.BestPostMainWrapDiv = styled.div`
  width: 788px;
  height: 606px;
  /* background-color: yellow; */
`

CommunityBestPostStyle.BestPostImgWrapDiv = styled.div`
  width: 530px;
  height: 606px;
  background-color: ${colorCSS.faillog_gray1};
  overflow: hidden;
`

CommunityBestPostStyle.BestPostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

CommunityBestPostStyle.BestPostMainDiv = styled.div`
  margin-left: 110px;
  margin-top: 131px;
  width: 536px;
  height: 420px;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  gap: 30px;
`

CommunityBestPostStyle.BestPostMainHeader = styled.div`
  height: 40px;
  ${flexBetweenRow}
`

CommunityBestPostStyle.BestPostMainHeaderTitle = styled.div`
  width: 256px;
  height: 40px;
  background-color: ${colorCSS.faillog_light_purple};
  ${flexCenterRow}
  border-radius: 15px;
`

CommunityBestPostStyle.BestPostMainTitle = styled.div`
  height: 92px;
  /* background-color: green; */
`

CommunityBestPostStyle.BestPostMainContent = styled.div`
  height: 60px;
  /* background-color: green; */
`

CommunityBestPostStyle.BestPostMainInfo = styled.div`
  height: 22px;
  /* background-color: green; */
`

CommunityBestPostStyle.UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`

CommunityBestPostStyle.AuthorArea = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  &:hover span { text-decoration: underline; }
`

CommunityBestPostStyle.PostInfo = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 16px;
`

CommunityBestPostStyle.infoElement = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

CommunityBestPostStyle.UserImg = styled.img`
  width: 24px;
  height: 24px;
`

CommunityBestPostStyle.BestPostMainButton = styled.div`
  height: 44px;
  /* background-color: green; */
`

CommunityBestPostStyle.GoPostInfoButton = styled.button`
  width: 172px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${colorCSS.faillog_purple};

  display: flex;
  ${flexCenterRow}
  gap: 8px;
`

CommunityBestPostStyle.BestPostMainHr = styled.hr`
  width: 536px;
  background-color: ${colorCSS["faillog-black"]};
`

export default CommunityBestPostStyle