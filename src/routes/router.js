import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout/RootLayout";
import PrivateRoute from "./PrivateRoute";
import LogMainContainer from "../pages/log/LogMainContainer";
import MainContainer from "../pages/main/MainContainer";
import LogResultContainer from "../pages/log/result/LogResultContainer";
import LogDetailContainer from "../pages/log/result/detail/LogDetailContainer";
import LogReportContainer from "../pages/log/result/report/LogReportContainer";
import LogPatternsContainer from "../pages/log/result/report/patterns/LogPatternsContainer";
import LogActionPlanContainer from "../pages/log/result/report/actionplan/LogActionPlanContainer";
import CommunityContainer from "../pages/community/CommunityContainer";
import CommunityListContainer from "../pages/community/list/CommunityListContainer";
import CommunityCreateContainer from "../pages/community/create/CommunityCreateContainer";
import CommunityDetailContainer from "../pages/community/detail/CommunityDetailContainer";
import CommunityEditContainer from "../pages/community/edit/CommunityEditContainer";
import LogWriteStep2Container from "../pages/log/write/LogWriteStep2Container";
import LogWriteStep1Container from "../pages/log/write/LogWriteStep1Container";
import LogWriteContainer from "../pages/log/write/LogWriteContainer";
import AccountLayout from "../pages/account/AccountLayout";
import JoinContainer from "../pages/account/join/JoinContainer";
import LoginContainer from "../pages/account/login/LoginContainer";
import ResetPassWordContainer from "../pages/account/resetpassword/ResetPassWordContainer";
import FindIdContainer from "../pages/account/findid/FindIdContainer";
import DeleteAccountContainer from "../pages/account/delete/DeleteAccountContainer";
import MyProfileContainer from "../pages/mypage/profile/MyProfileContainer";
import MyGuestbookContainer from "../pages/mypage/guestbook/MyGuestbookContainer";
import MyFailLogsContainer from "../pages/mypage/faillog/MyFailLogsContainer";
import MyLikesContainer from "../pages/mypage/likes/MyLikesContainer";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import LogOtherContainer from "../pages/log/other/LogOtherContainer";
import ChronologyMainContainer from "../pages/chronology/ChronologyMainContainer";
import ChronologyMain from "../pages/chronology/ChronologyMain";
import PerformanceAnalysis from "../pages/chronology/PerformanceAnalysis";
import PerformanceResult from "../pages/chronology/PerformanceResult";
import ProjectMainContainer from "../pages/project/ProjectMainContainer";
import ProjectSelectAllContainer from "../pages/project/selectAll/ProjectSelectAllContainer";
import ProjectDetailContainer from "../pages/project/detail/ProjectDetailContainer";
import ProjectPublicDetailContainer from "../pages/project/detail/ProjectPublicDetailContainer";
import VisionMainContainer from "../pages/vision/VisionMainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainContainer />  
      },
      // 공개 경로
      {
        path: "fail-logs",
        element: <LogOtherContainer />
      },
      {
        path: "my-page/:handle",
        children: [
          { path: "profile",   element: <MyProfileContainer /> },
          { path: "fail-logs", element: <MyFailLogsContainer isPageOwner={false} /> },
          { path: "likes",     element: <MyLikesContainer isPageOwner={false} /> },
          { path: "guestbook", element: <MyGuestbookContainer isPageOwner={false} /> },
        ]
      },
      {
        path: "community",
        element: <CommunityContainer />,
        children: [
          { path: "", element: <CommunityListContainer /> },
        ]
      },
      {
        path: "community/detail/:id",
        element: <CommunityDetailContainer />
      },
      {
        element: <AccountLayout />,
        children: [
          { path: "join",           element: <JoinContainer /> },
          { path: "login",          element: <LoginContainer /> },
          { path: "reset-password", element: <ResetPassWordContainer /> },
          { path: "find-id",        element: <FindIdContainer /> },
        ]
      },

      // 보호 경로 (로그인 필요)
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "logs",
            element: <LogMainContainer />,
            children: [
              {
                path: "new",
                element: <LogWriteContainer />,
                children: [
                  { path: "step1", element: <LogWriteStep1Container /> },
                  { path: "step1/:draftId", element: <LogWriteStep1Container /> },
                  { path: "step2", element: <LogWriteStep2Container /> },
                  { path: "step2/:draftId", element: <LogWriteStep2Container /> },
                ]
              },
              {
                path: "result/:id",
                element: <LogResultContainer />,
                children: [
                  { path: "detail", element: <LogDetailContainer /> },
                  {
                    path: "report",
                    element: <LogReportContainer />,
                    children: [
                      { path: "patterns",    element: <LogPatternsContainer /> },
                      { path: "action-plan", element: <LogActionPlanContainer /> },
                    ]
                  },
                ]
              },
            ]
          },
          { path: "community/new",      element: <CommunityCreateContainer /> },
          { path: "community/edit/:id", element: <CommunityEditContainer /> },
          {
            element: <AccountLayout />,
            children: [
              { path: "delete", element: <DeleteAccountContainer /> },
            ]
          },
          {
            path: "my-page",
            element: <MyPageContainer />,
            children: [
              { path: "profile",   element: <MyProfileContainer /> },
              { path: "fail-logs", element: <MyFailLogsContainer /> },
              { path: "likes",     element: <MyLikesContainer /> },
              { path: "guestbook", element: <MyGuestbookContainer /> },
            ]
          },
          {
            path: "chronology",
            element: <ChronologyMainContainer />,
            children: [
              { path: "",         element: <ChronologyMain /> },
              { path: "analysis", element: <PerformanceAnalysis /> },
              { path: "result",   element: <PerformanceResult /> },
            ]
          },
          {
            path: "projects",
            element: <ProjectMainContainer />,
            children: [
              { path: "",   element: <ProjectSelectAllContainer /> },
              { path: ":id", element: <ProjectDetailContainer /> },
            ]
          },
          {
            path: "vision",
            element: <VisionMainContainer />,
            children: []
          },
        ]
      },
      {
        path: "chronology",
        element: <ChronologyMainContainer />,
        children: [
          { path: "", element: <ChronologyMain /> },
          { path: "analysis", element: <PerformanceAnalysis /> },
          { path: "result", element: <PerformanceResult /> },
        ]
      },
      {
        path: "projects",
        element: <ProjectMainContainer />,
        children: [
        {
            path: "",
            element: <ProjectSelectAllContainer />
        },
        {
            path: ":id",
            element: <ProjectDetailContainer />
        },
        {
            // 다른 사람 프로젝트 상세 (읽기 전용)
            path: "public/:id",
            element: <ProjectPublicDetailContainer />
        }
            ]
        },
      {
        path: "vision",
        element: <VisionMainContainer />,
        children: []
      }
    ]
  },
])

export default router;